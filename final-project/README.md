### Personal Task Manager

Final Project

### Github Link
https://ashxvga.github.io/N220/final-project
### Major Features Overview

**Login Form**
- DOM references: password and username inputs
- Logic:
    - username is empty => tell user to fill in username
    - password is empty
    - password is less than 8 characters
    - password constains no capital letter
    - password contains no numbers
    - there cannot be duplicate usernames
- Events:
    - on login button click check login

**Dashboard**
- DOM references: welcome header, tasks input, add button
- Logic:
    - user logged in => show who is logged in
    - user only sees tasks they have created
    - if there is tasks associated with the username, then display it on the dashboard.
- Events:
    - on logout button click check logout

### Tasks
**Tasks by section:** *I broke down the tasks into smaller sections, each representing a different feature of the application. This helps me keep things organized and makes it easier to focus and understand each feature*
- **Log in and Log out**
    - DOM references: password and username inputs
    - Logic and JS concepts:
        - if statement to check if the username and password match the required format
        - stores the username as the logged-in user
        - checks if the user already has tasks saved
        - for loop checks if the logged-in user already has tasks saved in the tasks array 
        - if not, creates an empty task list for the user
        - store the tasks in an array associated with the username
        - when loged out, clear the logged-in user
        - clear the displayed task list from the dashboard using the inner HTML of the container
    - Data Types:
        - Username: string
        - Password: string
        - Tasks: array of objects
- **Add**
    - DOM references: prompt user input, add button
    - Logic and JS concepts:
        - use prompt to get the task from the user
        - adds a new tasks to the list
        - an if statement checks whether the task name is empty, it will notify the user
        - The task list is an array of objects, where each object represents a task
    - Data Types:
        - here
- **Edit**
    - DOM references: prompt user input, edit button
    - Logic and JS concepts:
        - Prompt box to get user input
        - edits existing tasks and modifies its content
        - for loop to find and update the specific task by its index
- **Delete/Remove**
    - DOM references: delete button, tasks list array
    - Logic and JS concepts:
        - if the button is clicked, find the task in the array using its index
        - removes the task from the array using splice() method learned in class
        - updates the task list on the dashboard to remove the task
- **Category**
    - DOM references: Dropdown menu values
    - Logic and JS concepts:
        - if statement checks if a category is selected from the dropdown menu
        - for loop finds the task in the tasks array using its index
        - updates its category property with the selected value
        - updates the task list on the dashboard to display the category
 
- **Mark as Completed**
    - DOM references: Task text
    - Logic and JS concepts:
        - when the user clicks a task name: 
            - if statement checks the completed property of the task object in the tasks array
        - If completed is false, it is updated to true, and the text gets strikethrough
        - If completed is true, it is updated to false, and the strikethrough is removed

    - Data Types:
        - completed: boolean