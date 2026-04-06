var shipName = "INS Rajput";
console.log("Destroyer Ship : ", shipName)

let crewCount = 125;
console.log("Crew count: ", crewCount)
crewCount = 150;

const captainName = "Admiral Dinesh Tripathi";
console.log("Captain Name: ", captainName);
// captainName = "Dev"; // can't reassign to const


// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }
// for (let i=0; i < 10; i++) {
//     console.log(i)
// }
// console.log("Value of I: ", i)

const treasureChest = {
    gold: 100,
    rubies: 50,
    maps: 2,
};

treasureChest.gold = 120;

// treasureChest = { gold: 150 }; // this I can't do because I can change the properties of object but can't change the object.

const crewRoaster = ["Hitesh-Captain", "Piyush-XO", "Dev-Navigator"];
crewRoaster.push("Anirudh-SoundMan");
// crewRoaster[0] = "Shubham-TubeMan"
console.log(crewRoaster);

// crewRoaster = ["Hitesh-New"] // this can't reassign