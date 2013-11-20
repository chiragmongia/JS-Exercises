var User = function() {
  this.init();
}

User.prototype = {
  firstName: null,
  lastName: null,
  inputVal: null,

  init: function() {
    // this.inputVal;
    this.readNameAndTrim('first');
    this.readNameAndTrim('last');
    this.displayNameInDocument();
  },

  readNameAndTrim: function(type) {
    promptString = "Enter " + type + " name";
    this.inputVal = (prompt(promptString) || "").trim();
    this.validateName(type);
  },

  validateName: function(type) {
    alertString = type + " name can't be blank";
    while(!this.inputVal) {
      alert(alertString);
      this.readNameAndTrim(type);
    }
    this[type + 'Name'] = this.inputVal;
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