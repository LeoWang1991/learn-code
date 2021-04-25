/*
 * @Author: wangjx
 * @Date: 2021-04-24 21:28:20
 * @Description: 
 */

import { createStore } from './index.js';

const initialState = {
  count: 1
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD': return {
      ...state,
      count: state.count + 1
    };
    case 'MIN': return {
      ...state,
      count: state.count - 1
    };
    default: return state;
  }
}

const logState = () => {
  console.log(store.getState())
}


const store = createStore(reducer);
store.subscribe(function() {
  console.log(`当前状态`, store.getState());
})

// logState();
store.dispatch({ type: 'ADD' })
// logState();
store.dispatch({ type: 'MIN' })
// logState();


