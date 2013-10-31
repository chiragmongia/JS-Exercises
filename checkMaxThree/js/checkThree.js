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
          obj.errorStatement = "Only " + obj.maxDays + " days can be selected. You have alerady selected ";
          for(var j = 0; j < (obj.selectedDays.length-1); j++) {
            obj.errorStatement = obj.errorStatement + obj.selectedDays[j].value + ", "; 
          }
          obj.errorStatement = obj.errorStatement.substring(0, obj.errorStatement.length - 2); 
          obj.errorStatement = obj.errorStatement + " and " + obj.selectedDays[j].value;
          alert(obj.errorStatement);
        }
      }
    }
  },

  checkNone: function() {
    var obj = this;
    obj.none.onclick = function() {
      for(var i = 0; i < obj.selectedDays.length; i++) {
        if (this.checked) {
          obj.selectedDays[i].checked = false;
        }
      }
      obj.selectedDays = [];
    }
  }
}

var checkedDays = new checkDays();