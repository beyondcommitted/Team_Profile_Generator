// Dependencies 
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
// Module imports
const convertToHTML = require("./convert");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./src/card-generator")

// For user inputs
const newTeam = [];
// Prompt user for inputs
function promptTeamMember() {
  inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employees name?",
        validation: (empName) => {
          if (empName) {
            return true;
          } else {
            return "Must enter a name.";
          }
        }
      },
      {
        type: "input",
        name: "id",
        message: "What is the employees id number?",
        validation: (idNum) => {
          if (idNum) {
            return true;
          } else {
            return "Must enter an id number.";
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the employees e-mail?",
        validation: (address) => {
          if (address) {
            return true;
          } else {
            return "Must enter an e-mail address.";
          }
        },
      },
      {
        type: "list",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
        message: "Select a role for the employee: ",
        validate: (position) => {
          if (position) {
            return true;
          } else {
            return "Must select a role.";
          }
        },
      },
    ])
    .then((data) => {
      if (data.role === "Manager") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "officeNumber",
              message: "What is the managers office number?",
              validation: (officeNum) => {
                if (officeNum) {
                  return true;
                } else {
                  return "Must enter an office number.";
                }
              },
            },
          ])
          .then(response => {
            console.log(response.officeNumber);
            const teamManager = new Manager (
              data.name,
              data.id,
              data.email,
              data.role,
              response.officeNumber
            );
            newTeam.push(teamManager);
            selectEmp();
          })
      } else if (data.role === "Engineer") {
        inquirer.prompt([
            {
              type: "input",
              name: "github",
              message: "What is the Github username of the engineer?",
              validate: (username) => {
                if (username) {
                  return true;
                } else {
                  return "Must enter username.";
                }
              }
            }
          ])

          //Initiating a new Manager object
          .then(response =>{
            const newEngineer = new Engineer(
              data.name,
              data.id,
              data.email,
              data.role,
              response.github
            );
            newTeam.push(newEngineer);
            selectEmp();
          });
      } else if (data.role === "Intern") {
        inquirer.prompt([
            {
              type: "input",
              name: "school",
              message: "Where did the intern attend school?",
              validate: (schooldata) => {
                if (schooldata) {
                  return true;
                } else "Must enter a school.";
              }
            }
          ])
          .then(response =>{
            console.log(response.school);
            const newIntern = new Intern(
              data.name,
              data.id,
              data.email,
              data.role,
              response.school
            );
            newTeam.push(newIntern);
            selectEmp();
          });
      } else {
        const newEmployee = new Employee(
          data.name,
          data.email,
          data.id,
          data.role
        );
        newTeam.push(newEmpoyee);
        selectEmp();
      }

      const selectEmp = () => {
        inquirer.prompt([
            {
              type: "confirm",
              name: "team",
              message: "Will the team have anymore employees?",
            },
          ])
          .then((res) => {
            if (res.team === true) {
              promptTeamMember(newTeam);
            } else {
              console.log("Added team", newTeam);
              let generateCard = generateHTML(newTeam)
              convertToHTML(generateCard);
            }
          });
      };
    });
}
promptTeamMember();
