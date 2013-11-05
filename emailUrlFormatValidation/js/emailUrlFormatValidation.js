var registrationform = function() {
  this.init();
}

registrationform.prototype = {
  init: function() {
    this.form = document.getElementById("regForm");
    this.email = document.getElementById("email");
    this.url = document.getElementById("homepage");
    this.emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/;  //Very basic regex for email
    this.urlPattern = /((?:https?\:\/\/|www\.)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*)/i ;
    this.validateForm();
  },

  validateForm: function() {
    var obj = this;
    obj.form.onsubmit = function() {
      if (obj.validateEmailFormat() && obj.validateUrlFormat()) {
        return true;
      }
      return false;
    }
  },

  validateEmailFormat: function() {
    var obj = this;
    if (email.value == "") {
      alert("Email cannot be blank")
      email.focus();
      return false;
    }
    else if (!obj.emailPattern.test(email.value)) {
      alert("Please enter a valid email");
      email.focus();
      return false;
    }
    return true;
  },

  validateUrlFormat: function() {
    var obj = this;
    if (obj.url.value == "") {
      alert("Homepage cannot be blank");
      obj.url.focus();
      return false;
    }

    else if (!obj.urlPattern.test(obj.url.value)) {
      alert("Please enter a valid url in Homepage");
      obj.url.focus();
      return false;
    }
    return true;
  }
}

var form = new registrationform();