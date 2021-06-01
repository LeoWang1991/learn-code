let colors = ['red', 'green', 'yellow'];
let tracking = new Set([123,234,456]);
let data = new Map();
data.set('title', 'understand es6');
data.set('format', 'print');

for(let value of colors) {
  console.log(value);
}

for(let num of tracking) {
  console.log(num)
}

for(let entry of data) {
  console.log(entry)
}


return;




// 迭代器
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  for(let i = start; i <= end; i += step) {
    yield i;
  }
}

function* generator() {
  yield 10;
  let x = yield 'foo';
  console.log(x);
  yield x;
}
const gen = generator();
// console.log(gen.next(100))
// console.log(gen.next())
// console.log(gen.next(100))
// console.log(gen.next())