//Create a variable to store the list of flight times
const flightTimes = [];

//Create a function called addTime that:
function addTime(){
    //Get's the time entered by the user
    let time = document.getElementById("newTimies").value;
    //Adds that time to the light of flight times
    flightTimes.push(time);
    //Updates the p tag to show all of the times
    document.getElementById("listOfTimes").innerHTML += time + "<br/>";
    //Update the h4 tag to show the average of the times with the text "Average Time: " before the value
    function averageTime(flightTimes){
        let sum = 0;
        for(let i = 0; i < flightTimes.length; i++){
            sum += flightTimes[i];
        }
        return sum / flightTimes.length;
    }
    document.getElementById("averageTime").innerHTML += "Average Time: " + averageTime(flightTimes) + "<br/>";
}
