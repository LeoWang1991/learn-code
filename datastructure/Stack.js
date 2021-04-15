/*
 * @Author: wangjx
 * @Date: 2021-04-15 13:53:27
 * @Description: Stack data structure by javascript
 */
class Stack {
  constructor() {
    this.items = [];
  }
  // 添加元素
  push(element) {
    this.items.push(element);
  }
  // 移除顶部元素 并返回该元素
  pop() {
    return this.items.pop();
  }
  // 返回顶部元素
  peek() {
    return this.items[this.items.length - 1];
  }
  // 判断是否空
  isEmpty() {
    return !this.items.length;
  }
  // 清除栈
  clear() {
    this.items = []
  }
  // 返回栈长度
  size() {
    return this.items.length;
  }
}

/**
 * @description: 通过object hash获取值更快
 * @param {*}
 * @return {*}
 */
class StackByHash {
  constructor() {
    this._count = 0;
    this._items = {}
  }
  push(element) {
    this._items[this._count] = element;
    this._count++;
  }
  pop() {
    if(!this._count) {
      return undefined;
    }
    this._count--;
    const tmp = this._items[this._count];
    delete this._items[this._count];    
    return tmp;
  }
  peek() {
    return this._items[this._count - 1];
  }
  isEmpty() {
    return !this._count;
  }
  clear() {
    this._count = 0;
    this._items = {}
  }
  size() {
    return this._count;
  }
  toString() {
    if(!this._count) {
      return ''
    }
    let tmp = this._items[0];
    for(let i = 1; i < this._count;i++) {
      tmp += `,${this._items[i]}`;
    }
    return tmp;
  }
}

const stack1 = new StackByHash();
stack1.push(1);
console.log(stack1.toString());
stack1.push(2);
console.log(stack1.toString())