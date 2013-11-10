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
      obj.parentCheckBox[i].onclick = function() {
        if (this.checked) {
          this.len = this.parentNode.childElementCount;
          this.parentNode.children[this.len-1].style.display = "block";
          this.scrollIntoView(true);
          this.childCheckBoxes = this.parentNode.children[this.len-1].getElementsByTagName("input");
          for (var j = 0; j < this.childCheckBoxes.length; j++)
            this.childCheckBoxes[j].checked = true;
        }

        else {
          this.parentNode.children[this.len-1].style.display = "none";
          for (var j = 0; j < this.childCheckBoxes.length; j++)
            this.childCheckBoxes[j].checked = false;
        }
      }
    }
  }
}

var object = new MenuItems();