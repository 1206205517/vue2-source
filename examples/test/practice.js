console.log('start');
setTimeout(()=> {
  console.log("settimeout");
},0)
Promise.resolve()
.then(function() {
  console.log("promise1");
})
.then(function() {
  console.log("promise2");
})
console.log("end");