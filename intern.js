let Employee = require("./employee");
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, "Intern");
    this.school = school;
  }

  getSchool() {}

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
