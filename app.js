
const yargs= require('yargs');
const request = require('request');


const geocode=require('./geocode/geocode.js')
const weather=require('./weather/weather.js')

const argv=yargs.options({
  a:{
    demand:true,
    alias: 'address',
    describe:'address we want to fetch',
    string :true
  }
}).help().alias('help','h').argv;
// console.log(argv.address);

// geocode.geocodeAddress(argv.address,(errorMessage,results)=>
// {
//   if(errorMessage)
//   console.log(errorMessage);
//   else {
//     console.log(JSON.stringify(results,undefined,2));
//   }
// }
//
// });

weather.getWeather(37.8267,-122.4233,(errorMsg,results)=>{
  if(errorMsg)
  console.log('Unable to fetch the weather info ');
  else
  console.log(JSON.stringify(results,undefined,2));
});



// 2167e48327d4baea86f61d0bf90e0087
