/*
 * @Author: wangjx
 * @Date: 2021-04-09 14:07:05
 * @Description: 深拷贝
 */

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

// 需要解决循环引用问题
function deepClone(obj, map = new Map()) {  
  if(!isObject(obj)) {
    return obj;
  }
  const target = Array.isArray(obj) ? [] : {};  
  for(const key in obj) {
    if(typeof obj[key] !== 'object') {
      target[key] = obj[key]
    }else {
      target[key] = deepClone(obj[key])
    }
  }

  return target;
}

// 解决循环引用和重复引用问题
function _deepClone(obj, map = new Map()) {
  if(obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  const clone = Array.isArray(obj) ? [] : {};
  if(map.get(obj)) {
    return map.get(obj)
  }
  map.set(obj, clone);

  for(let key in obj) {
    clone[key] = _deepClone(obj[key], map);
  }
  // return map.get(obj);
  return clone;
}

function clone(source) {
  if(!isObject(source)) {    
    return source;
  }

  return _deepClone(source);
}

const test = {
  value: 1
}

const obj = {
  name: 'xiaofei',  
}

// obj.obj1 = obj;
obj.test1 = test;
obj.test2 = test;

const cloneObj = _deepClone(obj);
console.log(cloneObj);
