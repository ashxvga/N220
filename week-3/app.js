function simpleFunctionOne()
{
    //code here
    document.getElementById("changeTxt").innerHTML = "Don't change this paragraph."
}

simpleFunctionOne();

function simpleFunctionTwo()
{
    document.querySelector("body").innerHTML += "This function does not take parameters.";
}
simpleFunctionTwo();