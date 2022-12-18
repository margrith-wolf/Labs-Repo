// create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100

let speedLimit = 55;
let mySpeed = 65;


// using a conditional, determine if mySpeed is greater than the speedLimit
if(mySpeed > speedLimit){
    // if true, print "Slow Down! Mom is mad!" to the console  
    console.log("Slow Down! Mom is mad!");
} else if(mySpeed == speedLimit){
    // if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
    console.log("Everyone is happy!");
} else {
    // if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
    console.log("Speed up! Dad is mad!");
}



// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value
let alarmSet = true;
let openDoor = false;

// using a conditional, determine if alarm is set. 
if(alarmSet == true && openDoor == true){
    // if alarm is set and door is set to open, print "Sound Alarm!" to the console
    console.log("Sound Alarm!");
} else{
    // otherwise, print "Everything is fine." to the console.
    console.log("Everything is fine.");
}

// create two variables, username and password
let username;
let password;
// create a conditional, if the username is "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
if((username === "Tommy123" && password === "12345") || (username === "Timmy456" && password == "6789")){
    console.log("Admin Login Successful");
} else {
    // otherwise, print "Admin Access Denied"
    console.log("Admin Access Denied");
}


// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console
let studentGrade = 14; //can set any value to StudentGrade to test switch
let studentClass;

switch(studentGrade){
    case 'K':
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        studentClass = "Elementary";
        break;
    case 7:
    case 8:
        studentClass = "Middle";
        break;
    case 9:
        studentClass = "Freshman";
    case 10:
        studentClass = "Sophomore";
        break;
    case 11:
        studentClass = "Junior";
        break;
    case 12:
        studentClass = "Senior";
        break;
    default:
        console.log("Error");
}



// write a for loop that will iterate backwards from 10 to -10
for(let i = 10; i >= -10; i--){
    console.log(i);
}

// write a do/while loop that prints 1 through 50
let iterator = 1;
do{
    console.log(iterator);
    iterator++;
} while(iterator <= 50);

// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4
do{
    console.log(iterator % 4);
    iterator++;
} while(iterator <= 50);

// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test
/* 
    for(let i = 11; i > 10; i++){
        console.log(i);
    } 
*/

for(let i = 1; i < 10; i++){
    console.log(i);
} 

for(let i = 11; i < 100; i++){
    console.log(i);
} 

for(let i = 110; i > 10; i--){
    console.log(i);
} 

//Nested if Statement: Create a nested if statement (the second if statement
//will only run if the first one evaluates to true) that does the following:
//The first if statement: check to see if num1 is greater than or equal to num2
//If the first if statement evaluates true: check to see if num3 is greater than or equal to num4
//Then add: if both conditions are true print "Both statements are true."
//If the first condition true but not second, print: "The first statement is true, but the second is not."
//In all cases, after the outer if statement, print: "Program ended."
let num1 = 4;
let num2 = 4;
let num3 = 5;
let num4 = 6;

if (num1 >= num2) {
    if (num3 >= num4) {
        console.log("Both statements are true.");
    } else {
        console.log("The first statement is true, but the second is not.");
    }
}
console.log("Program ended.");

//write if/else if statement that prints the smaller of the two given inputs, num1 and num2
//if they are the same, print "same"

//my solution
if (num1 > num2){
    console.log(num2);
} else if (num1 < num2){
    console.log(num1);
} else if (num1 == num2) {
    console.log("same");
} 

//instructor solution
if(num1 == num2) {
    console.log("same");
} else if (num1 < num2) {
    console.log(num1);
} else {
    console.log(num2);
}


//write a series of if/else if statements that cehck numberGrade and assign letterGrade to a string of
//the corresponding letter grade. Print the letter grade to the console. 
let numberGrade = 77
let letterGrade;

if(numberGrade >= 90){
    letterGrade = "A";
    console.log(letterGrade);
}else if (numberGrade >= 80){
    letterGrade = "B";
    console.log(letterGrade);
}else if (numberGrade >= 70){
    letterGrade = "C";
    console.log(letterGrade);
}else if (numberGrade >= 60){
    letterGrade = "D";
    console.log(letterGrade);
}else {
    letterGrade = "F";
    console.log(letterGrade);
}//could also put a singular console.log(letterGrade) here outside of the if/else if statements instead of inside
//each if/else if statement. probs looks a little cleaner.

//using a boolean operator, write a comparison to see if age is greater than or equal to 16 and print result in console
let age = 12;
console.log(age >= 16);

//write a for loop that loops from 1-100. print only even iterations + "foo"
for(var i = 1; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i + " foo"); 
    }
}

//check to see if userNumber is between 1 and 100. If yes, create a while loop that prints all integers 
//starting with userNumber to 100. If not, print "Your number was not between 1 and 100"
//** I DONT UNDERSTAND WHY THE VAR COUNTER???
//instructor solution
var counter = userNumber;
if ( userNumber <= 100 && userNumber >= 1 ) {
    while ( counter <= 100 ) {
        console.log(counter++);
    }
} else {
    console.log("Your number was not between 1 and 100.");
}



//write a for loop that prints every third number from 0 up to, and including 99.
//my solution
for(let i = 0; i <= 99; i+=3){
    console.log(i);
}
//instructor solution
for(var i = 0; i <= 99; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

//create a for loop that prints out a multiplication table for num 1 through 10. Num will be in put by user.
for(var i=1; i<=10; i++) {
    console.log(num +" x " + i + " = " + (num*i) );
}

//write a while loops that does a count down using variable countdown. Variable uses a user input number. 
//make sure number is not larger than 10 but greater than equal to 3
//each time loop runs, print to the console the value of the counter followed by three periods
//once out of the loop, print to the console "We have lift off!"
//if a number is less than 3 or greater than 10, only message printed to console is "We have lift off!"

//my solution
if(countdown < 10 && countdown >= 3){
    while (countdown >= 1){
        console.log(countdown-- + "...");
    }console.log("We have lift off!");
} else if (countdown < 3 || countdown > 10){
    console.log("We have lift off!");
}

//instructor solution
if (countdown <= 10 && countdown >= 3) {
    while (countdown >= 1) {
        console.log(countdown + "...");
        countdown--;
    }
}

console.log("We have lift off!");