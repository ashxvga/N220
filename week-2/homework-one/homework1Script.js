let ticketCost = 14.00;
let numberOfTickets = 3;
let total = ticketCost * numberOfTickets;

document.getElementById("ticketNum").innerHTML += "Tickets: " + numberOfTickets;
document.getElementById("ticketCost").innerHTML += "Cost: " + ticketCost;
document.getElementById("ttCost").innerHTML += "Total: " + total;

//for the second problem
let bankAccount = 235.83;
let jacket = 70;
let sweater = 50
let shirt = 35;
let pants = 75;
let skirt = 49;
let sandals = 30;
let shoes = 60;

document.getElementById("bank").innerHTML += "After purchasing the outfit, my bank account is $" + bankAccount - (shirt+pants+shoes);
let remainingFunds = bankAccount - (shirt+pants+shoes);
let canBuyJacket = remainingFunds - jacket >= 0;
document.getElementById("addJacket").innerHTML += "Add Jacket: " + canBuyJacket;

//for the third problem
let pizzas = 4;
let slicesPerPizza = 8;
let totalSlices = pizzas * slicesPerPizza;
let slicesPerStudent = 2.5;

let numberOfStudents = Math.floor(totalSlices / slicesPerStudent); 
let leftoverSlices = totalSlices % slicesPerStudent;

document.getElementById("profPizza").innerText += "Students: " + numberOfStudents + ", Rector: " + leftoverSlices;

//for the fourth problem

let adultCost = 12.00;
let childCost = 6.00;
let drinkCost = 1.50;

let adult = 2;
let child = 1;
let drinks = 3;

let totalCost = (adult * adultCost) + (child * childCost) + (drinks * drinkCost);

document.getElementById("Monty").innerText += totalCost;
