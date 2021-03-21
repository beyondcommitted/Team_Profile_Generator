const inquirer = require("inquirer");
const jest = require("jest")
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const employee = [
    {
      type: "input",
      name: "name",
      message: "What is the name of the employee?",
    },
    {
      type: "input",
      name: "id",
      message: "Assign the employee an id #.",
    },
    {
      type: "input",
      name: "email",
      message: "What is the email address of the employee?",
    },
    {
      type: "input",
      name: "github",
      message: "What is GitHub of the Engineer?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the office number of the manager?",
    },
    {
      type: "input",
      name: "school",
      message: "What school does the intern attend?",
    },
  ];
  
//    Creates a function to initialize app
  async function init() {
    try {
      const answers = await inquirer.prompt(employee);
      console.log(answers);
      await writeFileAsync("index.html", generateProfile(answers));
    } catch (error) {
      console.log(error);
    }
  }
  
  // Function call to initialize app
  init();