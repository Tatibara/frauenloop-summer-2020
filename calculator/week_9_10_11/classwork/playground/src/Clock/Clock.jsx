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
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  refreshHandler = () => {
    this.setState({ date: new Date() });
  };

  render() {
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
