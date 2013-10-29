var checkDays = function() {
  this.init();
};

checkDays.prototype = {
  init: function() {
    // initialize vars
    this.selectedDays = [];
    this.maxDays = 3;
    this.errorStatement = "";
    this.days = document.getElementsByClassName("days");
    this.none = document.getElementById("none");

    //invoke methods
    this.checkThree();
    this.checkNone();
  },

  checkThree: function() {
    var obj = this;
    for (var i = 0; i < obj.days.length; i++) {
      obj.days[i].onclick = function() {
        none.checked = false;
        if (this.checked) {
          obj.selectedDays.push(this);
        }

        else if (this.checked == false) {
          obj.selectedDays.splice(obj.selectedDays.indexOf(this), 1);
        }

        if (obj.selectedDays.length > obj.maxDays) {
          obj.selectedDays.pop();
          this.checked = false;
          obj.errorStatement = "Only 3 days can be selected. You have already selected " + obj.selectedDays[0].value + " , " + obj.selectedDays[1].value + " and " + obj.selectedDays[2].value;
          alert(obj.errorStatement);
        }
      }
    }
  },

  checkNone: function() {
    var obj = this;
    obj.none.onclick = function() {
      for(var i = 0; i < obj.days.length; i++) {
        if (obj.none.checked) {
          obj.selectedDays = [];
          obj.days[i].checked = false;
        }
      }
    }
  }
}

var checkedDays = new checkDays();