require ('dotenv').config();
const inquirer = require('inquirer');
const { Pool } = require('pg');
require('console.table')
const path = require('path');


const pool = new Pool(
    {
        user: 'PGUSER',
        password: 'PGPASSWORD',
        host: 'PGHOST',
        database: 'PGDATABASE'
    },
    console.log('Connected to employee_manager database.')
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




function menu(){
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
};

    function viewAllDeparments() {
        pool.query('SELECT * FROM department', function (err, data){
            if (err) {
                console.error(err)
            } else {
                console.table(data.rows)
                menu()
            }
        })
    }

    function viewAllRoles() {
        pool.query('SELECT * FROM role', function (err, data){
            if (err) {
                console.error(err)
            } else {
                console.table(data.rows)
                menu()
            }
        })
    }

    function viewAllEmployees() {
        pool.query('SELECT * FROM employee', function (err, data){
            if (err) {
                console.error(err)
            } else {
                console.table(data.rows)
                menu()
            }
        })
    }

    function addDepartment() {
        inquirer.prompt([
            {
                type:'input',
                name:'addDepartment',
                message:'enter deparment name'
            }
        ]).then(roleAnswer =>{
            let department = roleAnswer.addDepartment
            pool.query('INSERT INTO department (name) VALUES ($1)', [department], function(err, data) {
                if(err) {
                    console.error(err)
                } else {
                    viewAllDeparments()
                }
            })
        })
    }

    function addRole() {}

    function addEmployee() {}

    function updateEmp() {}

    function quit() {
        console.log('goodbye!')
        process.exit()
    }
    menu();