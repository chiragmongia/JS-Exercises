var Regex = {
  urlPattern: /^https?:\/\/((?:[a-zA-Z0-9]+\.)+)?([a-zA-Z0-9]+\.+[a-zA-Z0-9]{2,4}$)/i
}

var Url = function() {
  this.init();
}

Url.prototype = {
  init: function() {
    this.inputUrl = document.getElementById("url");
    this.form = document.getElementById("form");
    this.bindFormSubmitEvent();
  },

  bindFormSubmitEvent: function() {
    var obj = this;
    this.form.onsubmit = function() {
      return (obj.validateUrlFormat() && obj.extractSubDomainFromUrl());
    }
  },

  validateUrlFormat: function() {
    var obj = this;
    if (!this.inputUrl.value.trim()) {
      alert("Url cannot be blank");
      this.inputUrl.focus();
      return false;
    }
    return true;
  },

  extractSubDomainFromUrl: function() {
    var domain,
        subDomain;

    if (!Regex.urlPattern.test(this.inputUrl.value.trim())) {
      alert("Invalid url. Please enter a url in \"http://\" format");
      this.inputUrl.focus();
      return false;
    }
    else {
      domain = RegExp.$2;
      if (!RegExp.$1)
        alert("Domain: " + domain);
      else {
        subDomain = RegExp.$1.slice(0, -1);
        alert("Domain: " + domain + ", SubDomain: " + subDomain);
      }
      return true;
    }
  }
}

var url = new Url();