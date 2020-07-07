import React from "react";

class ClassCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      operator: null,
      input1: null,
      input2: null,
      result: 0,
    };
  }

  add = (a, b) => {
    return a + b;
  };

  clear = () => {
    // TODO
    // example this.setState({ input2: Number(value) });
    // input1 = null;
    // input2 = null;
    // operator = null;
  };

  calculate = () => {
    switch (this.state.operator) {
      case "addition":
        // TODO
        // document.getElementById("display").innerHTML = add(input1, input2);
        this.clear();
        break;
      case "substraction":
        // TODO
        // document.getElementById("display").innerHTML = substract(input1, input2);
        this.clear();
        break;
      case "multiplication":
        // TODO
        // document.getElementById("display").innerHTML = multiply(input1, input2);
        this.clear();
        break;
      case "division":
        // TODO
        // document.getElementById("display").innerHTML = divide(input1, input2);
        this.clear();
        break;
      default:
        console.log("no input defined");
    }
  };

  setOperator = (event) => {
    console.log("setOperator is called! ", event.target.value);
    this.setState({
      operator: event.target.value,
    });
  };

  displayInput = (value) => {
    this.setState({
      result: value,
    });
  };

  setInput = (event) => {
    console.log("setInput is called! ", event.target.value);
    const value = event.target.value;

    if (this.state.input1) {
      if (!this.state.operator) {
        let twoDigitInput = this.state.input1.toString().concat(value);
        this.setState({ input1: Number(twoDigitInput) });
      }
      this.setState({ input2: Number(value) });
    } else {
      this.setState({ input1: Number(value) });
    }

    this.displayInput(value);
  };

  render() {
    return (
      <div className="container calculator w-50">
        <div className="row">
          <div className="col border" id="display">
            {this.state.result}
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
          <button className="col-3" id="clear" type="button">
            C
          </button>
          <button className="col-3" type="button" onClick={this.setInput}>
            0
          </button>
          <div className="col-3"></div>
          <button className="col-3" id="calculate">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCalculator;
