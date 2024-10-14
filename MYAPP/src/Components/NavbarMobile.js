import React from "react";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);
  return (
    <>
      <div className="bars_box">
        <div className="icon" onClick={() => setOpen(!open)}>
          <span id="bar1" className="bar"></span>
          <span id="bar2" className="bar"></span>
          <span id="bar3" className="bar"></span>
        </div>
      </div>

      {open && (
        <MobileNavigation isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </>
  );
}
