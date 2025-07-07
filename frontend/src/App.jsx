// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { ToastProvider } from "./contexts/ToastContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

// Pages
import Start from "./pages/start";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";
import Account from "./pages/account";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Favorites from "./pages/favorites";
import Footer from "./components/footer";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <FavoritesProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Start />} />

              {/* Routes with Navbar included in each page component */}
              <Route path="/home" element={<><Navbar /><Home /></>} />
              <Route path="/shop" element={<><Navbar /><Shop /></>} />
              <Route path="/product/:id" element={<><Navbar /><ProductDetails /></>} />
              <Route path="/cart" element={<><Navbar /><Cart /></>} />
              <Route path="/checkout" element={<><Navbar /><Checkout /></>} />
              <Route path="/favorites" element={<><Navbar /><Favorites /></>} />
              <Route path="/about" element={<><Navbar /><About /></>} />
              <Route path="/contact" element={<><Navbar /><Contact /></>} />
              <Route path="/account" element={<><Navbar /><Account /></>} />
            </Routes>
            <Footer />
          </Router>
        </FavoritesProvider>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;