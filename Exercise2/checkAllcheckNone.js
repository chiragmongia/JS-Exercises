var checkBoxes = document.getElementsByName("check");
var colors = function() {
  check = function(checkVal) {
    for(var i=0; i < checkBoxes.length; i++)
      checkBoxes[i].checked = checkVal;
  }
}

var color = new colors;