// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number
};

export default class Counter extends Component<Props> {
  props: Props;

  render() {
    const {
      increment,
      incrementIfOdd,
      incrementAsync,
      decrement,
      counter
    } = this.props;
    return (
      <div>
        <div className="backButton" data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className="counter" data-tid="counter">
          {counter}
        </div>
        <div className="btnGroup">
          <button className="btn" onClick={increment} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className="btn" onClick={decrement} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
          <button className="btn" onClick={incrementIfOdd} data-tclass="btn">
            odd
          </button>
          <button
            className="btn"
            onClick={() => incrementAsync()}
            data-tclass="btn"
          >
            async
          </button>
        </div>
      </div>
    );
  }
}
