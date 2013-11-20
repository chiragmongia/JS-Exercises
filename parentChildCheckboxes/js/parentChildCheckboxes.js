var MenuItems = function(parentElement) {
  this.init(parentElement);
};

MenuItems.prototype = {
  init: function(parentElement) {
    this.childCheckBoxes = parentElement.parentNode.getElementsByClassName("childCheck");
    this.childBlock = parentElement.parentNode.getElementsByTagName("ul")[0];
    this.showChildOnParentCheck(parentElement);
  },

  showChildOnParentCheck: function(parentElement) {
    var obj = this;
    parentElement.onclick = function() {
      obj.childBlock.style.display = this.checked ?  "block" : "none";
      this.scrollIntoView(true);
      obj.changeStateForCheckboxes(obj.childCheckBoxes, this.checked);
    }
  },

  changeStateForCheckboxes: function(checkBoxes, state) {
    for (var i = 0; i < checkBoxes.length; i++)
      checkBoxes[i].checked = state;
  }
}

MenuItems.objectCollection = []; //Class variable to store collection of objects

window.onload = function() {
  var parentCheck = document.getElementsByClassName("parentCheck");
  for (var i = 0; i < parentCheck.length; i++) {
    MenuItems.objectCollection.push(new MenuItems(parentCheck[i]));
  }
}