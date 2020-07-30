import React from "react";

import Clock from "./Clock/Clock";
import Counter from "./Counter/Counter";
import ClassTopics from "./ClassTopics/ClassTopics";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClassTopicsVisible: false,
      isClockVisible: false,
      isCounterVisible: false,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              isClassTopicsVisible: true,
              isClockVisible: false,
              isCounterVisible: false,
            });
          }}
        >
          Show Class Topics
        </button>
        <button
          onClick={() => {
            this.setState({
              isClassTopicsVisible: false,
              isClockVisible: true,
              isCounterVisible: false,
            });
          }}
        >
          Show Clock
        </button>
        <button
          onClick={() => {
            this.setState({
              isClassTopicsVisible: false,
              isClockVisible: false,
              isCounterVisible: true,
            });
          }}
        >
          Show Counter
        </button>
        <button>TODO: Show Comment</button>
        <button>TODO: Show Calculator</button>

        {/* Conditional rendering: https://reactjs.org/docs/conditional-rendering.html */}
        {this.state.isClassTopicsVisible && <ClassTopics />}
        {this.state.isClockVisible && <Clock />}
        {this.state.isCounterVisible && <Counter />}
      </div>
    );
  }
}

export default App;
