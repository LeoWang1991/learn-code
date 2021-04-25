/*
 * @Author: wangjx
 * @Date: 2021-04-24 21:28:20
 * @Description: redux 源码理解demo
 */

import { createStore } from '../index.js';

const initialState = {
  count: 0
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

// logState();

// store.dispatch({ type: 'ADD' });
store.subscribe(function() {
  console.log('订阅函数1');  
});
store.dispatch({ type: 'ADD' });
store.subscribe(function() {
  console.log('订阅函数2');
});
store.subscribe(function() {
  console.log('订阅函数3');
});
store.dispatch({ type: 'ADD' });
// unsubscribe();
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


