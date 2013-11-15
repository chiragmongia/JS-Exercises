var CountrySelectBox = function() {
  this.init();
}

CountrySelectBox.prototype = {
  init: function() {
    this.leftSelectBox = document.getElementById("leftBox");
    this.rightSelectBox = document.getElementById("rightBox");
    this.addBtn = document.getElementById("add");
    this.removeBtn = document.getElementById("remove");
    this.bindEventwithButtons();
  },

  bindEventwithButtons: function() {
    var obj = this;
    obj.addBtn.onclick = function() {
      obj.moveFromOneBoxToAnother(obj.leftSelectBox, obj.rightSelectBox);
    }

    obj.removeBtn.onclick = function() {
      obj.moveFromOneBoxToAnother(obj.rightSelectBox, obj.leftSelectBox);
    }
  },

  moveFromOneBoxToAnother: function(sourceSelectBox, destinationSelectBox) {
    while( sourceSelectBox.selectedOptions.length != 0 )
      destinationSelectBox.appendChild(sourceSelectBox.selectedOptions[0]);
}

var countrySelectBox = new CountrySelectBox();