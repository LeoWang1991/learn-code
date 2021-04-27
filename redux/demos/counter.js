/*
 * @Author: wangjx
 * @Date: 2021-04-24 21:28:20
 * @Description: redux 源码理解demo
 */

import { createStore } from '../index.js';
import combineReducers from '../combineReducers.js';

const initialState = {
  count: 0
};

const todoInitState = [];

let nextTodoId = 0;

const counter = (state = initialState, action) => {
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

const todo = (state = todoInitState, action) => {
  switch(action.type) {
    case 'ADD_ITEM': {
      return [
        ...state,
        {
          id: nextTodoId++,
          text: action.payload
        }
      ]
    };
    default: return state;    
  }
}


const logState = () => {
  console.log(store.getState())
}

const reducer = combineReducers({
  counter,
  todo
})


const store = createStore(reducer);

store.subscribe(() => {
  console.log(`当前store数据--`, store.getState());
})


store.dispatch({
  type: 'ADD_ITEM',
  payload: '学习redux'
});
// store.dispatch({
//   type: 'ADD_ITEM',
//   payload: '学习redux'
// })


// store.dispatch({ type: 'ADD' })


// unsubscribe();

// store.dispatch({ type: 'MIN' })
// store.dispatch({ type: 'ADD' });
// store.dispatch({ type: 'ADD' });

// logState();
// store.dispatch({ type: 'ADD' })
// logState();
// store.dispatch({ type: 'MIN' })
// logState();


