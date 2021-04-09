var baz;
function foo() {
  var aa = 100;
  const bb = 'kkkk';
  function bar() {
    console.log(aa);
    aa++;
    return aa
  }
  baz = bar;
}

foo();
baz();
baz();
baz();