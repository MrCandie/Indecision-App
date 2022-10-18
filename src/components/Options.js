import React from "react";
import Option from "./Option";

// options
const Options = (props) => (
  <div className="widget-body">
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>

    {props.options.length === 0 && (
      <p className="widget--message">Please add an option to get started</p>
    )}
    {props.options.map((option, i) => (
      <Option
        key={option}
        optionTest={option}
        index={i}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
