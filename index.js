function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return a / b
}
var n = 139
function inc(n){
  return n += 1;
}
function dec(n){
  return n -= 1;
}
function makeInt(n) {
  var parsed = parseInt(n, 10);
  return parsed;
}
function preserveDecimal(n){
  return parseFloat(n)
}

function log() {
  console.log(greeting);
  var greeting = 'Hello!';
}
log();