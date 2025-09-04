const stringUtils = require('./stringUtils.js');

console.log(stringUtils.capitalize("hello world"));
console.log(stringUtils.reverseStr("hello"));
console.log(stringUtils.contains("hello", "hell")); // true
console.log(stringUtils.contains("hello", "hi")); // false