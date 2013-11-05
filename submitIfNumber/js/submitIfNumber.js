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
      obj.validateNumber();
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
    }

    else if (!obj.numberPattern.test(obj.number.value)) {
      obj.result.value = "false"
      alert("The value entered is not a number");
      obj.number.focus();
    }

    else
      obj.result.value = "true"
  }
}

var form = new form();