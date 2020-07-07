import React from "react";

const FuncCalculator = () => {
  const result = 200;

  const setOperator = (event) => {
    console.log("setOperator is called! ", event.target.value);
  };

  const setInput = (event) => {
    console.log("setInput is called! ", event.target.value);
  };

  return (
    <div className="container calculator w-50">
      <div className="row">
        <div className="col border" id="display">
          The result is {result}
        </div>
        <button
          className="col-3"
          type="button"
          id="divide"
          value="division"
          onClick={(event) => setOperator(event.target.value)}
          style={{ padding: "5px" }}
        >
          ÷
        </button>
      </div>

      <div className="row">
        <button className="col-3" type="button" value="7" onClick={setInput}>
          7
        </button>
        <button className="col-3" type="button" value="8" onClick={setInput}>
          8
        </button>
        <button className="col-3" type="button" value="9" onClick={setInput}>
          9
        </button>
        <button className="col-3" type="button" id="multiply" value="multiplication" onClick={setOperator}>
          &times;
        </button>
      </div>

      <div className="row">
        <button className="col-3" type="button" value="4" onClick={setInput}>
          4
        </button>
        <button className="col-3" type="button" value="5" onClick={setInput}>
          5
        </button>
        <button className="col-3" type="button" value="6" onClick={setInput}>
          6
        </button>
        <button className="col-3" type="button" id="subtract" value="substraction" onClick={setOperator}>
          -
        </button>
      </div>

      <div className="row">
        <button className="col-3" type="button" value="1" onClick={setInput}>
          1
        </button>
        <button className="col-3" type="button" value="2" onClick={setInput}>
          2
        </button>
        <button className="col-3" type="button" value="3" onClick={setInput}>
          3
        </button>
        <button className="col-3" id="add" value="addition" onClick={setOperator}>
          +
        </button>
      </div>

      <div className="row">
        <button className="col-3" id="clear" type="button">
          C
        </button>
        <button className="col-3" type="button" onClick={setInput}>
          0
        </button>
        <div className="col-3"></div>
        <button className="col-3" id="calculate">
          =
        </button>
      </div>
    </div>
  );
};

export default FuncCalculator;
