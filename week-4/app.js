//Create an array with the following student grades: 78,86,92,77
const studentGrades = [78,86,92,77];

//variable so we dont have to kept repeating the getElementById
const answersPTag = document.getElementById("answers");

//function so we dont have to keep writing the printing 
function printAnswer(answer)
{
    answersPTag.innerHTML += `<br/> ${answer}`;
}
//1. Print the entire array.
//Will print as a string separated with commas by default
answersPTag.innerHTML += studentGrades;

//2. Print the second value (86).
//Access specific values in array using indexes. It starts at 0
//answersPTag.innerHTML += studentGrades[1];
//answersPTag.innerHTML += `<br/> ${studentGrades[1]}`;
printAnswer(studentGrades[1]); //with functions

//3. Change that value to 83.
//assigns new values to array items in the same way that you would a variable declared with let
studentGrades[1] = 83;

//4. Print the entire array. (Yes, again.)
//answersPTag.innerHTML += `<br/> ${studentGrades}`;
printAnswer(studentGrades);//with function

//5. Print the length of the array.
//All arrays have a legth even if it is zero
printAnswer(studentGrades.length);

//6. The professor gives every student 1 extra point on the last grade. Print the new grade.
//Arrays have a forEach method that takes a function as the parameter
//That function has access to the values and indexes in the array
studentGrades.forEach(function(currentStudent, currentStudentIndex){
    //loop here
    studentGrades[currentStudentIndex] += 1; //gives them the extra point
    printAnswer(studentGrades[currentStudentIndex]);
    
})
//7. Print the entire array. (Yes, again.)
printAnswer(studentGrades);

//8. Print the last array value.
printAnswer(studentGrades[3]);
//method if didn't know how many there were.
//const indexOfLastStudent = studentGrades.length - 1;
//printAnswer(studentGrades[indexOfLastStudent]);

//9. Find the average grade.
//use variable to track the total of grades added together.
//Looped throough array and added to total
//Mathep up the average
let totalOfGrades = 0;
studentGrades.forEach(function(currentGrade){
    totalOfGrades += currentGrade;
})
const averageGrades = totalOfGrades / studentGrades.length;
printAnswer(totalOfGrades/studentGrades.length);
//10. Using the answer to the last question, 
//write the result of wether your average is above 80. (Answer should be true or false)
printAnswer(averageGrades>80);

//ARRAY MORE

//0. Create an array with 6 values.
const friends = ["Elmo", "Spongebob", "CatDog", "Danny Phantom", "Timmy Turner"];

function printFriends(){
    document.querySelector("#extraAnswers").innerHTML += `<br/> ${friends}`;
}
//1. Add a value to the end of array.
friends.push("Jimmy Neutron");
printFriends();
//2. Take out the last value
friends.pop();
printFriends();

//3. Take out the first value: Using the splice method
friends.splice(0, 1); //value of where you want to start + how many you want to delete
printFriends();

//4. Put in the first value of an array
friends.splice(0,0, "Invadez Zim"); //doesnt delete because of the 0, but adds the string
printFriends();

//5. Delete the third value of the array
friends.splice(2,1);
printFriends();

//6. Add a value in the middle of the array
friends.splice(2,0,"Gir");
printFriends();
//if we wanted to add multiple at the same time
//friends.splice(3,0,["Patrick", "Squidward"]);
//printFriends();

//splice method takes 3 parameters
//1. What index it starts at
//2. How many elements starting from that index should be deleted
//3. What to add to the array (This could be just a value or an array)

//7. Delete a value in the middle of the array
friends.splice(3,1,["Patrick", "Squidward"]); //deleted one and added 2
printFriends();

//OBJECTS!!!!

