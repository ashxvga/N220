//coding challenge
//NOT WORKING = RETURNS UNDEFINED AFTER CHANGING THE VALUE TO 20; -- fixed it
let courseInfo = {
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
/*let courseInfo = {
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