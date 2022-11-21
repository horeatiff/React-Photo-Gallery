import React from "react";

const Search = (props) => {
  return (
    <div className="search">
      <div className="search__logo">{props.children}</div>

      <input className="search__field" type="text" placeholder="Search"></input>
    </div>
  );
};

export default Search;
