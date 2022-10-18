import React from "react";

// form
export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleAddOption = (e) => {
    e.preventDefault();
    console.log("testing");
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error: error,
      };
    });
    // this.setState(() => ({ error }));
    if (!error) e.target.elements.option.value = "";
  };
  render() {
    return (
      <div className="form-container">
        {this.state.error && (
          <p className="error-message">{this.state.error}</p>
        )}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button className="add-btn">Add Option</button>
        </form>
      </div>
    );
  }
}
