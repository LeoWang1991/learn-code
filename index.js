function add(n1, n2) {
  if(n1 < n2) {
    const tmp = n1;
    n1 = n2;
    n2 = tmp;
  }

  const arr1 = n1.toString().split('').reverse();
  const arr2 = n2.toString().split('').reverse();
  console.log(arr1, arr2);
  let result = Array(arr1.length + 1).fill(0);

  for(let i = 0; i < arr1.length;i++) {
    const a1 = parseInt(arr1[i]);
    const a2 = arr2[i] ? parseInt(arr1[i]) : 0;
    result[i] += a1 + a2;
    result[i + 1] += parseInt(result[i] / 10);
    result[i] = result[i] % 10;     
  }

  // result = result.reverse();  
  console.log(result);
}

add(8971, 345)