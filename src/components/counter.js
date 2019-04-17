import React from 'react';
import './counter.css';
import { connect } from 'react-redux'

const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>{ counter }</h1>
        <button className="btn btn-primary btn-large"
                onClick={ dec }>dec</button>
        <button className="btn btn-primary btn-large"
                onClick={ inc }>inc</button>
        <button className="btn btn-primary btn-large"
                onClick={ rnd }>rnd</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}
export default connect(mapStateToProps)(Counter);
