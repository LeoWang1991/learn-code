import React, { 
  useReducer,
  // useState,
  // useEffect
} from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from './myhooks';
import styles from './index.less';

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch(action.type) {

    case 'increment': 
      return { ...state, count: state.count + 1 };
    case 'decrement': 
      return { ...state, count: state.count - 1 };
    default: 
      return state;
  }
}

//App();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount ] = useState(100);
  const [name, setName] = useState('xiaofei');

  console.log('11111')



  useEffect(() => {
    // console.log('count---', count);
    // setTimeout(() => {
    //   setName('kobe')
    // }, 3000);
    console.log('first use effect---');
  }, [])

  useEffect(() => {
    console.log('useeffect1---', count)
  }, [count, name]);

  useEffect(() => {
    console.log('useeffect2---', name)
  }, [])

  

  const increment = () => {
    setCount(count => count + 1);
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const rename = () => {
    setName(`re-${name}`)
  }
  
  const showAlert = () => {
    setTimeout(() => {
      alert(count)
    }, 3000);
  }


  return (
    <div style={{margin: 100}}>
      <p className={styles.options}>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={rename}>rename</button>
        <button onClick={showAlert}>show alert</button>
      </p>
      <p>count: {count}</p>
      <p>name: {name}</p>
    </div>
  )
}


const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}


export default App;