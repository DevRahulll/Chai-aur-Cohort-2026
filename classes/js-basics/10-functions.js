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

arrowBrew("rosemary");