var table = document.getElementById("table");

function addRow() {
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  var cell1 = row.insertCell(0);
  cell1.innerHTML = "<input type=\"text\" id=\"name\">"

  var cell2 = row.insertCell(1);
  cell2.innerHTML = "<input type=\"email\" id=\"email\">"

  var cell3 = row.insertCell(2);
  cell3.innerHTML = "<input type=\"button\" value=\"save\" onclick=\"save(" + row.rowIndex + ")\">"
}

function save(no) {
  var fname = document.getElementById("name");
  var email = document.getElementById("email");

  if (fname.value == "")
    alert("Name can't be blank");
  else if (email.value == "")
    alert("Email can't be blank")
  else {
    table.rows[no].cells[0].innerHTML = fname.value;
    table.rows[no].cells[1].innerHTML = email.value;
    table.rows[no].cells[2].innerHTML = "<a name=\"edit\" onclick=\"editRow(this)\">Edit</a> | <a name=\"del\" onclick=\"removeRow(this)\">Delete</a> "
  }
}

function editRow(currentRow) {
  var fname = document.getElementById("name");
  var email = document.getElementById("email");

  var row_no = currentRow.parentNode.parentNode.rowIndex;
  var row = table.rows[row_no];

  row.cells[0].innerHTML = "<input type=\"text\" id=\"name\">";
  row.cells[1].innerHTML = "<input type=\"email\" id=\"email\">";
  row.cells[2].innerHTML = "<input type=\"button\" value=\"save\" onclick=\"save(" + row.rowIndex + ")\">";
}

function removeRow(currentRow) {
  table.deleteRow(currentRow.parentNode.parentNode.rowIndex);
}