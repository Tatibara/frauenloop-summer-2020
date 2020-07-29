import React, { useState } from "react";

import Clock from "./Clock/Clock";
import Counter from "./Counter/Counter";
import ClassTopics from "./ClassTopics/ClassTopics";

const App = () => {
  const [isClassTopicsVisible, setIsClassTopicsVisible] = useState(false);
  const [isClockVisible, setIsClockVisible] = useState(false);
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsClassTopicsVisible(true);
          setIsClockVisible(false);
          setIsCounterVisible(false);
        }}
      >
        Show Class Topics
      </button>
      <button
        onClick={() => {
          setIsClassTopicsVisible(false);
          setIsClockVisible(true);
          setIsCounterVisible(false);
        }}
      >
        Show Clock
      </button>
      <button
        onClick={() => {
          setIsClassTopicsVisible(false);
          setIsClockVisible(false);
          setIsCounterVisible(true);
        }}
      >
        Show Counter
      </button>
      <button>TODO: Show Calculator</button>
      {isClassTopicsVisible && <ClassTopics />}
      {isClockVisible && <Clock />}
      {isCounterVisible && <Counter />}
    </div>
  );
};

export default App;
