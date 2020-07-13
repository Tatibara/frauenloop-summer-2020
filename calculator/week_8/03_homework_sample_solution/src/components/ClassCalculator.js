import React from "react";

class ClassCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      operator: null,
      input1: null,
      input2: null,
      output: 0,
      isEqualPressed: false,
    };
  }

  add = (a, b) => {
    return a + b;
  };

  substract = (a, b) => {
    return a - b;
  };

  multiply = (a, b) => {
    return a * b;
  };

  divide = (a, b) => {
    if (b === 0) {
      return "do not divide by 0";
    }
    return a / b;
  };

  clear = () => {
    this.setState({
      operator: null,
      input1: null,
      input2: null,
      output: 0,
      isEqualPressed: false,
    });
  };

  calculate = () => {
    let result;
    let isCalculate = true;

    switch (this.state.operator) {
      case "addition":
        result = this.add(Number(this.state.input1), Number(this.state.input2));
        break;
      case "substraction":
        result = this.substract(Number(this.state.input1), Number(this.state.input2));
        break;
      case "multiplication":
        result = this.multiply(Number(this.state.input1), Number(this.state.input2));
        break;
      case "division":
        result = this.divide(Number(this.state.input1), Number(this.state.input2));
        break;
      default:
        isCalculate = false;
    }
    console.log("calculate:", result);

    if (isCalculate && this.state.input1 && this.state.input2 && this.state.operator) {
      this.clear();
      this.setState({ output: result, input1: String(result), isEqualPressed: true });
      // this.setState({ output: result });
    }
  };

  setOperator = (event) => {
    console.log("setOperator is called! ", event.target.value);
    // https://reactjs.org/docs/events.html#event-pooling
    const value = event.target.value;

    if (this.state.input1 && this.state.input2 && this.state.operator) {
      this.calculate();
    } else {
      this.setState((prevState) => ({
        input1: prevState.input1 === null ? prevState.output : prevState.input1,
      }));
    }

    this.setState({
      operator: value,
      isEqualPressed: false,
    });
  };

  displayInput = (value) => {
    this.setState({
      output: value,
    });
  };

  setInput = (event) => {
    console.log("setInput is called! ", event.target.value);
    let value = event.target.value;

    this.setState({ isEqualPressed: false });

    if (this.state.input1 !== null && !this.state.operator && !this.state.isEqualPressed) {
      value = this.state.input1.toString().concat(value); // TODO: use Template string
      console.log("set input1: ", value);
      this.setState({ input1: Number(value) });
    } else if (this.state.input1 && this.state.operator) {
      if (this.state.input2 !== null) {
        value = this.state.input2.toString().concat(value);
      }
      console.log("set input2: ", value);
      this.setState({ input2: Number(value) });
    } else {
      console.log("set input1: ", value);
      this.setState({ input1: Number(value) });
    }

    this.displayInput(Number(value));
  };

  render() {
    return (
      <div className="container calculator w-50">
        <div className="row">
          <div className="col border" id="display">
            {this.state.output}
          </div>
          <button
            className="col-3"
            type="button"
            id="divide"
            value="division"
            onClick={this.setOperator}
            style={{ padding: "5px" }}
          >
            ÷
          </button>
        </div>

        <div className="row">
          <button className="col-3" type="button" value="7" onClick={this.setInput}>
            7
          </button>
          <button className="col-3" type="button" value="8" onClick={this.setInput}>
            8
          </button>
          <button className="col-3" type="button" value="9" onClick={this.setInput}>
            9
          </button>
          <button className="col-3" type="button" id="multiply" value="multiplication" onClick={this.setOperator}>
            &times;
          </button>
        </div>

        <div className="row">
          <button className="col-3" type="button" value="4" onClick={this.setInput}>
            4
          </button>
          <button className="col-3" type="button" value="5" onClick={this.setInput}>
            5
          </button>
          <button className="col-3" type="button" value="6" onClick={this.setInput}>
            6
          </button>
          <button className="col-3" type="button" id="subtract" value="substraction" onClick={this.setOperator}>
            -
          </button>
        </div>

        <div className="row">
          <button className="col-3" type="button" value="1" onClick={this.setInput}>
            1
          </button>
          <button className="col-3" type="button" value="2" onClick={this.setInput}>
            2
          </button>
          <button className="col-3" type="button" value="3" onClick={this.setInput}>
            3
          </button>
          <button className="col-3" id="add" value="addition" onClick={this.setOperator}>
            +
          </button>
        </div>

        <div className="row">
          <button className="col-3" id="clear" type="button" onClick={this.clear}>
            C
          </button>
          <button className="col-3" type="button" value="0" onClick={this.setInput}>
            0
          </button>
          <div className="col-3"></div>
          <button className="col-3" id="calculate" onClick={this.calculate}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCalculator;
