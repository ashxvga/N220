//1. creatre variable tracking currentCount

//2. Create function addCount to add to the
//currentCount then update the "counter" p tag

//varibale to track currentCount
let currentCount = 0;

// function addCount()
// {
//     currentCount++;
//     document.querySelector("#counter").innerHTML = currentCount;
// }

//if we want to show it right away
function showCurrentCount()
{
    document.querySelector("#counter").innerHTML = currentCount;    
}
showCurrentCount();

function addCount()
{
    currentCount++;
    showCurrentCount();
}