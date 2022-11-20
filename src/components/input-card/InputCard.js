import React from "react";
import { TbPencil } from "react-icons/tb";
import { TbSearch } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
import { TbChevronLeft } from "react-icons/tb";
import { TbChevronRight } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";

const InputCard = () => {
  return (
    <div className="input">
      <div className="input__parameters">
        <span className="input__parameters--title">My Parameters</span>

        <div className="input__parameters--buttons">
          <button className="input__parameters--button">
            <TbPencil size={32} />
            <span className="input__parameters--tags">Edit</span>
          </button>

          <button className="input__parameters--button">
            <HiOutlineTrash size={32} />
            <span className="input__parameters--tags">Delete</span>
          </button>

          <button className="input__parameters--button">
            <span className="input__parameters--tags">Create parameter</span>
          </button>
        </div>
      </div>

      <div className="input__search">
        <div className="input__search--bar">
          <div className="input__search--logo">
            <TbSearch size={32} />
          </div>

          <input
            className="input__search--field"
            type="text"
            placeholder="Search"
          ></input>
        </div>

        <div className="input__search--options">
          <div className="input__search--arrows">
            <button className="input_search--arrow">
              <TbChevronLeft size={24} />
            </button>

            <span className="input_search--number">1</span>

            <button className="input_search--arrow">
              <TbChevronRight size={24} />
            </button>
          </div>

          <button className="input__search--settings">
            <TbSettings size={32} />
          </button>
        </div>
      </div>

      <div className="input__filters">
        <div className="input__filters--tags">
          <span className="input__filters--tag">Name:</span>

          <span className="input__filters--tag">contains:</span>

          <span className="input__filters--tag">auth0</span>

          <button className="input__filters--delete">X</button>
        </div>

        <button className="input__filters--clear">Clear Filters</button>
      </div>

      <div className="input__background"></div>
    </div>
  );
};

export default InputCard;
