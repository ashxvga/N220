const ticketCost = 14.00;
const numberOfTickets = 3;


document.getElementById("ticketNum").innerHTML += numberOfTickets;
document.getElementById("ticketCost").innerHTML += ticketCost;
document.getElementById("ttCost").innerHTML += ticketCost * numberOfTickets;

//for the second problem
//my variables using const as practiced in class
const bankAccount = 235.87;
const jacket = 70;
const sweater = 55;
const shirt = 35;
const pants = 75;
const skirt = 49;
const sandals = 30;
const shoes = 60;

document.getElementById("bank").innerHTML += "After purchasing the outfit, my bank account balance is $" + (bankAccount - (shirt+pants+shoes)).toFixed(2);
//used the .toFixed to fix my rounding issues. It now displays the one from the hw
const remainingFunds = (bankAccount - (shirt+pants+shoes)).toFixed(2);
//for my false response
const canBuyJacket = remainingFunds - jacket >= 0;
document.getElementById("addJacket").innerHTML += "Add Jacket: " + canBuyJacket;

//for the third problem

const totalPizzas = 4;
const slicesPerPizza = 8;
let slicesThatStudentCanEat = 2.5;

const totalSlices = totalPizzas * slicesPerPizza;
const pizzaLeftOver = totalSlices % slicesThatStudentCanEat;
const studentsFed = (totalSlices - pizzaLeftOver) / slicesThatStudentCanEat;


document.getElementById("profPizza").innerText += "Students: " + studentsFed + "\n Rector: " + pizzaLeftOver;

//for the fourth problem

const adultCost = 12.00;
const childCost = 6.00;
const drinkCost = 1.50;

const adult = 2;
const child = 1;
const drinks = 3;

const totalCost = (adult * adultCost) + (child * childCost) + (drinks * drinkCost);

document.getElementById("Monty").innerText += "$" +totalCost;

//for the fifth problem
const week1 = 202.45;
const week2 = 134.97;
const week3 = 256.63;
const week4 = 178.22;

const tips = week1 + week2 + week3 + week4;
//const average = tips / 4;

//document.getElementById("tips").innerText += "$" + average;
//second way to do it
document.getElementById("tips").innerText += "Weekly Tip Average: $" + tips / 4;
