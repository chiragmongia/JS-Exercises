var welcomeUser = function() {
  this.init();
}

welcomeUser.prototype = {
  init: function() {
    this.firstName = prompt("Enter First Name");
    this.lastName = prompt("Enter Last Name");
    this.valiateName();
  },

  valiateName: function() {
    var obj = this;
    if (obj.firstName != null && obj.lastName != null) {
      obj.firstName = obj.firstName.trim();
      obj.lastName = obj.lastName.trim();
    }

    if (obj.firstName && obj.lastName) {
      alert("Hello " + obj.firstName + " " + obj.lastName + ".");
      var welcomeHeading = document.createElement("h1");
      var headingText = document.createTextNode("Hello " + obj.firstName + " " + obj.lastName + ".");
      welcomeHeading.appendChild(headingText);
      document.body.appendChild(welcomeHeading);
    }

    else {
      var defaultHeading = document.createElement("h1");
      var defaultText = document.createTextNode("Name was not entered correctly.");
      defaultHeading.appendChild(defaultText);
      document.body.appendChild(defaultHeading);
    }
  }
}

var welcomeUser = new welcomeUser();