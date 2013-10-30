var formValidation = function() {
  this.init();
};

formValidation.prototype = {
  init: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    var obj = this;
    var form = document.getElementById("regForm");
    form.onsubmit = function() {
      if (obj.loginId())
        if(obj.email())
          if(obj.fname())
            if(obj.homepage())
              if(obj.aboutMe())
                if(obj.aboutMe())
                  if (obj.notify())
                     return true; 
      return false;
    }
  },

  loginId: function() {
    var login = document.getElementById("login");
    if(login.value == "") {
      alert("Login Id cannot be blank");
      login.focus();
      return false;
    }
    return true;
  },

  email: function() {
    var email = document.getElementById("email");
    emailPattern = /^[0-9]*[a-z]+[0-9]*@[a-z]+\.[a-z]{2,4}(\.[a-z]{2,4})?$/;
    if(email.value == "") {
      alert("Email cannot be blank");
      email.focus();
      return false;
    }
    else if (!emailPattern.test(email.value)) {
      alert("Please enter a valid email address");
      email.focus();
      return false;
    }
    return true;
  },

  fname: function() {
    var name = document.getElementById("fname")
    if(name.value == "") {
      alert("Name cannot be blank");
      name.focus();
      return false;
    }
    return true;
  },

  homepage: function() {
    var homepage = document.getElementById("homepage");
    urlPattern = /^http(s)?:\/\/?[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    if(homepage.value == "") {
      alert("Homepage cannot be blank");
      homepage.focus();
      return false;
    }
    else if(!urlPattern.test(homepage.value)) {
      alert("Please enter a valid Homepage. It should be in \"http://\" format");
      homepage.focus();
      return false;
    }
    return true;
  },

  aboutMe: function() {
    var aboutMe = document.getElementById("aboutMe");
    if(aboutMe.value == "") {
      alert("About Me cannot be blank");
      aboutMe.focus();
      return false;
    }
    else if(aboutMe.value.length < 50) {
      alert("About Me should contain atleast 50 characters.");
      aboutMe.focus();
      return false;
    }
    return true;
  },

  notify: function() {
    var notify = document.getElementById("notify");
    if(!notify.checked) {
      alert("Plese confirm to receive notifications of comments");
      notify.focus();
      return false;
    }
    return true;
  },
};

var formValid = new formValidation();