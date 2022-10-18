import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    className="modal"
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleDeleteSelectedOption}
    contentLabel="Selected Option"
  >
    <h3 className="modal--text">Selected Option</h3>
    {props.selectedOption && (
      <p className="modal--selected">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleDeleteSelectedOption}>
      Okay!
    </button>
  </Modal>
);

export default OptionModal;
