var MenuItems = function(parentElement) {
  this.init(parentElement);
};

MenuItems.prototype = {
  init: function(parentElement) {
    this.childCheckBoxes = parentElement.parentNode.getElementsByClassName("childCheck");
    this.childBlock = parentElement.parentNode.getElementsByTagName("ul");
    this.showChildOnParentCheck(parentElement);
  },

  showChildOnParentCheck: function(parentElement) {
    var obj = this;
    parentElement.onclick = function() {
      this.checked ? obj.childBlock[0].style.display = "block" : obj.childBlock[0].style.display = "none";
      this.scrollIntoView(true);
      obj.changeStateForCheckboxes(obj.childCheckBoxes, this.checked);
    }
  },

  changeStateForCheckboxes: function(checkBoxes, state) {
    for (var i = 0; i < checkBoxes.length; i++)
      checkBoxes[i].checked = state;
  }
}

window.onload = function() {
  var parentCheck = document.getElementsByClassName("parentCheck");
  for (var i = 0; i < parentCheck.length; i++) {
    var obj = new MenuItems(parentCheck[i]);
  }
}