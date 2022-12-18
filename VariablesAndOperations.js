//create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 22;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 100.60;

//create a variable to hold a person's middle initial
let middleInitial = "A";

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutside = true;

//create a variable to hold a customer's first name
let firstName = "Jane";

//create a variable to hold a street address
let streetAddress = '1234 Easy Street';

//print all variables to the console

console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(middleInitial);
console.log(isHotOutside);
console.log(firstName);
console.log(streetAddress);


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats -= 2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
costOfGroceries += 2.15;
console.log(costOfGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "C";
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = !isHotOutside;
console.log(isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let fullName = firstName + " " + middleInitial + " " + "Smith";
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hello, my name is " + fullName + " and I live at " + streetAddress);