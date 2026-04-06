const crewMembers = 40;
const fuel = 132.12;
const light_speed = 290_000_000;

const infiniteRange = Infinity;
const NegativeInfiniteRange = -Infinity;
const NotANumber = NaN;

console.log(1 / 0)
console.log(-1 / 0)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.EPSILON)
console.log(Number.isNaN(NotANumber));

const fuelReading = "142.75 tons";
const sectorCode = "0xA3";
const countDown = "007";

console.log(parseInt(countDown))
console.log(parseInt("111", 2)); // base 2

const thrustForce = 4.867;

console.log(Math.round(thrustForce))
console.log(Math.floor(thrustForce))
console.log(Math.ceil(thrustForce))
console.log(Math.trunc(thrustForce))

const temps = [-120, 43, 56, -23];
console.log(Math.min(temps));
console.log(Math.max(temps));

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

function almostEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}

console.log(almostEqual(0.1 + 0.2, 0.3));