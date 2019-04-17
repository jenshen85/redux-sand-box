import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;
/*
----analog bindActionCreators from redux----
const bindActionCreator = (creator, dispatch) => (...arg) => dispatch(creator(...arg))
*/
const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState()
}

// bindActionCreators return object with fields
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

store.subscribe(update)

document
  .getElementById('inc')
  .addEventListener('click', inc)

document
  .getElementById('dec')
  .addEventListener('click', dec)

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10)
    rnd(payload)
  })