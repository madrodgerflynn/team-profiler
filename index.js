// const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const Team = require("./lib/Team");

let testTeam = new Team();

console.log(testTeam);
console.log(testTeam.members);
testTeam.add(new Engineer("testName", 1, "test@test.com", "madrodgerflynn"));

console.log(testTeam.members[0].getHTMLElement());
