//the formula: Total = Principle(1+Rate*Time)

//Function to calculate the totalInterest and grand total
function calcTotalInterest()
{
    //Using the parseFloat() to changw the string values to integers
    const principle = parseFloat(document.getElementById("principle").value);
    const rate = parseFloat(document.getElementById("interestRate").value);
    const time = parseFloat(document.getElementById("time").value);
    //calculates the interest
    let totalInterest = principle * rate * time /100;
    //calculates the grand total using the formula from the hw
    let total = principle * (1 + (rate * time/100));
    //displays the result when the button is clicked
    //used h2 tag to make it look like the one from the hw
    document.getElementById("resultP").innerHTML += `
    <h2>Your Results</h2>
    With a beginning principal of $${principle.toFixed(2)} and a growth rate of ${rate}% for ${time}, your total interest will be $${totalInterest.toFixed(2)} with a grand total of $${total.toFixed(2)}.`
}