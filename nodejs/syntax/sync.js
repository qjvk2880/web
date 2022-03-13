var fs = require('fs');
// console.log('a');
// var result = fs.readFileSync('sample.txt', 'utf8');
// console.log(result);
// console.log('c');

console.log('a');
fs.readFile('sample.txt', 'utf8', function (err, result) {
    console.log(result);
});

console.log('c');
console.log('d');

