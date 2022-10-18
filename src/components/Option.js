import React from "react";
import Options from "./Options";

const Option = (props) => (
  <div className="option">
    <p className="option--text">
      {props.index + 1}. {props.optionTest}
    </p>

    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionTest);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
