var User = function() {
  this.init();
}

User.prototype = {
  firstName: null,
  lastName: null,

  init: function() {
    this.readNameAndTrim('first');
    this.readNameAndTrim('last');
    this.displayNameInDocument();
  },

  readNameAndTrim: function(type) {
    var inputVal;
    promptString  = "Enter " + type + " name";
    this[type + 'Name'] = (prompt(promptString) || "").trim();
    this.validateName(type);
  },

  validateName: function(type) {
    alertString = type + " name can't be blank";
    while(!this[type + 'Name']) {
      alert(alertString);
      this.readNameAndTrim(type);
    }
  },

  displayNameInDocument: function() {
    alert("Hello " + this.firstName + " " + this.lastName + ".");
    var welcomeHeading = document.createElement("h1");
    var headingText = document.createTextNode("Hello " + this.firstName + " " + this.lastName + ".");
    welcomeHeading.appendChild(headingText);
    document.body.appendChild(welcomeHeading);
  }
}

var welcomeUser = new User();