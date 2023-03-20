import { useState } from "react";

import "./styles/app.css";

import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import MobileNav from "./components/MobileNav";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="rf-dashboard">
      <MobileNav isOpen={isOpen} setOpen={setOpen} />
      <Nav isOpen={isOpen} />
      <Dashboard isOpen={isOpen} />
    </div>
  );
}

export default App;
