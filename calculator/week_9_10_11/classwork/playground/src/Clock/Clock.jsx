import React from "react";

// Function Component
// function Clock() {
//   const date = new Date();

//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// Class Component
class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };

    console.log("constructor()");
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("componentDidMount()");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("componentWillUnmount()");
  }

  tick() {
    this.setState({
      date: new Date(),
    });
    console.log("tick()");
  }

  refreshHandler = () => {
    this.setState({ date: new Date() });
    console.log("refreshHandler()");
  };

  render() {
    console.log("render()");
    return (
      <div>
        <h1>Clock!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.refreshHandler}>Refresh</button>
      </div>
    );
  }
}

export default Clock;
