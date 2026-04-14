import fs from "fs"

setTimeout(() => console.log("Hello from Timer"), 0);
setImmediate(() => console.log("Hello from Immediate"), 0);

console.log("Hello from Top Level Code")

// output ->
// Hello from TLC
// Hello from Timer
// Hello from Immediate