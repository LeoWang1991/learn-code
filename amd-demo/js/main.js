(function() {
  require.config({
    baseUrl: 'amd-demo/',
    paths: {
      alerter: '../modules/alerter',
      dataServer: '../modules/dataServer',
      jquery: '../lib/jquery'
    }
  });

  require(['alerter'], function(alerter) {
    alerter.showMsg()
  })
})()