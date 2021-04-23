/*
 * @Author: wangjx
 * @Date: 2021-04-20 16:00:45
 * @Description: js继承
 */

function Person(name) {
  this.name = name;  
}

Person.prototype.sayname = function() {
  console.log(this.name)
}

function Coder() {
  
}
Coder.prototype = new Person('xiaofei');

const c1 = new Coder();
c1.sayname();