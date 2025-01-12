import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search"
          className="SearchInput"
        />
      </div>
      <div className="Favorite">
        <div className="floating-count">0</div>
        <img src="../src/assets/favorite.svg" alt="favorite-icon" />
      </div>
      <div className="Cart">
        <div className="floating-count">0</div>
        <img src="../src/assets/cart.svg" alt="cart-icon" />
      </div>
    </div>
  );
};

export default Header;
