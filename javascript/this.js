const xiaofei = {
  name: '小飞',
  age: 20
}

function Person(name, age)  {
  this.name = name;
  this.age = age;
  this.rule = false;

  // return 'hello world'
  return xiaofei;
}

const p1 = new Person('xiaofei2222', 220)

// console.log(p1)
console.log(Person())