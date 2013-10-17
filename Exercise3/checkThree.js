var selectedDays = [],
    maxDays = 3,
    errorStatement = "",
    days = document.getElementsByClassName("days"),
    none = document.getElementById("none");

for (var i=0; i < days.length; i++) {
     days[i].onclick = function() {
      none.checked = false;
      if (this.checked) {
        selectedDays.push(this);
      }

      else if(this.checked == false) {
        selectedDays.splice(selectedDays.indexOf(this), 1);
      }

      if (selectedDays.length > maxDays) {
        selectedDays.pop();
        this.checked = false;
        errorStatement = "Only 3 days can be selected. You have already selected " + selectedDays[0].value + " , " + selectedDays[1].value + " and " + selectedDays[2].value;
        alert(errorStatement);
      }
    }
 }

var checkNone = function() {
  for(var i=0; i < days.length; i++) {
    if (none.checked == true) {
      selectedDays = [];
      days[i].checked = false;
    }
  }
}