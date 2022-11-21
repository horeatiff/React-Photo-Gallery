import React from "react";

const Filters = (props) => {
  return (
    <div className="filters">
      <div className="filters__tags">
        <span className="filters__tags--content">{props.name}</span>

        <span className="filters__tags--content">{props.contains}</span>

        <span className="filters__tags--content">{props.auth}</span>

        <button className="filters__tags--delete">X</button>
      </div>

      <button className="filters__clear">{props.clear}</button>
    </div>
  );
};

export default Filters;
