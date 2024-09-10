let ticketCost = 14.00;
let numberOfTickets = 3;


document.getElementById("ticketNum").innerHTML += numberOfTickets;
document.getElementById("ticketCost").innerHTML += ticketCost;
document.getElementById("ttCost").innerHTML += ticketCost * numberOfTickets;

//for the second problem
let bankAccount = 235.83;
let jacket = 70;
let sweater = 55;
let shirt = 35;
let pants = 75;
let skirt = 49;
let sandals = 30;
let shoes = 60;

document.getElementById("bank").innerHTML += "After purchasing the outfit, my bank account balance is $" + (bankAccount - (shirt+pants+shoes)).toFixed(2);
let remainingFunds = (bankAccount - (shirt+pants+shoes)).toFixed(2);
//for my false response
let canBuyJacket = remainingFunds - jacket >= 0;
document.getElementById("addJacket").innerHTML += "Add Jacket: " + canBuyJacket;

//for the third problem
let pizzas = 4;
let slicesPerPizza = 8;
let totalSlices = pizzas * slicesPerPizza;
let slicesPerStudent = 2.5;

let numberOfStudents = Math.floor(totalSlices / slicesPerStudent); 
let leftoverSlices = totalSlices % slicesPerStudent;

document.getElementById("profPizza").innerText += "Students: " + numberOfStudents + "\n Rector: " + leftoverSlices;

//for the fourth problem

let adultCost = 12.00;
let childCost = 6.00;
let drinkCost = 1.50;

let adult = 2;
let child = 1;
let drinks = 3;

let totalCost = (adult * adultCost) + (child * childCost) + (drinks * drinkCost);

document.getElementById("Monty").innerText += "$" +totalCost;

//for the fifth problem
let week1 = 202.45;
let week2 = 134.97;
let week3 = 256.63;
let week4 = 178.22;

let tips = week1 + week2 + week3 + week4;
//let average = tips / 4;

//document.getElementById("tips").innerText += "$" + average;
//second way to do it
document.getElementById("tips").innerText += "Weekly Tip Average: $" + tips / 4;
