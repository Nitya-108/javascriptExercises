// you are a pilgrim that is living in Vrindavan, you have x amount of ruppees,
// you want to visit places of pilgrimage but you only have limited time available
// you will always first visit Radhakund, then Govardhan, then Barsana
// Calculate if you will have enough ruppees and time to visit all 3 places of pilgrimage, 
// if not display which destinations you can reach

// create a variable called ruppees
// create a variable called timeAvailable, this should be in minutes
// create a const called radhaKundDistance
// create a const called govardhanDistance
// create a const called barsanaDistance

// available destinations = RadhaKund, Govarhdan, Barsana
// 1km = 2min travelTime
// RadhaKunda = 20 ruppees & 20 km
// Gorvarhdan = 40 ruppees & 40 km
// Barsana = = 60 ruppees & 60 km
// you will always spend exactly  1 hour at a destination
// you will always return to vrindavan after visting 1 destination
// You can only visit 3 places


//Questions
// 1. if you only have 100 ruppees and 3 hours timeAvailable, which destination(s) can you visit ?
// Answer: 80 mins time traveled, 40km's traveled, RadhaKunda, 40min remaining
// 2.  if you only have 1000 ruppees and 10 hours timeAvailable, which destination(s) can you visit ?
// Answer:  X mins time traveled, 40km's traveled, RadhaKunda, Govarhdan, Barsana, Xmin remaining

// These questions are just here as guidelines, when you visit me we will put it random values 
// in the variables.
// Always display: travel time, km's traveled, destination, time remaining

// *** Need loops ***
// *** WIP ***

var ruppees = 200;
var timeAvailable = 360; // in minutes
const visitingTime = 60; // in minutes

// in km's
const radhaKundDistance = 20;
const govardhanDistance = 40;
const barsanaDistance = 60;

const radhaKundPrice = 20 * 2;
const govardhanPrice = 40 * 2;
const barsanaPrice = 60 * 2;

// in minutes
const radhaKundTotalTime = radhaKundDistance * 2 + visitingTime;
const govardhanTotalTime = govardhanDistance * 2 + visitingTime;
const barsanaTotalTime = barsanaDistance * 2 + visitingTime;

var destinationsReached = [];

console.log(`Ruppees: ${ruppees}, Time Available: ${timeAvailable}min`);

if (ruppees >= radhaKundPrice && timeAvailable >= radhaKundDistance * 4){
    console.log("Radhakund pilgramage complete");
    console.log();

    destinationsReached.push("Radha kund");
    timeAvailable = timeAvailable - radhaKundTotalTime;
    ruppees = ruppees - radhaKundPrice;

    console.log(`Travel time: ${radhaKundDistance * 4}min, Distance Traveled ${radhaKundDistance * 2}km`);
    console.log(`Places visited: ${destinationsReached}`)
    console.log(`Time Remaining ${timeAvailable}min, Ruppees Remaining: ${ruppees} `);
    console.log();

} else if (ruppees >= govardhanPrice && timeAvailable >= govardhanTotalTime){
    console.log("govardhanTotalTime pilgramage complete");
    console.log();

    destinationsReached.push("Govardhan");
    timeAvailable = timeAvailable - govardhanTotalTime;
    ruppees = ruppees - govardhanPrice;

    console.log(`Travel time: ${govardhanDistance * 4}min, Distance Traveled ${govardhanDistance * 2}km`);
    console.log(`Places visited: ${destinationsReached}`)
    console.log(`Time Remaining ${timeAvailable}min, Ruppees Remaining: ${ruppees} `);
    console.log();

} else if (ruppees >= 20 && timeAvailable >= barsanaTotalTime){
    console.log("Radhakund pilgramage complete");
    timeAvailable = timeAvailable - barsanaTotalTime;
}
