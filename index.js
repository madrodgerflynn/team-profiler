// const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./utils/questions");
const Team = require("./lib/Team");
var testTeam = new Team();
const inquirer = require("inquirer");
// console.log(testTeam);
// console.log(testTeam.members);
// testTeam.add(new Engineer("testName", 1, "test@test.com", "madrodgerflynn"));
// testTeam.add(new Manager("testName", 1, "test@test.com", "221B"));
// testTeam.add(new Intern("testName", 1, "test@test.com", "CU Denver"));

console.log(buildPageFor(testTeam));

init();

function init() {
  const team = new Team();
  inquirer.prompt(questions[0]).then((data) => {
    //(data.userInput == "add Manager") ? console.log("add Manager Detected") : console.log("add Manager not dected")
    switch (data.userInput) {
      case "add Manager":
        prompt([questions[1], questions[2], questions[3], questions[10]]);

        break;
      case "add Engineer":
        prompt([questions[4], questions[5], questions[6], questions[10]]);

        break;
      case "add Intern":
        prompt([questions[7], questions[8], questions[9], questions[10]]);
        break;
      case "Build Page":
        fs.writeFile("./dist/output.html", buildPageFor(testTeam), (error) =>
          error ? console.error(error) : console.log("file written")
        );
        break;

      default:
        break;
    }
  });
}

//take an array of question indexes & we need it to take what its creating
function prompt(questionIndexArray) {
  inquirer.prompt(questionIndexArray).then((data) => {
    if (data.ManagerOfficeNumber) {
      testTeam.add(
        new Manager(
          data.ManagerName,
          data.ManagerID,
          data.Email,
          data.ManagerOfficeNumber
        )
      );
    }

    if (data.EngineersgitHub) {
      testTeam.add(
        new Engineer(
          data.EngineerName,
          data.EngineerID,
          data.Email,
          data.EngineersgitHub
        )
      );
    }

    if (data.InternSchool) {
      testTeam.add(
        new Intern(
          data.InternName,
          data.InternID,
          data.Email,
          data.InternSchool
        )
      );
    }

    init();
  });
}

function buildPageFor(team) {
  let start = `<!DOCTYPE html>
    <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css"/>
    <!-- CSS only -->
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
    crossorigin="anonymous"
    />
    <title>Team Members</title>
    </head>
    <body>
    <main>`;
  let teamMembers = team.getMemberHTMLElement();
  let end = `</main></body></html>`;

  return start + teamMembers + end;
}
