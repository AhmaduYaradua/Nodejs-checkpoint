import fs from "node:fs";

// creating a file with file system
fs.writeFileSync("welcome.txt", "Hello Node", "utf-8");

// Reading a file and console logging the file input
let readFile = fs.readFileSync("welcome.txt", "utf-8");
console.log(readFile);
