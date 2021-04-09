const person = {
  name: 'xiaofei',
  age: 20,
  addr: 'zhejianghangzhou',
  job: 'coder'
}

// defineProperties
/**
 * 数据属性：
 * configurable
 * enumerable
 * writable
 * value
 */
Object.defineProperties(person, {
  name: {
    configurable: true,
    enumerable: false,    
  },
  age: {
    writable: false
  }
});

// delete person.name;
person.age = 22
// console.log(person)

// 访问器属性
Object.defineProperties(person, {
  name: {
    get() {
      console.log('get name---', this.age);
      return this.age;
    },
    set(value) {
      console.log('set name---', value);
      name = value
    }
  }
})

person.name = 'kkkk';
console.log(person.name);

