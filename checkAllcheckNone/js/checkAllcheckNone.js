function colors() {
  this.init();
}

colors.prototype = {
  init: function() {
    this.checkBoxes = document.getElementsByName("check");
    this.BindEventForCheckAll();
    this.BindEventForCheckNone();
  },

  changeStateForCheckboxes: function(state) {
    for(var i = 0; i < this.checkBoxes.length; i++)
      this.checkBoxes[i].checked = state;
  },

  BindEventForCheckAll: function() {
    var obj = this;
    var checkAllbtn = document.getElementById("all");
    checkAllbtn.onclick = function() {
      obj.changeStateForCheckboxes(true);
    }
  },

  BindEventForCheckNone: function() {
    var obj = this;
    var checkNoneBtn = document.getElementById("none");
    checkNoneBtn.onclick = function() {
      obj.changeStateForCheckboxes(false);
    }
  }
}

var color = new colors;