// call and apply ==> basic chef (kitchen)
//bind ==> return a new function

function cookDish(ingredinet, style) {
    return `${this.name} prepares ${ingredinet} in ${style} style!`
}
// console.log(cookDish());

const sharmaKitchen = { name: "Sharma jis kitchen" };
const guptaKitchen = { name: "Gupta jis kitchen" };

console.log(cookDish.call(sharmaKitchen, "Panner Tikka", "Desi"));
console.log(cookDish.call(guptaKitchen, "Biryani", "Lucknow"));

const sharmaOrder = ["Chole kulche", "Punjabi Dhaba"];

console.log(cookDish.apply(sharmaKitchen, sharmaOrder))


// bind

function reportDelivery(location, status) {
    return `${this.name} at ${location}: ${status}`
}

const delivery = { name: "Rahul" };
console.log("Call: ", reportDelivery.call(delivery, "delhi", "booked"));
console.log("Apply: ", reportDelivery.apply(delivery, ["Ranchi", "Picked Up"]))
console.log("Bind : ", reportDelivery.bind(delivery, "Haridwar", "rejected")) // bind does't work this way

const bindReport = reportDelivery.bind(delivery);
console.log(bindReport("Haridwar", "rejected"));

// call sabke liye use kar sakte hai but jaha array ho waha apply use karo (apply ka a for array);

// NOTE : call-bind-apply modify `this` & call or applly returns result but bind returns function

