// 实参和形参方式
// 形参和实参
function changeObj(obj = {}) {
  obj.name = 'xiaofei123';

  
  // return obj;
}

const obj1 = {
  age: 20
}

changeObj(obj1);

console.log(obj1)