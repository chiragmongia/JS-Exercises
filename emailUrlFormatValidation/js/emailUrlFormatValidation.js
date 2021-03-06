var Regex = {
  emailPattern: /^[a-zA-Z0-9][a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/i,
  urlPattern: /((?:https?\:\/\/|www\.)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*)/i
};

var Registrationform = function() {
  this.init();
}

Registrationform.prototype = {
  init: function() {
    this.form = document.getElementById("regForm");
    this.email = document.getElementById("email");
    this.url = document.getElementById("homepage");
    this.validateForm();
  },

  validateForm: function() {
    var obj = this;
    obj.form.onsubmit = function() {
      if (obj.validateEmailAndUrl(obj.email, Regex.emailPattern) && obj.validateEmailAndUrl(obj.url, Regex.urlPattern)) {
        return true;
      }
      return false;
    }
  },

  validateEmailAndUrl: function(inputField, pattern) {
    var obj = this;
    if (inputField.value == "") {
      alert(inputField.name + " cannot be blank")
      inputField.focus();
      return false;
    }
    else if (!pattern.test(inputField.value)) {
      alert("Please enter a valid " + inputField.name);
      inputField.focus();
      return false;
    }
    return true;
  },
}

var form = new Registrationform();