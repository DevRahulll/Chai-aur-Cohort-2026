const artifact = {
    name: "Obsidian Crown",
    era: "Ancient",
    value: 50000,
    material: "volcanic glass",
};

const keys = Object.keys(artifact);
// console.log(keys)
const values = Object.values(artifact);
// console.log(values)
const entries = Object.entries(artifact);
// console.log(entries)

// entries methods create nested array of values

// for (const [key, value] of Object.entries(artifact)) {
//     console.log(` ${key}: ${value}`)
// }

const priceList = [
    ["Obsidian Crown", 50000],
    ["Ruby Pendant", 30000],
    ["Iron Shield", 5000],
];

const priceObject = Object.fromEntries(priceList);
// console.log(priceObject)

// entries -> object to array
// fromEntries -> array to object

const displayCase = {
    artifact: "Obsidian",
    location: "Hall A, Case 3",
    locked: true,
};

Object.freeze(displayCase);
delete displayCase.locked;
displayCase.newProp = "test";
// console.log(displayCase)

const catalogEntry = {
    id: "ART-001",
    description: "Ancient Crows",
    verified: true,
};

Object.seal(catalogEntry);
delete catalogEntry.description;
catalogEntry.role = "user";
// console.log(catalogEntry)


const secureArtificats = { name: "Ruby Pendant" };
Object.defineProperty(secureArtificats, "catelogId", {
    value: "SEC-001",
    writable: false,
    enumerable: false,
    configurable: false,
})

console.log(secureArtificats.catelogId);
secureArtificats.catelogId = "Hacked";
console.log(secureArtificats.catelogId); // can't be changed

for (const [key, value] of Object.entries(secureArtificats)) {
    console.log(`${key} : ${value}`)
}

const desc = Object.getOwnPropertyDescriptor(secureArtificats, "name");
console.log(desc);
