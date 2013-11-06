var countrySelectBox = function() {
  this.init();
}

countrySelectBox.prototype = {
  init: function() {
    this.leftSelectBox = document.getElementById("leftBox");
    this.rightSelectBox = document.getElementById("rightBox");
    this.addBtn = document.getElementById("add");
    this.removeBtn = document.getElementById("remove");
    this.selectedCountry = [];
    this.moveFromOneBoxToAnother(this.addBtn, this.leftSelectBox, this.rightSelectBox);
    this.moveFromOneBoxToAnother(this.removeBtn, this.rightSelectBox, this.leftSelectBox);
  },

  moveFromOneBoxToAnother: function(buttonClicked, sourceSelectBox, destinationSelectBox) {
    var obj = this;
    buttonClicked.onclick = function() {
      obj.selectedCountry = [];
      for (var i = 0; i < sourceSelectBox.options.length; i++) {
        if (sourceSelectBox.options[i].selected)
          obj.selectedCountry.push(sourceSelectBox.options[i]);
      }

      for (var j=0; j < obj.selectedCountry.length; j++)
        destinationSelectBox.appendChild(obj.selectedCountry[j]);
    }
  }
}

var countrySelectBox = new countrySelectBox();