//creating a initial travel cost value
const currentTravelCost = 1500;

//flight information
const flight = {
    airline: 'Luftansa',
    flightNumber: 'LH8402',
    ticketPrice: 250,
}

//traveler information
const traveler = {
    name: 'Helton',
    sex: 'Male',
}

//function to update the travel cost and more info
const calcTravelCost = (updatedTravelCost, flightInfo, travelerInfo) => {
    //adding a greeting to the traveler name.
    travelerInfo.sex === 'Male' ? traveler.name = `Mr. ${traveler.name}` : traveler.name = `Mrs. ${traveler.name}`;
    //updating the travel cost adding the flight ticket price
    updatedTravelCost += flightInfo.ticketPrice;
    console.log(`The current travel cost of ${traveler.name} is ${updatedTravelCost}`)
}
//sending the variable 'currentTravelCost' and the Objects 'flight' and 'traveler' as arguments
calcTravelCost(currentTravelCost, flight, traveler);

//printing the traveler object and the current travel cost.
console.log(traveler);
//The value of the traveler.name will be updated
console.log(currentTravelCost);
//while the value of the 'currentTravelCost' will not, because a new variable was created when it was passed as argument, but the 'traveler' objects has remained the same
