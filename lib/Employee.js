class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }

  getHTMLElement(otherStuff) {
    console.log("Employee version of get html.");
    let html = `<body>
    <div class="card" style="width: 18rem">
      <div class="Employee">
        <h2>${this.name}</h2>
        <h5>${this.id}</h5>
        <h5>${this.getRole()}</h5>
        <h5>${this.email}</h5>`;
    if (otherStuff) {
      for (const stuff of otherStuff) {
        html += "<h5>" + stuff + "</h5>";
      }
    }

    let ending = `</div></div>`;

    return html;
  }
}

module.exports = Employee;
