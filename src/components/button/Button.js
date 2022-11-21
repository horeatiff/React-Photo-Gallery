import React from "react";

const Button = (props) => {
  return (
    <button className="button" onClick={() => props.functie()}>
      {props.children}
      <span className="button__tags">{props.title}</span>
    </button>
  );
};

export default Button;
