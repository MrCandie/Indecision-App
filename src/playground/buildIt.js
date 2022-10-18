const root = document.getElementById("app");

class VisibilityToggle extends React.Component {
  constructor(props) {
    super();
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && <p>Here are the details you requested for</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, root);

// let visible = false;
// const toggle = () => {
//   visible = !visible;
//   toggleDetails();
// };

// const toggleDetails = () => {
//   const visibility = (
//     <div>
//       {" "}
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggle}>
//         {visible ? "Hide Details" : "Show Details"}
//       </button>
//       {visible && <p>Here are the details you requested for</p>}
//     </div>
//   );
//   ReactDOM.render(visibility, root);
// };
// toggleDetails();
