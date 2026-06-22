import AIAssistant from "./pages/AIAssistant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyerDashboard from "./pages/dashboard/BuyerDashboard";
import VendorDashboard from "./pages/dashboard/VendorDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ai" element={<AIAssistant />} />
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/buyer" element={<BuyerDashboard />} />

<Route path="/vendor" element={<VendorDashboard />} />

<Route path="/admin" element={<AdminDashboard />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;