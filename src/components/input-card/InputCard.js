import React from "react";
import Button from "../button";
import Search from "../search";
import SearchArrows from "../search-arrows";
import SettingsButton from "../settings-button";
import Filters from "../filters";

import { TbPencil } from "react-icons/tb";
import { TbSearch } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";

const InputCard = (props) => {
  const doCeva = () => {
    console.log("ceva");
  };
  return (
    <div className="input">
      <div className="input__parameters">
        <span className="input__parameters--title">{props.title}</span>

        <div className="input__parameters--buttons">
          <Button title="Edit" functie={doCeva}>
            <TbPencil size={32} />
          </Button>

          <Button title="Delete">
            <HiOutlineTrash size={32} />
          </Button>

          <Button title="Create parameter" />
        </div>
      </div>

      <div className="input__search">
        <Search>
          <TbSearch size={32} />
        </Search>

        <div className="input__search--options">
          <SearchArrows />

          <SettingsButton>
            <TbSettings size={32} />
          </SettingsButton>
        </div>
      </div>

      <Filters
        name="Name:"
        contains="Contains:"
        auth="auth0:"
        clear="Clear filters"
      />

      <div className="input__background"></div>
    </div>
  );
};

export default InputCard;
