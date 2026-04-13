const playerHealth = 80;
const hasShield = true;
const hasPassword = false;

if (playerHealth <= 20 && hasShield) {
    console.log("Low HP and damage vest")
}

const isLoggedIn = true;
const hasCourseAccess = false;

if (isLoggedIn || hasCourseAccess) {
    console.log("user is allowed to watch lectures")
}

const courseLaunched = true;
const chosenPath = "left";

switch (chosenPath) {
    case "right":
        console.log("User selected right");
        break;
    case "top":
        console.log("User selected top");
        break;
    case "left":
        console.log("User selected top");
        break;
    default:
        "Jiska koi nhi hota, uska defaul hota h";
}