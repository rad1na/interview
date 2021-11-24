import React from "react";

export const Dropdown = ({ placeholder, items, status }) => {
  return (
    <div className="dropdown">
      <button
        className={`btn btn-secondary dropdown-toggle ${
          !status ? "disabled" : ""
        }`}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {placeholder}
      </button>
      <ul
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
        style={{ overflowY: "scroll", maxHeight: "200px" }}
      >
        {items ? items.map((item) => item) : null}
      </ul>
    </div>
  );
};
