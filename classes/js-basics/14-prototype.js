// IN every object has an internal link to another object is called prototype and the import usecase is in inheritance

//Object.create()- this method is used to create new object, with specified prototype object and optional properties. or ye sabke pass hoti hai, or in sab property ko add or set bhi kar sakte hai

const prithviraj = {
    name: "Prithviraj",
    generation: "grandfather",
    cookTraditionalDish() {
        return `${this.name} cooks an ancient family recipe`;
    }
}

const raj = Object.create(prithviraj);
raj.name = "raj";
raj.generation = "father";
raj.bussiness = function () {
    return `${this.name} runs the family bussiness`;
}
console.log(raj)
console.log("++++++++++++++++")

const ranbir = Object.create(raj);
ranbir.name = "ranbir";
ranbir.generation = "son";
ranbir.makeFilm = function () {
    return `${this.name} directs blockbuster movies`;
}

console.log(ranbir.makeFilm());
console.log(raj.bussiness());
console.log(ranbir.makeFilm());

// note: this ka matlab jo call kare
// prototype ka power jo string or array , function sab ke pass hai 

Array.prototype.last = function () {
    return this[this.length - 1];
}
console.log([1, 2, 3].last());
console.log(["Dev", "karan", "Aujla"].last());

// polyfill
//-> A polyfill is a piece of code used to provide modern functionality an older browsers that do not natively support it.

Array.prototype.me = "me";
console.log([1, 2, 3].me);