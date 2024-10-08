//Create a variable to track the list of todo items
let todoItems = [];

//INSTRUCTIONS
//Create the addItem function that
//1. Gets the input from "items"
//2. Adds it to the list of todo items
//3. Updates the "list" ul tag to show all the items currently in the list
//- Each item should be shown added as a li tag in the string ("<li>" + item + "</li>" or `<li>${item}</li>`)

function addItem()
{
    item = document.getElementById("item").value;
    //addf the item to the todoItems array
    //using the push method learned in class
    todoItems.push(item);
    //updates the "list" ul tag to show the current list of items
    //Each item should be shown added as a li tag in the string ("<li>" + item + "</li>" or `<li>${item}</li>`)
    document.getElementById("list").innerHTML = todoItems.map(i => `<li>${i}</li>`).join(" ");
};
//INSTRUCTIONS
//Create the summarizeList function that outputs the following to the summary p tag
//- these lines should be split with br tags ("<br />")
// "Total Items: "
// - This should show the total number of items in the list
// "First Item: "
// - This should show the first item in the list
// "Last Item: "
// - This should show the last item in the list. If the list has only 1 item then this will be the same as the first item.
function summarizeList(){
    //for total item number using the length as learned in class
    const totalItems = todoItems.length;
    //the first item of the list-array, whcih is index 0
    const firstItem = todoItems[0];
    //for the last item, using the length and -1 to get the actual last item
    const lastItem = todoItems[todoItems.length - 1];
    //to display it in the p tag
    document.getElementById("summary").innerHTML = `Total Items: ${totalItems}<br />` + `First Item: ${firstItem}<br />` + `Last Item: ${lastItem}`;

};
