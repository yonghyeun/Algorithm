let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let num = +input;

if (num >= 90) {
  console.log('A');
} else if (num >= 80) {
  console.log('B');
} else if (num >= 70) {
  console.log('C');
} else if (num >= 60) {
  console.log('D');
} else {
  console.log('F');
}