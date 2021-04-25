/*
 * @Author: wangjx
 * @Date: 2021-04-24 20:37:48
 * @Description: 观察者模式
 */

// JavaScript设计模式与开发实践中的学习内容
/**
 * 以购房者和售楼处为例子理解，购房者去售楼处订阅是否新楼盘开盘这个消息，
 * 等到有新楼盘开盘时候 售楼处会向每个购房者发布这个消息
 */

var saleOffice = {}; // 定义售楼处
saleOffice.clientList = {};  // 自定义一些标注

// 这种方式的没有订制 每个订阅者收到同样的消息
// saleOffice.listen = function(fn) {  // 增加订阅者
//   this.clientList.push(fn)
// }
saleOffice.listen = function(key, fn) {
  if(!this.clientList[key]) {
    this.clientList[key] = [];
  }
  this.clientList[key].push(fn)
}


saleOffice.trigger = function() {
  const key = Array.prototype.shift.call(arguments);
  fns = this.clientList[key];
  if(!fns || !fns.length) {
    return false;
  }

  for(let i = 0, fn; fn = fns[i++];) {
    fn.apply(this, arguments)
  }
}

saleOffice.listen('s800', function(price, square) {
  console.log(`价格：${price}，面积${square},总价${price * square}`);  
});
saleOffice.listen('s110', function(price, square) {
  console.log(`价格：${price}，面积${square},总价${price * square}`);
});

saleOffice.trigger('s800', 20000, 88);
saleOffice.trigger('s110', 22000, 110);
