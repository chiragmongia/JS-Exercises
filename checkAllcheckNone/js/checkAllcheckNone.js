function colors() {
  this.checkBoxes = document.getElementsByName("check");
  this.check = function(checkVal) {
    for(var i = 0; i < this.checkBoxes.length; i++)
      this.checkBoxes[i].checked = checkVal;
  };

  this.checkAll = function() {
    var obj = this;
    this.checkAllbtn = document.getElementById("all");
    this.checkAllbtn.onclick = function() {
      obj.check(true);
    }
  };

  this.checkNone = function() {
    var obj = this;
    this.checkNoneBtn = document.getElementById("none");
    this.checkNoneBtn.onclick = function() {
      obj.check(false);
    }
  };
}

var color = new colors;
color.check();
color.checkAll();
color.checkNone();