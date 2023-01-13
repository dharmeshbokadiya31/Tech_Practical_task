import React from "react";
import BackIcon from "../../common/backIcon";
import CartIcon from "../../common/cartIcon";
import FilterIcon from "../../common/filterIcon";
import SearchIcon from "../../common/searchIcon";
import LocationDropdown from "./LocationDropdown";

const Header = ({ setOpen }) => {
  return (
    <div className="flex items-center justify-between">
      <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary">
        <BackIcon />
      </button>
      <div className="flex items-center gap-4">
        <LocationDropdown />
        <div className="relative flex items-center header-search">
          <div className="absolute ml-4">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="w-full py-3 pl-12 rounded-lg bg-light-gray"
            placeholder="Search for Restaurants (Press Enter to search)"
          />
        </div>
        <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary" onClick={() => setOpen(true)}>
          <FilterIcon />
        </button>
        <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange">
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
