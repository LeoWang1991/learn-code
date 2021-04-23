/*
 * @Author: wangjx
 * @Date: 2021-04-21 14:15:02
 * @Description: 类和继承
 */

class Person {
  constructor(name) {
    this.name = name;    
  }
  static hi() {
    console.log('hi111')
  }
  sayName() {
    console.log(this.name)
  }
}

const p1 = new Person('xiaofei');
p1.sayName();

class Man extends Person {
  constructor(name, sex) {        
    super();    
    this.sex = sex;
    // super.hi();
  }  
  logSex() {
    console.log(this.sex);
  }
}

const m1 = new Man('kkkk', 'male');
m1.sayName();
m1.logSex();

class A {
  name: 'xiaofei';
  func: function() {
    console.log('helo')
  }
}

class B extends A {
  name: 'xiaohong';
  hello() {
    console.log('B', this.name)
  }
}

const b = new B();
b.hello()

