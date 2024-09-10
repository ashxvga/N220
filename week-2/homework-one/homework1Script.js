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

