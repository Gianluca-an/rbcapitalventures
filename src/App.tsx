import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AssetClasses } from "./pages/AssetClasses";
import { Sectors } from "./pages/Sectors";
import { Criteria } from "./pages/Criteria";
import { Contact } from "./pages/Contact";
import { ThankYou } from "./pages/ThankYou";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/asset-classes" element={<AssetClasses />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/investment-criteria" element={<Criteria />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
