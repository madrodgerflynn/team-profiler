var questions = [
  {
    type: "list",
    message: "What woudld you like to do?",
    choices: ["add Intern", "add Engineer", "add Manager", "Build Page"],
    name: "userInput",
  },
  {
    type: "input",
    message: "What is the Manager's name?",
    name: "ManagerName",
  },
  {
    type: "input",
    message: "What is the Manager's ID number?",
    name: "ManagerID",
  },
  {
    type: "input",
    message: "What is the Manager's office number?",
    name: "ManagerOfficeNumber",
  },
  {
    type: "input",
    message: "What is the Engineer's name?",
    name: "EngineerName",
  },
  {
    type: "input",
    message: "What is the Engineer's ID number?",
    name: "EngineerID",
  },
  {
    type: "input",
    message: "What is the Engineer's gitHub?",
    name: "EngineersgitHub",
  },
  {
    type: "input",
    message: "What is the Intern's name?",
    name: "InternName",
  },
  {
    type: "input",
    message: "What is the Intern's ID number?",
    name: "InternID",
  },
  {
    type: "input",
    message: "What is the Intern's School?",
    name: "InternSchool",
  },
  {
    type: "input",
    message: "What is the member's Email?",
    name: "Email",
  },
];
module.exports = questions;
