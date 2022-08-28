const inquirer = require('inquirer');

function startApp() {
console.log("welcome to team builder"); 

function createEmployee() {
    inquirer.prompt([
        {type: "input",
        name: "employeeName",
        message: "whats the employee's name?",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "please enter the name.";
        }
        
    
    }
    ]) 
}
createEmployee()
}

startApp();