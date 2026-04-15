import fs from 'fs';

setTimeout(() => console.log('Hello from Timer'), 2000);
setImmediate(() => console.log('Hello from Immediate'), 7000);

function init() {
    setTimeout(() => console.log('Hello from fn Timer'), 8000);
    setImmediate(() => console.log('Hello from fn Immediate'), 0);
}

console.log('Hello from Top Level Code');
setTimeout(() => {
    init()
}, 2000);