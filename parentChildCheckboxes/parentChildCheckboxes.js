var menuItems = function() {
  this.init();
};

menuItems.prototype = {
  init: function() {
    this.parentCheckBox = document.getElementsByName("check");
    this.childCheckBoxes = document.getElementsByTagName("ul");
    this.bindEvents();
  },

  bindEvents: function() {
    this.showOnCheck();
  },

  showOnCheck: function() {
    var obj = this;
    for(var i = 0; i < obj.parentCheckBox.length; i++) {
      obj.parentCheckBox[i].onclick = function() {
        for(var i = 0; i < obj.parentCheckBox.length; i++) {
          if (obj.parentCheckBox[i].checked) {
            obj.childCheckBoxes[i].style.display = "block";
            this.scrollIntoView(true);
            var checkBox = obj.childCheckBoxes[i].getElementsByTagName("input");
            for(var j = 0; j < checkBox.length; j++)
              checkBox[j].checked = true;
          }

          else {
            obj.childCheckBoxes[i].style.display = "none";
            var checkBox = obj.childCheckBoxes[i].getElementsByTagName("input");
            for(var j = 0; j < checkBox.length; j++)
              checkBox[j].checked = false;
          }
        }
      }
    }
  }
}

var object = new menuItems();