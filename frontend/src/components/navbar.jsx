import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useFavorites } from "../contexts/FavoritesContext";

const Navbar = () => {
  const { getCartItemsCount } = useCart();
  const { favoritesCount } = useFavorites();
  const cartItemsCount = getCartItemsCount();

  return (
    <header className="bg-[#F9F6F1] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-serif text-[#C1A875] tracking-wide">
          Clarté
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-[#333333] text-base font-sans">
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/account">Account</Link>
        </nav>

        {/* Cart and Favorites Icons */}
        <div className="flex items-center space-x-4">
          {/* Favorites Icon */}
          <div className="relative">
            <Link to="/favorites">
              <Heart className="text-[#333333]" size={24} />
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C1A875] text-white text-xs rounded-full px-1.5 min-w-[20px] h-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <Link to="/cart">
              <ShoppingCart className="text-[#333333]" size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C1A875] text-white text-xs rounded-full px-1.5 min-w-[20px] h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
