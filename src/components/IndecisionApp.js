import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal.js";

// parent component
export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleDeleteSelectedOption = () => {
    this.setState(() => {
      return {
        selectedOption: undefined,
      };
    });
  };

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: [],
      };
    });
    // this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter(
          (option) => optionToRemove !== option
        ),
      };
    });
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => {
      // alert(this.state.options[randomNum]);
      return {
        selectedOption: this.state.options[randomNum],
      };
    });
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter Valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exist";
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option]),
      };
    });
    // this.setState((prevState) => ({
    //   options: prevState.options.concat([option]),
    // }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => {
          return {
            options: options,
          };
        });
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    const title = "Indecision";
    const subTitle = "Put Your Life in the hands of a Computer";
    return (
      <div>
        <Header subTitle={subTitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          handleDeleteSelectedOption={this.handleDeleteSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};
