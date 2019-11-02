const request = require('request');

var geocodeAddress=(address,callback)=>{
  var encoded=encodeURIComponent(address);
  console.log(encoded);

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}&key=AIzaSyBIJU9rtg3GAShmxeOvLvFvITnshA8I8No`,
    json:true
  },(error, response ,body)=>{
    if(error)
    callback('Unable to connect to servers');
    else if (body.status==='ZERO_RESULTS') {
      callback(' unable to find the address');
    }else if (body.status==='OVER_QUERY_LIMIT') {
      console.log('You have exceeded your daily request quota for this API');
    }else if (body.status==='OK') {
        callback(undefined,{
          address:body.results[0].formatted_address
        })
      }


  })




}
module.exports.geocodeAddress=geocodeAddress;
