var formValidation = function() {
  this.init();
};

formValidation.prototype = {
  init: function() {
    //initialize variables
    this.form = document.getElementById("regForm");
    this.notification = document.getElementById("notify");
    this.aboutMe = document.getElementById("aboutMe");
    this.homepage = document.getElementById("homepage");

    //invoke functions
    this.validateForm();
  },

  validateForm: function() {
    var obj = this;
    obj.form.onsubmit = function() {
      if ( obj.validatePresence() && obj.validateaboutMeLength() && obj.validateNotifyCheckbox() ) {
        return true;
      }
      return false;
    }
  },

  validatePresence: function() {
    var obj = this;
    for (var i = 0; i < obj.form.elements.length; i++) {
      if (obj.form.elements[i].value == "") {
        alert(obj.form.elements[i].name + " cannot be blank");
        obj.form.elements[i].focus();
        return false;
      }
    }
    return true;
  },

  validateaboutMeLength: function() {
    var obj = this;
    if(obj.aboutMe.value.length < 50) {
      alert("About Me should contain atleast 50 characters.");
      obj.aboutMe.focus();
      return false;
    }
    return true;
  },

  validateNotifyCheckbox: function() {
    var obj = this;
    if(!obj.notification.checked) {
      alert("Plese confirm to receive notifications of comments");
      obj.notification.focus();
      return false;
    }
    return true;
  }
};

var formValid = new formValidation();