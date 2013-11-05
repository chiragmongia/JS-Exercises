var form = function() {
  this.init();
}

form.prototype = {
  init: function() {
    this.form = document.getElementById("form");
    this.result = document.getElementById("result");
    this.number = document.getElementById("number");
    this.numberPattern = /^\d+$/;
    this.submitFormIfNumber();
  },

  submitFormIfNumber: function() {
    var obj = this;
    obj.form.onsubmit = function() {
      if (obj.validateNumber()) {
        alert("Number entered!")
        return true;
      }
      return false;
    }
  },

  validateNumber: function() {
    var obj = this;
    obj.number.value = obj.number.value.trim();
    if (obj.number.value == "") {
      obj.result.value = "";
      alert("Number cannot be blank");
      obj.number.focus();
      return false;
    }

    else if (!obj.numberPattern.test(obj.number.value)) {
      obj.result.value = "false"
      alert("The value entered is not a number");
      obj.number.focus();
      return false;
    }

    else
      obj.result.value = "true";
      return true;
  }
}

var form = new form();