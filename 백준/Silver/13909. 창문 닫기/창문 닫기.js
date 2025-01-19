const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
console.log(Math.floor(Number(fs.readFileSync(filePath).toString()) ** 0.5));