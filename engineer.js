const Employee = require("./employee");
class Engineer extends Employee {
  constructor(name, id, email, githhub) {
    super(name, id, email, "Engineer");
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }

  getGithub() {
      return this.github;
  }
}


module.exports = Engineer;
