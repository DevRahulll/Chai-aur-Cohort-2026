// Primitive data types are : String, Number, Null, Undefined, Symbol, BigInt, Boolean
// Non-Primitive data type is Object

const SAM_Name = "Akash-teer";
console.log("Air Defence Name: ", SAM_Name, "| type: ", typeof SAM_Name);

const altitude_range = 15;
const altitude = 15.3;

console.log(typeof altitude_range)
console.log(typeof altitude)

const isLoggedIn = false;
console.log(typeof isLoggedIn)

let missileLoadStatus = null;
console.log(typeof missileLoadStatus);

const uniqueRuneId = Symbol("rune of fire");

console.log(
    "Rune: ", uniqueRuneId.toString(),
    "| type of: ", typeof uniqueRuneId
)

let BravoTeamStatus;
console.log(typeof BravoTeamStatus);

const heroStats = {
    name: "Deepak",
    level: 12,
    class: "Ranger",
};

console.log("Hero: ", heroStats, " | type: ", typeof heroStats);

const inventory = ["S-400", "Akash-teer", "LG-150"];
console.log("Inventory: ", inventory, "| type: ", typeof inventory);

function loadMissile() {
    return "Fire";
}

console.log(typeof loadMissile);  // function
// function are instance of objects, for callable it return function especially in typeof condition, function are type of objects

console.log(typeof "Hitesh");
console.log(typeof 42);
console.log(typeof 42n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () { });

let originalHp = 100;
let copyHp = originalHp;

copyHp = 80;
console.log(originalHp) //no changes to originalHp

const originalSword = {
    name: "Flame Sword",
    damage: 75,
    typeofW: "Fire",
};

let cloneSword = originalSword;
cloneSword.name = "Thunderstorm Sword"; // it make changes in the original objects also.

console.log("Original Sword: ", originalSword.name);

const armorOriginal = {
    name: "Iron Plate",
    defence: 80,
    buff: {
        fire: 10,
    },
};

const armorCopy = { ...armorOriginal };
armorCopy.buff.fire = 80;
// nested object makes changes into orignal object by spread method


const potionOriginal = {
    name: "Health",
    effects: {
        heal: 40,
        mana: 30
    }
}

const potionCopy = structuredClone(potionOriginal);
potionCopy.effects.heal = 20;
// stucturedClone methods copy nested objects without making changes in the original object

console.log(typeof null === "object") // this is a bug from early of days of js it should be null

