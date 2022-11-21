import React from "react";
import { TbChevronLeft } from "react-icons/tb";
import { TbChevronRight } from "react-icons/tb";

const SearchArrows = () => {
  return (
    <div className="arrows">
      <button className="arrows__nav">
        <TbChevronLeft size={24} />
      </button>

      <span className="arrows__number">1</span>

      <button className="arrows__nav">
        <TbChevronRight size={24} />
      </button>
    </div>
  );
};

export default SearchArrows;
