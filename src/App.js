import { useState } from "react";

import "./App.css";

import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import MobileNav from "./components/MobileNav";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleResize = () => {
    if (isOpen) {
      setOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  const slideOutNav = () => setOpen(false);

  return (
    <div className="rf-dashboard">
      <div onClick={() => slideOutNav()} className={isOpen && "overlay"}></div>
      <MobileNav
        isOpen={isOpen}
        setOpen={setOpen}
        isHover={isHover}
        setHover={setIsHover}
      />
      <Nav isHover={isHover} isOpen={isOpen} />
      <Dashboard isOpen={isOpen} />
    </div>
  );
}

export default App;
