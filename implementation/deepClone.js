// 需要解决循环引用问题

function deepClone(source, map = new Map()) {
  if(!source || typeof source !== 'object') {
    return;
  }

  const target = Array.isArray(source) ? [] : {};  
  
  for(const key in source) {
    if(typeof source[key] !== 'object') {
      target[key] = source[key]
    }else {
      target[key] = deepClone(source[key])
    }
  }

  return target;
}

const obj1 = {
  a: 1
}

obj1.b = obj1;

console.log(deepClone(obj1))