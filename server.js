

//this makes commits ignore username/ passwords from being published on github, imports the .env file
require ('dotenv').config();
const inquirer = require('inquirer');

const questions = [
    {
        type:'list',
        name: 'view-department',
        message: 'View All Deparments',
        choices: ['Sales', 'Engineering', 'Finance', 'Legal']
    },
    {
        type:'list',
        name: 'view-roles',
        message: 'View All Roles',
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
    },
    {       
        type:'list',
        name: 'view-employees',
        message: 'View All Employees',
        choices: ['John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown', 'Sarah Lourd', 'Tom Allen']
      
    },
    {
        type:'input',
        name: 'add-department',
        message: 'What is the name of the department?'
    },
    
]

inquirer.prompt(questions)
.then(answers  =>
    {
        console.log(answers);
    });