const codeName = "Shadow Fox";
const backupName = String("Night Owl");
const templateName = `Agent ${codeName}`

let intercepted = "Hello";
intercepted[0] = "Y"; // silent fail;
console.log(intercepted);

const secretCode = "OMEGA-7";

console.log(secretCode.length)
console.log(secretCode.charAt(3))
console.log(secretCode[99])
console.log(secretCode.at(-1));

const rawTransmission = "THe EagLE has LANDED";
console.log(rawTransmission.toLowerCase())
console.log(rawTransmission.toUpperCase());

const message = "MayDay MayDay Repeat: MayDay-A304";

console.log(message.indexOf("MayDay"))
message.slice(0, 15);

const orders = "   move-north|hold|ambush|get cover|Fire";
console.log(orders.trim());
let orderList = orders.split("|");
console.log("Split", orderList);

const myDataValue = "SOS".split("");
console.log(myDataValue)
console.log(typeof myDataValue)
console.log(Array.isArray(myDataValue))


const spellCard = `
++==========================| Spell: ${myDataValue} |`;

console.log(void "rahul")

let generalStore = { name: "Kirana", goods: 2 };
console.log(generalStore)
generalStore = null;
console.log(generalStore)
