import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";



const Header = () => {
  return (
    <header>

      <div className="container">
        
       <div className="navbar">
       <h1>Selling.</h1>
        <nav>
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to={"/detail"}>DETAIL</NavLink>
          <NavLink to={"/basket"}>BASKET</NavLink>
          <NavLink to={"/wishlist"}>WISHLIST</NavLink>
          <NavLink to={"/add"}>ADD</NavLink>
        </nav>
       </div>
      </div>
    </header>
  );
};

export default Header;
