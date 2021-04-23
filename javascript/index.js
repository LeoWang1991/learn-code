/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {  
  if(haystack == '' || needle == '') {
    return 0;
  }
  const diff = haystack.length - needle.length;
  if(diff < 0) {
    return -1;
  }
  let flag;
  let index = -1;
  
  for(let i = 0;i <= diff;i++) {
    flag = true;
    for(let j = i;j < i + needle.length;j++ ) {
      if(haystack[j] !== needle[j]) {
        flag = false;
        break;
      }
    }
    if(flag) {
       index = i;
       break;
    }
  }
  return index;

};

const index = strStr('hello', 'll');
console.log(index);