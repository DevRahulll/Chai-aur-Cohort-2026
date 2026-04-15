const hero = {
    name: "Luna the Brave",
    class: "Jungler",
    level: 15,
    health: 89,
    mana: 120,
    isAlive: true
}

hero.weapon = "Fire";

delete hero.level;

// console.log(hero)

const ranger = {
    name: "Lakshya the swift",
    agility: 80,
    stealth: undefined
}

console.log("name" in ranger);
console.log("stealth" in ranger);
console.log("toUpperCase" in ranger);

console.log(ranger.hasOwnProperty("toString"));

//in checks own properties & prototype properties but hasOwnProperty checks only direct properties, no inherited one