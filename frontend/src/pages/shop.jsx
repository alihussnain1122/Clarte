// src/pages/Shop.jsx
import React from "react";
import ShopHeader from "../components/shop/ShopHeader";
import Products from "../components/shop/Products";

const Shop = () => {
  return (
    <div className="min-h-screen bg-[#F9F6F1] text-[#333]">
      {/* Page Header */}
      <ShopHeader />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Products Component handles filters and grid internally */}
        <Products />
      </div>
    </div>
  );
};

export default Shop;
