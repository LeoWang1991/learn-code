/*
 * @Author: wangjx
 * @Date: 2021-04-15 13:53:50
 * @Description: 队列数据结构
 */

/**
 * FIFO，先进先出，排队，比较好理解
 */
class Queue {
  constructor() {
    this.items = {};
    this.count = 0;  // 队尾index
    this.lowestCount = 0; // 队首index
  }
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;    
  }
  dequeue() {
    if(!this.count) {
      return undefined;
    }

    const tmp = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
  }
  peek() {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  isEmpty() {
    return this.count === this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  toString() {
    if(this.isEmpty()) {
      return ''
    }
    let tmp = this.items[this.lowestCount];
    for(let i = this.lowestCount + 1;i < this.count;i++) {
      tmp += `,${this.items[i]}`
    }
    return tmp;
  }
}



// 数组实现，每次pop() 需要移出arr[0]
class QueueByArr {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if(!this.items.length) {
      return undefined;
    }
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return !this.items.length;
  }
  clear() {
    this.items = [];
  }
  size() {
    return this.items.length
  }
  toString() {
    if(this.isEmpty()) {
      return ''
    }
    let tmp = this.items[0];
    for(let i = 1;i < this.items.length;i++) {
      tmp += `,${this.items[i]}`
    }
    return tmp;
  }
}

const s1 = new QueueByArr();
s1.enqueue(1);
s1.enqueue(2);
s1.enqueue(3);
s1.dequeue();
console.log(s1.toString());

const s2 = new Queue();
s2.enqueue(1);
s2.enqueue(2);
s2.enqueue(3);
s2.dequeue();
console.log(s2.toString());
