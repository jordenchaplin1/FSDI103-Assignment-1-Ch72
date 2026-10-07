//Constants - things that never change
const restaurantName = "Olive & Ember";
const cuisineType = "Italian";
const city = "San Diego";

console.log("Restaurant: " + restaurantName);
console.log("Cuisine: " + cuisineType);
console.log("City: " + city);

//Variables - things that can change day by day
let todaysSpecial = "Truffle Mushroom Risotta";
let availableTables = 8;
let status= "Open";

console.log("Todays Special: " + todaysSpecial);
console.log("Available Tables: " + availableTables);
console.log("Status: " + status);

//Change the values of the variables
status = "Closed";
availableTables = 3;

//Printing the updated Report
console.log("Updated Restaurant Report" + "\n" +
    "Restaurant: " + restaurantName + "\n" +
    "Cuisine: " + cuisineType + "\n" +
    "City: " + city + "\n" +
    "Todays Special: " + todaysSpecial + "\n" +
    "Available Tables: " + availableTables + "\n" +
    "Status: " + status
);
//The following lines are commented out because they are redundant with the updated report above
//console.log("Restaurant: " + restaurantName);
//console.log("Cuisine: " + cuisineType);
//console.log("City: " + city);
//console.log("Todays Special: " + todaysSpecial);
//console.log("Available Tables: " + availableTables);
//console.log("Status: " + status);