var parentCheckBox = document.getElementsByName("check"),
    childCheckBoxes = document.getElementsByTagName("ul");

function showOnCheck() {
  for(var i=0; i < parentCheckBox.length; i++) {
    if (parentCheckBox[i].checked) {
      childCheckBoxes[i].style.display = "block";
      parentCheckBox[i].scrollIntoView(true);
    }
    else {
      childCheckBoxes[i].style.display = "none";
      var checkBox = childCheckBoxes[i].getElementsByTagName("input");
      for(var j=0; j < checkBox.length; j++) {
        checkBox[j].checked = false;
      }
    }
  }
}