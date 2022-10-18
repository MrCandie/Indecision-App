// parent component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options,
    };
  }

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

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
    // this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    console.log(optionToRemove);
    this.setState((prevState) => {
      return {
        options: prevState.options.filter(
          (option) => optionToRemove !== option
        ),
      };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddOption(option) {
    console.log(this.state.options.indexOf(option));
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
  }

  render() {
    const title = "Indecision";
    const subTitle = "Put Your Life in the hands of a Computer";
    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

// header
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
};

// action
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What Should I do?
      </button>
    </div>
  );
};

// options
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {props.options.map((option) => (
        <Option
          key={option}
          optionTest={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

// form
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    console.log(error);

    this.setState(() => {
      return {
        error: error,
      };
    });
    // this.setState(() => ({ error }));
    if (!error) e.target.elements.option.value = "";
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="Enter your option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
// option
const Option = (props) => {
  return (
    <div>
      <p>Options: {props.optionTest}</p>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionTest);
        }}
      >
        Remove
      </button>
    </div>
  );
};

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name} </p>
//       <p>Age: {props.age} </p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
