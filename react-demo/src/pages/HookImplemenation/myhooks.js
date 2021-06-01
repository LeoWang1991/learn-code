import App from './index';

let memoriedState = []; //
let index = 0;
let allDeps = [];  // [[100], ['xiaofei']]  
let effectIndex = 0;

// state => newState 传入是函数的写法
function useState(initialState) {
  memoriedState[index] = memoriedState[index] || initialState;
  const currentIndex = index;
  function setState(newState) {
    memoriedState[currentIndex] = typeof newState === 'function' ? newState(memoriedState[currentIndex]) : newState;
    // memoriedState[currentIndex] = newState;
    index = 0;
    render();
  }

  return [memoriedState[index++], setState]
}


function useEffect(callback, deps) {
  // console.log('alldeps---', allDeps)
  if(!allDeps[effectIndex]) {
    allDeps[effectIndex] = deps;
    effectIndex++;
    callback();
    return;
  }

  const currentEffectIndex = effectIndex;
  const currentDeps = allDeps[currentEffectIndex];

  // 新传入deps是否变化
  // 对象类型 深比较
  const isChanged = currentDeps.some((v, i) => v !== deps[i]);
  if(isChanged) {
    callback();
    allDeps[effectIndex] = deps;
  }
  effectIndex++;
}

function render() {
  effectIndex = 0;
  ReactDOM.render(<App />, document.getElementById('root'));
}

export {
  useState,
  useEffect
};