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
    this.form.onsubmit = function() {
      if ( obj.validatePresence() && obj.validateaboutMeLength() && obj.validateNotifyCheckbox() ) {
        return true;
      }
      return false;
    }
  },

  validatePresence: function() {
    for (var i = 0; i < this.form.elements.length; i++) {
      if (!this.form.elements[i].value.trim()) {
        alert(this.form.elements[i].name + " cannot be blank");
        this.form.elements[i].focus();
        return false;
      }
      this.form.elements[i].value = this.form.elements[i].value.trim();
    }
    return true;
  },

  validateaboutMeLength: function() {
    if(this.aboutMe.value.length < 50) {
      alert("About Me should contain atleast 50 characters.");
      this.aboutMe.focus();
      return false;
    }
    return true;
  },

  validateNotifyCheckbox: function() {
    if(!this.notification.checked) {
      alert("Plese confirm to receive notifications of comments");
      this.notification.focus();
      return false;
    }
    return true;
  }
};

var formValid = new formValidation();