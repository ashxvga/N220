### Personal Task Manager

Final Project

### Github Link
https://ashxvga.github.io/N220/final-project
### Major Features

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

**Tasks**
- **Add**
    - DOM references: prompt user input, add button
    - Logic:
        - Prompt box to get user input
        - adds a new tasks to the list
    - Events:
- **Edit**
 - DOM references: prompt user input, edit button
    - Logic:
        - Prompt box to get user input
        - edits existing tasks and modifies its content
    - Events: