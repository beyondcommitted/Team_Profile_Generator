const inquirer = require("inquirer");
const fs = require("fs");

const convert = require("./convert");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

let teamManagerCard = "";
let engineerCard = "";
let internCard = "";
let employeeCards = "";

//organizing the team //
let promptTeamManager = () => {
  console.log("Organize your team.");
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the managers id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the managers email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the managers office number?",
      },
    ]) //Initiating a new Manager object
    .then((data) => {
      let teamManager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      console.log(teamManager);

      teamManagerCard = cardGenerator.managersCard(
        teamManager.name,
        teamManager.id,
        teamManager.email,
        teamManager.officeNumber
      );
      employeeCards += teamManagerCard;

      selectEmp();
    });
};

//prompt to choose a team member
const selectEmp = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "team",
        choices: ["engineer", "intern", "I am done adding employees"],
        message: "Which type of employee would you like to register?",
      },
    ])
    .then((data) => {
      if (data.choices === "engineer") {
        addEngineer();
      } else if (data.choices === "intern") {
        addIntern();
      } else {
        console.log("Check convert file for your organized team.");
        const convertFile = convert.convertToHTML(employeeCards);
        fs.writeFile("./new_index.html", convertFile, (err) => {
          if (err) throw err;
          //
        });
      }
    });
};

//prompt to build an intern
const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internsName",
        message: "What is the name of intern?",
      },
      {
        type: "input",
        name: "internsId",
        message: "What is the ID of the intern?",
      },
      {
        type: "input",
        name: "internsEmail",
        message: "What is the e-mail address of the intern?",
      },
      {
        type: "input",
        name: "school",
        message: "Where did the intern attend school?",
      },
    ])
    .then((data) => {
      let interns = new Intern(
        data.internsName,
        data.internsId,
        data.internsEmail,
        data.school
      );
      console.log(intern);

      internCard = cardGenerator.internCard(
        interns.name,
        interns.id,
        interns.email,
        interns.school
      );
      employeeCards += internCard;
      selectEmp();
    });
};

// Prompt to Build Engineer
const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineersName",
        message: "What is the name of the engineer?",
      },
      {
        type: "input",
        name: "engineersID",
        message: "What is the id of the engineer?",
      },
      {
        type: "input",
        name: "engineersEmail",
        message: "What is the e-mail address of the engineer?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Github username of the engineer?",
      },
    ])
    .then((data) => {
      let engineers = new Engineer(
        data.engineersName,
        data.engineersID,
        data.engineersEmail,
        data.github
      );

      engineerCard = cardGenerator.engineerCard(
        engineers.name,
        engineers.id,
        engineers.email,
        engineers.github
      );
      employeeCards += engineerCard;

      selectEmp();
    });
};

(module.exports = promptTeamManager), addEngineer, addIntern;
