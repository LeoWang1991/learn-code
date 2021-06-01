// async函数

function resolveAfter2s() {
  return new Promise((resolve, reject) => {
    reject('rejected...');
    setTimeout(() => {    
      resolve('resolved...')
    }, 2000);
  })
}

async function asyncCall() {
  console.log('calling...');
  const result  = await resolveAfter2s();

  console.log(result);
}

// asyncCall();

// resolveAfter2s().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log('err:', err);
//   throw(err);
// }).then(res => {
//   console.log(res);
//   console.log('1111')
// })

function* generator() {
  yield 1;
  yield 2;
  yield 'hello';
}

const gen = generator();
console.log(gen.next());