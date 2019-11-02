var somePromise=new Promise((resolve,reject)=>{
  // resolve('Hey ! It Worked');

  reject('Unable to fulfil the promise')
});

somePromise.then((message)=>{
  console.log('Success:',message);
},(errorMessage)=>{
  console.log('Error',errorMessage);
});
