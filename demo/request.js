const api = {
  queryWeather: 'https://way.jd.com/he/freeweather?city=hangzhou&appkey=61f8e398898a44d1db9bd4fdbe42c397'
}

fetch(api.queryWeather, {
  mode: 'cors'
}).then(res => {
  console.log(res);
})