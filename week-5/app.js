//coding challenge
//NOT WORKING = RETURNS UNDEFINED AFTER CHANGING THE VALUE TO 20; -- fixed it
/*let courseInfo = {
    courseNumber: "N220",
    courseTitle: "Introduction to Media Application Development",
    totalSeats: 20,
    studentsEnrolled: 18,
    checkAvailability()
    {
        let availability = true;
        let space = this.totalSeats - this.studentsEnrolled;
        if(space > 0)
        {
            return availability;
        }
        else{
            availability = false;
            return availability; //this was missing, without it, it returns undefined
        }
    }
}
console.log(courseInfo.courseNumber + " Open: " + courseInfo.checkAvailability());
courseInfo.studentsEnrolled = 20;
console.log(courseInfo.courseNumber + " Open: " + courseInfo.checkAvailability());
let courseInfo = {
    courseNumber: "N220",
    courseTitle: "Introduction to Media Application Development",
    totalSeats: 20,
    studentsEnrolled: 18,
    checkAvailability()
    {
        let availability = this.totalSeats - this.studentsEnrolled;
        if(availability >0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
//document.getElementById("availability").innerHTML = courseInfo.courseNumber + " Open: " + courseInfo.checkAvailability() + ".";
console.log(courseInfo.courseNumber + " Open: " + courseInfo.checkAvailability());
courseInfo.studentsEnrolled = 20;
console.log(courseInfo.courseNumber + " Open: " + courseInfo.checkAvailability());
//document.getElementById("availability2").innerHTML = courseInfo.courseNumber + " Open: " + courseInfo.checkAvailability() + ".";
*/

//Professor's way:
const codeChallenge = {
    courseNumber: "N220",
    courseTitle: "Introduction to Media Application Development",
    totalSeats: 20,
    studentsEnrolled: 18,
    getAvailabillity: function()
    {
        //return(this.totalSeats - this.studentsEnrolled) !==0;
        return this.totalSeats > this.studentsEnrolled;
    }
}
//1. Are seats available
console.log(`N200 Open: ${codeChallenge.getAvailabillity()}.`);
//2. Two more peeps
codeChallenge.studentsEnrolled += 2;
console.log(`Total students: ${codeChallenge.studentsEnrolled}`);
//3. check again
console.log(`N200 Open: ${codeChallenge.getAvailabillity()}.`);


//BUILT-IN OBJECTS!!!
var tacocat = "wednesday";
function IUPUIWebsite()
{
    console.log(window.tacocat);
    console.log(`Inner Width: ${window.innerWidth}`);
    console.log(`Outer Width: ${window.outerWidth}`);

    //console.log(window.location.replace("https://google.com"));
    console.log(window.location);
}

function printPage()
{
    window.print(); //prints the page
}

document.getElementById("dpDetails").innerHTML += codeChallenge.courseTitle;
document.querySelector("#domain").innerHTML += "Hi";
//console.log(document.body.get);
const updatePTag = document.getElementById("update");

console.log(updatePTag.querySelector("#delete"));

console.log(String(100), 100);
console.log(String(100).length, 100);
console.log(String(100).includes(0), 100); //true 100
console.log(String(100).includes(2), 100); //false 100
console.log("100".replace("0", "2"), 100); //replaces the 0 to 2
console.log("100".replaceAll("0", "2"), 100);// replaces all the 0 to 2

console.log("1,2,3,4".split(","));
console.log("   123   ");
console.log("   123   ".trim()); //takes the spaces out