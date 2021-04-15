/*
 * @Author: wangjx
 * @Date: 2021-04-15 13:53:19
 * @Description: 
 * 1. 链表数据结构 链表不连续，插入或者删除不会影响其他元素
 * 2. 但是不能指定访问 访问的话 要从头开始访问下去
 * 3. 链表的元素 Node
 */

function defaultEquals(a, b) {
  return a === b;
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/**
 * 1. 链表数据结构只就记录第一项数据位置
 * 2. 链表中 head = { element: 1, next: null }
 * 3. 链表存储的不是基本元素的话 怎么比较数据
 */
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }
  // 尾部添加新元素
  push(element) {
    const node = new Node(element);
    if(this.head == null) {
      this.head = node;
      this.count++;
      return;
    }

    let current = this.head;
    // current.next 作为boolean判断就够了
    while(current.next != null) {
      current = current.next;
    }
    current.next = node;
    this.count++;
  }
  // 插入新元素
  insert(element, position) {
    if(position < 0 || position > this.count) {
      return false;
    }

    const node = new Node(element);
    this.count++;
    let current = this.head;
    if(position === 0) {
      node.next = current;
      this.head = node;
      return;
    } 

    let prev = this.getElementAt(position - 1);
    current = prev.next;

    prev.next = node;
    node.next = current;
  
  }
  // 返回特定元素 这个可以被其他复用
  // 这里需要理解下，尾结点null 也算对应的节点
  // 比如this.count=1, index=0取的是当前项，index=1则获取的是尾节点 null,链表到头了  
  getElementAt(index) {
    if(index < 0 || index > this.count) {
      return undefined;
    }
    let current = this.head;
    for(let i = 0; i < index && current != null;i++) {
      current = current.next;
    }
    return current;
  }
  // 移除元素
  removeElement(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  // 返回元素索引
  indexOf(element) {
    let current = this.head;
    for(let i = 0; i < this.count && current.next != null;i++) {
      if(current.element === element) {
        return i
      }
      current = current.next;
    }
    return -1;
  }
  // 特定位置移除元素
  removeAt(index) {
    if(index < 0 || index >= this.count) {
      return undefined;
    }
    
    this.count--;
    let current = this.head;
    // 移除第一项 改变下this.head即可
    if(index === 0) {
      this.head = current.next;
      return current.element;
    }

    let prev = this.getElementAt(index - 1);
    current = prev.next;
    prev.next = current.next;
    
    return current.element;    
  }
  // 判空 
  isEmpty() {
    return !this.count;
  }
  // 长度
  size() {
    return this.count;
  }
  // 转字符串
  toString() {
    if(this.head == null) {
      return ''
    }

    let tmp = this.head.element;
    let current = this.head.next;
    for(let i = 1;i < this.count && current != null;i++) {
      tmp += `,${current.element}`;
      current = current.next;
    }
    return tmp;
  }
}


const l1 = new LinkedList();
l1.push('hello');
l1.push('world');

console.log(l1.indexOf('hello'));
console.log(l1.toString())

