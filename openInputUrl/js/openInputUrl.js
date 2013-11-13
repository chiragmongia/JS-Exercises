var PopUpInputUrl = function() {
  this.init();
}

PopUpInputUrl.prototype = {
  init: function() {
    this.readInputAndTrim();
    this.validateUrlPresence();
  },

  readInputAndTrim: function() {
    this.url = (prompt("Enter the url") || "").trim();
  },

  validateUrlPresence: function() {
    while (this.url == "") {
      alert("Please enter the url");
      this.readInputAndTrim();
    }

    this.openUrlInNewWindow();
  },

  openUrlInNewWindow: function() {
    var options = "width = 400px, height = 450px, scrollbars = no, status = no, menubar = no, toolbar = no";
    window.open(this.url, "", options);
  }
}

var popUpInputUrl = new PopUpInputUrl();