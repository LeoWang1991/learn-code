define(['dataServer', 'jquery'], function(dataServer, $) {
  let name = 'tom';
  function showMsg() {
    alert(dataServer.getMsg() + name)
  }



  $('body').css('background', 'green')

  return { showMsg }
})