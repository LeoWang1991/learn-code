/*
 * @Author: wangjx
 * @Date: 2021-04-19 19:21:54
 * @Description: 创建对象的几种方式
 */

// 工厂模式
// 没法识别对象类型 instanceof 永远是object
function createPerson(name, age, job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(this.name)
  }

  return o;
}

// 构造函数模式
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log(this.name)
  }
}
let p1 = new Person('xiaofei', 10);
let p2 = new Person('xiaohong', 12);

function FakeNew() {
  console.log(arguments instanceof Array);  

  let obj = new Object();
  const Constructor = [].shift.apply(arguments);
  if(typeof Constructor !== 'function') {
    throw '第一个参数,请传入构造函数';    
  }
  obj.__proto__ = Constructor.prototype;
  let res = Constructor.apply(obj, arguments);

  return typeof res === 'object' ? res : obj;  
}

const p3 = FakeNew(Person, 'xiaofei', 20);

p3.sayName();

