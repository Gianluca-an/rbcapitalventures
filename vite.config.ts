import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// Two build modes:
//  - default `vite build`  -> normal multi-asset build in /dist (best for real hosting)
//  - `SINGLEFILE=1 vite build` -> everything inlined into one dist/index.html
//    (trivial to drop anywhere, and used to generate the interactive preview)
const singleFile = process.env.SINGLEFILE === "1";

export default defineConfig({
  plugins: [react(), ...(singleFile ? [viteSingleFile()] : [])],
  build: {
    target: "es2020",
    cssCodeSplit: !singleFile,
    assetsInlineLimit: singleFile ? 100_000_000 : 4096,
  },
});
