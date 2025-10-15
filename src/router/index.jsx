import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import App from "../App";
import { Services } from "../pages/services/services";
import  AgentConcierge  from "../pages/agentConcierge/index";
import { Contract } from "../pages/contract/contract";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/agentConcierge" element={<AgentConcierge />} />
        <Route path="/contact" element={<Contract />} />
      </Routes>
    </Router>
  );
}