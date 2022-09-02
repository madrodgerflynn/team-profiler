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
    let html = `
    <div rows="3" class="card" style="width: 18rem">
      <div class="card1">
        <div class="Employee">
        <h2>NAME: ${this.name}</h2>
          <div class ="idCard">
        <h5>ID: ${this.id}</h5></div>
          <div class="getRole">
        <h5>ROLE: ${this.getRole()}</h5></div>
          <div class="email"></div>
        <h5>EMAIL: <a href="mailto:${this.email}">${this.email}</a></h5>
    </div>
    <div>      
            `;
    if (otherStuff) {
      for (const stuff of otherStuff) {
        html += "<h5>" + stuff + "</h5>";
      }
    }

    `<div class="special>`;
    let ending = `</div></div>`;
    return html + ending;
  }
}

module.exports = Employee;
