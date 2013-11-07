var url = function() {
  this.init();
}

url.prototype = {
  init: function() {
    this.inputUrl = document.getElementById("url");
    this.form = document.getElementById("form");
    this.urlPattern = /(^https?\:\/\/(?:[-a-z0-9]+\.)*[-a-z0-9]+.*)/i;
    this.BindFormSubmitEvent();
  },

  BindFormSubmitEvent: function() {
    var obj = this;
    obj.form.onsubmit = function() {
      if (obj.validateUrlFormat() && obj.extractSubDomainFromUrl()) {
        return true;
      }
      return false;
    }
  },

  validateUrlFormat: function() {
    var obj = this;
    if (obj.inputUrl.value == "") {
      alert("Url cannot be blank");
      obj.inputUrl.focus();
      return false;
    }

    else if (!obj.urlPattern.test(obj.inputUrl.value)) {
      alert("Invalid url. Please enter a url in \"http://\" format");
      obj.inputUrl.focus();
      return false;
    }
    return true;
  },

  extractSubDomainFromUrl: function() {
    var obj = this;
    var domain = [];
    var subDomain = [];
    var regex = /((?:\w+\.)+)?(\w+\.+\w+)/i;
    var inputUrlDomain = obj.inputUrl.value.match(regex);

    domain = inputUrlDomain[2];
    
    if (inputUrlDomain[1] === undefined)
      alert("Domain: " + domain);
    else {
      subDomain = inputUrlDomain[1].slice(0, -1);
      alert("Domain: " + domain + ", SubDomain: " + subDomain);
    }
  }   
}

var obj = new url();