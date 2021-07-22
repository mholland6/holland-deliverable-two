//Prompt the user for the pet's name
let petName = prompt("What is your pet's name?");

//keep track of the pet's energy level and happiness
let energyLevel = 0
let happinessLevel = 0

//loop to repeat six times
for (let i = 0; i < 6; i++){
    let action = prompt('Please type "feed" "pet" or "walk"');

    if (action === "feed"){
        energyLevel += 2;
    } else if (action === "pet"){
        happinessLevel += 1;
    } else if (action === "walk" && energyLevel !== 0){
        happinessLevel += 2; energyLevel -= 1;
    } else {
        alert('Not enough energy to enjoy a walk, try "feed" or "pet"');
    }

}

console.log(petName + " has " + happinessLevel + " happiness and " + energyLevel + " energy.");

//feed increases energy by 2
//pet increases happiness by 1
//walk increases happiness by 2 AND decreases energy by 1

//if "walk" is chosen and energy = zero, use the following message
//"Not enough energy to enjoy a walk"

//at the end, log the pet's name, happiness, and energy level
//to the console
