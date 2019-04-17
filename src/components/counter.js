import React from 'react';
import './counter.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as actions from '../actions';

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
