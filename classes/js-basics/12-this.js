// console.log(this);

function ranveerOnGlobalStage() {
    return typeof this;
}

function ranveerwithNoScriptp() {
    "use strict"
    return this;
}

const bollywoodFilm = {
    name: "Bajirao Mastani",
    lead: "Deepika",
    introduce() {
        return `${this.lead} performs in ${this.name}`
    }
}

// console.log(bollywoodFilm.introduce());

const filmDirector = {
    name: "SS Rajamouli",
    cast: ["Prabhas", "Anushka", "Tammanah"],
    announceCast() {
        this.cast.forEach((actor) => {
            console.log(`${this.name} introduces ${actor}`)
        })
    }
}

const filmSet = {
    crew: "Spot boys",
    prepareProps() {
        console.log(`Outer this.crew: ${this.crew}`);
        function arrangeChairs() {
            console.log(`Inner this.crew: ${this.crew}`)
        }
        arrangeChairs();

        const arrangeLights = () => {
            console.log(`Arrow this.crew: ${this.crew}`)
        }
        arrangeLights();
    },

}

// Note : Nested regular function ke under this ka access ka nahi hota hai but regular function ke under agar arrow functio hai toh this ka access inherit hota aur access rehta , yeh js ka unique behaviour hai



// Detached Methods

const actor = {
    name: "Ranveer",
    bow() {
        return `${this.name} takes a bow`
    },
}
const detachedBow = actor.bow;
console.log(detachedBow())