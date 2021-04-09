define(function () {
  let msg = 'http://google.com';
  function getMsg() {
    return msg.toUpperCase();
  }

  return { getMsg };  // 暴露模块
})