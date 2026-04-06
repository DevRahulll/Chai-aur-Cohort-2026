const cruiseMissile = "Brahmos";
const BalsticMissile = "Agni";

console.log("Supersonic Missile is ", cruiseMissile);
console.log("Intercontinental Missile is ", BalsticMissile);

console.warn("Warning! Smoke in the air");
console.error("Warning! Smoke in the air");

const evidenceLog = [
    { id: 1, item: "Muddy footprint", location: "Window sill" },
    { id: 2, item: "Broken glass", location: "Living room" },
    { id: 3, item: "Red fiber strand", location: "Door handle" },
];

console.table(evidenceLog)

console.time("time");

let missileFire = 0;
for (let i = 0; i < 100; i++) {
    missileFire++;
}

console.timeEnd("time"); // label should be same both in time and timeEnd


