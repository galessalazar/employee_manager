require ('dotenv').config();
const inquirer = require('inquirer');
const { Pool } = require('pg');

const pool = new Pool(
    {
        user: 'postgres',
        password: '3y3hartJ0n!',
        host: 'localhost',
        database: 'employee_manager'
    },
    console.log('Connected to employee_mananger database.')
)
pool.connect();


const questions = [
    {
        type:'list',
        name: 'mainMenu',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add role', 'Add department', 'Add employee', 'Update employee role', 'Quit']
    },
   
    
]





inquirer.prompt(questions)
.then(answers  =>
    {
        console.log(answers.mainMenu)
        
        switch(answers.mainMenu){
            case 'View all departments': 
            viewAllDeparments();
                 break;
            case 'View all roles':
            viewAllRoles();
                 break;
            case 'View all employees':
                viewAllEmployees();
                    break;
            case 'Add role':
                addRole();
                break;
            case 'Add department':
                addDepartment();
                break;
            case 'Add employee':
                addEmployee();
                break;
            case 'Update employee role':
                updateEmp();
                break;
            case 'Quit':
                quit();
                break;
             
        }
    });

    function viewAllDeparments() {}

    function viewAllRoles() {}

    function viewAllEmployees() {}

    function addDepartment() {}

    function addRole() {}

    function addEmployee() {}

    function updateEmp() {}

    function quit() {
        console.log('goodbye!')
        process.exit()
    }