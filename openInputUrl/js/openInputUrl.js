var popUpInputUrl = function() {
  this.init();
}

popUpInputUrl.prototype = {
  init: function() {
    this.inputUrl = prompt("Enter the url");
    this.validateUrlPresence();
  },

  validateUrlPresence: function() {
    var obj = this;
    obj.inputUrl = obj.inputUrl.trim();
    if (obj.inputUrl == "") {
      alert("Please enter the url.");
    }

    else {
      obj.openUrlInNewWindow();
    }
  },

  openUrlInNewWindow: function() {
    var obj = this;
    if (obj.inputUrl) {
      var options = "width = 400px, height = 450px, scrollbars = no, status = no, menubar = no, toolbar = no";
      var newWindow = window.open(obj.inputUrl, "", options);
      newWindow.document.body.style.overflow = "hidden";
    }
  }
}

var popUpInputUrl = new popUpInputUrl();