import React, { useState, useEffect } from "react";
import SideBar from "../Menu/SideMenu";

const Layout = ({ children, selectedPage, onPageChange }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Keep track of desktop vs mobile
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // On mobile, collapsed=true → icon‑only; on desktop, always expanded
  const collapsed = !isDesktop;

  return (
    <div className="flex">
      {/* Sidebar lives inside WP content wrapper, so no fixed/inset */}
      <SideBar
        page={selectedPage}
        onChange={onPageChange}
        collapsed={collapsed}
      />

      {/* Main content will sit to the right of that sidebar */}
      <main className="flex-1 w-full max-w-full p-0 min-w-0 h-full overflow-visible">
        {children}
      </main>
    </div>
  );
};

export default Layout;
