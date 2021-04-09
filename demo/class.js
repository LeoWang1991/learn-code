const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('应该在 baz 之后、bar 之前')
  )
    .then(resolve => {console.log(resolve); return resolve})
    .then(res => console.log(res))

  baz()
}

foo()

class Person {
  constructor(name, age, addr) {
    this.name = name;
    this.age = age;
    this.addr = addr + 'kkk';
  }

  logInfo() {
    console.log('name and age---', this.name, this.age)
  }
}

class Staff extends Person {
  constructor(name, age, addr) {
    super();    
    this.addr = addr;
  }
  
  logAddr() {
    console.log('addr---', this.addr)
  }
}

const p1 = new Person('xiaofei', 20);
const s1 = new Staff('xiaohong',33, '浙江杭州');

// p1.logInfo();
// s1.logInfo();
// s1.logAddr();