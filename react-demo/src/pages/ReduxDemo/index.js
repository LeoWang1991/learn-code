/*
 * @Author: wangjx
 * @Date: 2021-04-23 14:48:01
 * @Description: Redux 使用demo
 */

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './Counter';


const initialState = {
  count: 0
}

const countReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCR': {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case 'DECR': {
      return {
        ...state,
        count: state.count - 1
      }
    }
    default: return state;
  }
}

const store = createStore(countReducer);


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}

export default App;