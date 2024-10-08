// Create a variable to keep track of the hotel details being
//       // properties
// name of hotel (this should be set to the value "Spooky Hotel")
// total rooms (this should be set to the value 20)
// current rooms filled (this should be set to the value 8)
// methods
// checkVacancy
// takes a parameter of number of rooms to be filled
// compares total rooms to current rooms filled and number of rooms to be filled
// returns whether there is enough space for the rooms
const hotel = {
    name: "Spooky Hotel",
    totalRooms: 20,
    currentRooms: 8,
    checkVacancy(numberOfRooms) {
        // compares total rooms to current rooms filled and number of rooms to be filled
        // returns true if there is enough space for the rooms
        const space = this.totalRooms - this.currentRooms;
        if (space >= numberOfRooms) {
            return true;
        } else {
            return false;
        };
    }

}
// Create a function called bookRooms() that
// Checks if there are enough rooms vacant
// If there are then
// Add that to the hotel current rooms filled
// Show message "Room(s) successfully booked" in p tag
// If not then
// Show message "Not enough vacant rooms"
function bookRooms() {
    const numberOfRooms = parseInt(document.getElementById("rooms").value);
    if (hotel.checkVacancy(numberOfRooms)) {
        hotel.currentRooms += numberOfRooms;
        document.getElementById("message").innerHTML = "Room(s) successfully booked";
    } else {
        document.getElementById("message").innerHTML = "Not enough vacant rooms";
    }
}