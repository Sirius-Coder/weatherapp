const request = require('request');

var getWeather= (lat,long,callback)=>
{
  request({
    url:'https://api.darksky.net/forecast/2167e48327d4baea86f61d0bf90e0087/37.8267,-122.4233',
    json:true
  },(error,response,body)=>{
    if(error)
    callback('Unable to connect to the servers');
    else if (response.statusCode===400) {
      callback('BAD request timeout');
    }else if (response.statusCode===200) {
      callback(undefined,{
        temperature:body.currently.temperature,
        apparentTemp:body.currently.apparentTemperature
      });

    }
  });

};
module.exports.getWeather=getWeather;
