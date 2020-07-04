import React from 'react';

class Calculator extends React.Component {
// functions
  constructor(props) {
    super(props)
    this.state = {
      operator: undefined,
      input1: undefined,
      input2: undefined,
      result: 100,
    }
  }
  setOperator = value => {
    this.setState({
      operator: value
    })
  };

  setInput = value => {

    this.displayInput(value);
    if (this.state.input1) {
        if (!this.state.operator) {
            let twoDigitInput = this.state.input1.toString().concat(value);
            this.setState({ input1: Number(twoDigitInput) })
        }
        this.setState ({ input2: Number(value) })
    } else {
        this.setState ({ input1: Number(value) })
    }
};

// display numbers of values 
    displayInput = value => {
      this.setState({
        result: value
      })
    }

// Code to be displayed
  render () {
    return (
      <div className="container calculator w-50">
        <div className="row">
          <div className="col border" id="display">The result is {this.state.result}</div>
          <button className="col-3" type="button" id="divide" 
          value="division"
          onClick={event => this.setOperator(event.target.value)}
          style={{ padding: '5px' }}
          >÷</button>
        </div>

        <div className="row">
          <button className="col-3" type="button" value="7" 
          onClick={event => this.setInput(event.target.value)}>7</button>
          <button className="col-3" type="button" value="8" 
         onClick={event => this.setInput(event.target.value)}>8</button>
          <button className="col-3" type="button" value="9" 
          onClick={event => this.setInput(event.target.value)}>9</button>
          <button className="col-3" type="button" id="multiply" 
          value="multiplication"
          onClick="setOperator(value)">&times;</button>
        </div>

        <div className="row">
            <button className="col-3" type="button" value="4" onClick={event => this.setInput(event.target.value)}>4</button>
            <button className="col-3" type="button" value="5" onClick={event => this.setInput(event.target.value)}>5</button>
            <button className="col-3" type="button" value="6" onClick={event => this.setInput(event.target.value)}>6</button>
            <button className="col-3" type="button" id="subtract" 
            value="substraction"
            onClick="setOperator(value)">-</button>
        </div>

        <div className="row">
            <button className="col-3" type="button" value="1" onClick={event => this.setInput(event.target.value)}>1</button>
            <button className="col-3" type="button" value="2" onClick={event => this.setInput(event.target.value)}>2</button>
            <button className="col-3" type="button" value="3" onClick={event => this.setInput(event.target.value)}>3</button>
            <button className="col-3" id="add" value="addition" 
            onClick="setOperator(value)">+</button>
        </div>

        <div className="row">
          <button className="col-3" id="clear"  type="button" onClick="clearDisplay()">C</button>
          <button className="col-3" type="button" onClick={event => this.setInput(event.target.value)}>0</button>
          <div className="col-3"></div>
          <button className="col-3" 
            id="calculate" onClick="calculate()">=</button>
        </div>
      </div>    
    )
  }
}

export default Calculator;