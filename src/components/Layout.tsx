import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

/** Scrolls to the top whenever the route changes. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  useSmoothScroll();
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
