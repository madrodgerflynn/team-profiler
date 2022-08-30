const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class Team {
  constructor(members) {
    if (members && members.isArray()) {
      this.members = members;
    } else {
      this.members = [];
    }
  }
  add(Member) {
    this.members.push(Member);
  }
  removerMember(byID) {
    if (this.members) {
      for (let i = 0; i < this.members.length; i++) {
        if (this.members[i].getID() == byID) {
          this.members.splice(i, 1);
        }
      }
    }
  }

  getMemberHTMLElement() {
    let toBeReturned = [];
    if (this.members) {
      for (let i = 0; i < this.members.length; i++) {
        toBeReturned.push(this.members[i].getMemberHTMLElement());
      }
      return toBeReturned;
    }
  }
}
module.exports = Team;
