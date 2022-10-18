class Counter extends React.Component {
  constructor(props) {
    super();
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    const count = localStorage.getItem("count");
    const counts = +count;

    if (isNaN(counts)) return;
    this.setState(() => {
      return {
        count: counts,
      };
    });
  }

  componentDidUpdate(prevState, propState) {
    const count = this.state.count;
    if (prevState.count !== count) localStorage.setItem("count", count);
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count ? this.state.count : 0}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// let nameLet = "candie";
// nameLet = "tosin";
// console.log("nameLet", nameLet);

// let count = 0;
// // const addOne = () => {
// //   count++;

// //   renderCounter();
// // };
// // const minusOne = () => {
// //   count--;
// //   if (count >= 0) {
// //     renderCounter();
// //   } else {
// //     count = 0;
// //   }
// // };
// // const resetBtn = () => {
// //   count = 0;
// //   renderCounter();
// // };

// const renderCounter = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button>+1</button>
//       <button>-1</button>
//       <button>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, root);
// };
// renderCounter();
