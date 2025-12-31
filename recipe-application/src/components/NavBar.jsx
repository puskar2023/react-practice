import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="z-10 w-full text-2xl flex justify-center items-center gap-9 h-20 bg-black/60 bg-blend-overlay mb-6 fixed top-0 lg:gap-14">
      <NavLink to="/" className={(e) => (e.isActive ? "text-red-400" : "")}>
        <div className="flex flex-col items-center justify-center">
          <i className="text-4xl ri-home-5-fill"></i>
          <span className="text-sm">Home</span>
        </div>
      </NavLink>
      <NavLink
        to="/recipes"
        className={(e) => (e.isActive ? "text-red-400" : "")}
      >
        <div className="flex flex-col items-center justify-center">
          <i className="text-4xl ri-restaurant-fill"></i>
          <span className="text-sm">Recipes</span>
        </div>
      </NavLink>
      <NavLink
        to="/favourite"
        className={(e) => (e.isActive ? "text-red-400" : "")}
      >
        <div className="flex flex-col items-center justify-center">
          <i className="text-4xl ri-heart-line"></i>
          <span className="text-sm">Favourites</span>
        </div>
      </NavLink>
      <NavLink
        to="/create-recipe"
        className={(e) => (e.isActive ? "text-red-400" : "")}
      >
        <div className="flex flex-col items-center justify-center">
          <i className="text-4xl ri-chat-new-line"></i>
          <span className="text-sm">Create Recipe</span>
        </div>
      </NavLink>
    </div>
  );
};

export default NavBar;
