// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Start from "./pages/start";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";
import Account from "./pages/account";
import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />

        {/* Routes with Navbar included in each page component */}
        <Route path="/home" element={<><Navbar /><Home /></>} />
        <Route path="/shop" element={<><Navbar /><Shop /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/account" element={<><Navbar /><Account /></>} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;