console.log("A");
setTimeout(function() {
  console.log("K");
}, 2000);
console.log("B");
setTimeout(() =>console.log("J"), 1000);
console.log("C");
console.log("D");
setTimeout(function() {
  console.log("H");
}, 0);
console.log("E");
setTimeout(() =>console.log("I"), 0);
console.log("F");
var a = 0 
for( let i = 0; i < 1000000000; i++ ) {
    a = a | i
}
setTimeout(() =>console.log("L"), 0);
console.log(`G. final value of a = ${a}`)