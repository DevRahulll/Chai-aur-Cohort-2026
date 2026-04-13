function init() {
    let name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    displayName();
}
// init();

// jo bahar bahar variable ki value dhund raha tha wahi lexical scoping kehte hai

function startCompany() {
    function ca(name) {
        return `Name of the company is ${name}`
    }
    return ca;
}

const getMeaCompany = startCompany();
const myCompany = getMeaCompany("Mahindra")
// console.log(myCompany);

function eternal(guest) {
    const guestName = guest;
    let count = 0;

    function zomato() {
        console.log(`Hi ${guestName}, from zomato`)
    }

    function blinkit() {
        if (count == 1) return;
        console.log(`Hi ${guestName}, from BLINKIT`)
        count++;
    }
    return {
        zomato,
        blinkit
    }
}

const rahul = eternal("rahul");
const dev = eternal("dev");
rahul.blinkit();
rahul.blinkit();
rahul.blinkit();

// this is process know as useMemo() in react

const cups = ["green", "blue", "red"];
cups.map((cup) => console.log(cup + " cup"));


