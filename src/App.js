import "./styles/app.css";

import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="rf-dashboard">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;
