console.log(brewPotion("Healing Herbs", 3));
function brewPotion(ingredient, dose) {
    return `Brewing Potion with ${ingredient} (x${dose})... Potion ready`;
}

const mixElixir = function (ingredient) {
    return `Mixing elexir with ${ingredient}`
}

// console.log(mixElixir("bone fire"))

const distilEssence = (ingredient) => {
    return `Mixing elixir with ${ingredient}`
}
// no own this , no 'arguments' objects in arrow functions

function oldBrewingLogs() {
    console.log("Type: ", typeof arguments);
    console.log("Is Array: ", Array.isArray(arguments));
    const argsArray = Array.from(arguments);
    console.log(argsArray);
}
// oldBrewingLogs("Sage, ", "rosemary");
//if function does't accept arguments still you can pass arguments

const arrowBrew = () => {
    try {
        console.log(arguments);
    } catch (e) {
        // console.log(e);
        console.log(e.message);
    }
};

// arrowBrew();

let globalCount = 0;

function brewCount(name) {
    globalCount++;
}

//HOF
function anotherFunctionForClass(brewCount) {
    return function newBrew() {
        console.log("Higher Order function", globalCount)
    }
}

const hof = anotherFunctionForClass();
// hof();

// IIFE
//()()
//(function(){})(), (()=>{})()

const potionShop = (function () {
    let inventory = 0;

    return {
        brew() {
            inventory++;
            return `Brew potion #${inventory}`;
        },
        getStock() {
            return inventory;
        },
    };
})();

// console.log(potionShop.brew())

function something() {
    let i = 7
    const name = "hitesh"
    return 5
}

function makeFunc() {
    const name = "Safari";
    function displayName() {
        console.log(name)
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();