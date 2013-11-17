var MenuItems = function() {
  this.init();
};

MenuItems.prototype = {
  init: function() {
    this.parentCheckBox = document.getElementsByName("check");
    this.showOnCheck();
  },

  showOnCheck: function() {
    var obj = this;
    for (var i = 0; i < obj.parentCheckBox.length; i++) {
      this.parentCheckBox[i].onclick = function() {
        if (this.checked) {
          this.parentNode.getElementsByTagName("ul")[0].style.display = "block";
          this.scrollIntoView(true);
          this.childCheckBoxes = this.parentNode.getElementsByClassName("childCheck");
          obj.changeStateForCheckboxes(this.childCheckBoxes, true);
        }

        else {
          this.parentNode.getElementsByTagName("ul")[0].style.display = "none";
          obj.changeStateForCheckboxes(this.childCheckBoxes, false);
        }
      }
    }
  },

  changeStateForCheckboxes: function(checkBoxes, state) {
    for (var i = 0; i < checkBoxes.length; i++)
      checkBoxes[i].checked = state;
  }
}

var object = new MenuItems();