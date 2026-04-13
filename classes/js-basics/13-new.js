// the new keyword is used to create an instance of an object that has a constructor function

function TataCar(chasisNumber, modelNumber) {
    this.chasisNumber = chasisNumber;
    this.modelNumber = modelNumber;
    this.fuelLevel = 100;
}

TataCar.prototype.status = function () {
    return `Tata ${this.modelNumber} #${this.chasisNumber} | Gas: ${this.fuelLevel}`
}

const car1 = new TataCar("JH-21", "Nexon");
const car2 = new TataCar("WB-10", "PUNCH");

console.log(car1.modelNumber);
console.log(car2.modelNumber);
console.log(car1.status());
console.log(car2.status());



// this is not same as above

function createAutoRickshaw(id, route) {
    return {
        id,
        route,
        run() {
            return `Auto ${this.id} running on ${this.route}`
        }
    }
}

const tataAuto = createAutoRickshaw("UP-1", "Lucknow-Kanpur Expressway");
const mahindraAuto = createAutoRickshaw("UP-2", "Agra-Delhi Expressway");

console.log(tataAuto.run());
console.log(mahindraAuto.run());