# Team-Profile

A Node.js command-line application that generates a team profile. Allowing users to enter and track general information about their employees. The app takes the command-line inputs and uses them to generate an HTML page showcasing the info.

## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## Usage

To use this application, clone this repository. This app requires NODE.JS to be installed. Using VS Code or the code editor of your choice, install Inquirer.js (8.2.4). In order to install ```inquirer```, enter ```npm i inquirer@8.2.4``` into your command line.

Enter in the following command into your terminal:
```node index.js```

Then asnwer the prompts to have your HTML generated.

## screenshot

![127 0 0 1_5500_dist_index html](https://user-images.githubusercontent.com/106924254/199866676-09c9abbe-a957-45ad-8777-ebc35feb2479.png)

## video

https://youtu.be/vyn7y-ScBVM
