import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
//import App from "../App";
import { Services } from "../pages/services/services";
import  AgentConcierge  from "../pages/agentConcierge/index";
import { Contract } from "../pages/contract/contract";
import Remote from "../pages/Remote";
import Segurança from "../pages/Sefety/setefy"

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/agentConcierge" element={<AgentConcierge />} />
        <Route path="/contact" element={<Contract />} />
        <Route path="/remote" element={<Remote />} />
        <Route path="/sefety" element={ <Segurança /> } />
      </Routes>
    </Router>
  );
}