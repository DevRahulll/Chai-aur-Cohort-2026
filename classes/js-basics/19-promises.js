// console.log("swatik");
// Promise.resolve("resolved value").then((v) => {
//     console.log("Microtask", v);
// });
// console.log("Dev")

// -> Sync(Modi ji), Promise( ambani ji), Timers(aam aadmi)

// First scan whole code and remove the sync code , then promise microtask and then timers macrotask

function boilWater(time) {
    return new Promise((res, rej) => {
        console.log("karte ji boil water");
        if (typeof time !== "number" || time < 0) {
            rej(new Error("ms must be in number and greater than zero"));
        }
        setTimeout(() => {
            res("Ubal gya");
        }, time);
    })
}

boilWater(2000)
    .then((msg) => console.log("Resolved: ", msg))
    .catch((err) => console.log("Rejected: ", err.message));

function grindLeaves() {
    return Promise.resolve("Leaves grounded");
}

function steepTea(time) {
    return new Promise((res) => {
        setTimeout(() => res("Steeped tea"), time);
    })
}

function addSugar(spoons) {
    return `Added ${spoons} sugars`
}

grindLeaves()
    .then(console.log)
    .catch((err) => console.log(err.message))
steepTea(4000)
    .then(console.log)
    .catch((err) => console.log(err.message))
console.log(addSugar(2))