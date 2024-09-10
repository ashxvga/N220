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

function sayHelloWorld()
{
    console.log("Hello, world");
}
//started using parameters

sayHelloWorld();

function sayFavoriteBand(bandName)
{
    document.getElementById("favBand").innerHTML += bandName + "<br/>"
}

sayFavoriteBand("Blackpink");
sayFavoriteBand("Cigarettes after sx");
sayFavoriteBand("Tipling rock");

function sayMyName(myName)
{
    console.log(myName);
}

sayMyName("Ashley");
sayMyName("Say my name");
sayMyName("Say my name");
sayMyName("Say my name");
sayMyName("If no one is around you");