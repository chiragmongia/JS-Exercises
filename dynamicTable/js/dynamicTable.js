var table = function() {
  this.init();
}

table.prototype = {
  init: function() {
    this.counter = 1;
    this.table = document.getElementById("table");
    this.addRowbutton = document.getElementById("addRow");
    this.bindAddRowEvent();
  },

  bindAddRowEvent: function() {
    var obj = this;
    obj.addRowbutton.onclick = function() {
      obj.addRow();
    }
  },

  editRow: function(rowElement) {
    var obj = this;
    rowElement.cells[0].removeChild(rowElement.cells[0].childNodes[0])
    rowElement.cells[1].removeChild(rowElement.cells[1].childNodes[0])
    rowElement.cells[2].removeChild(rowElement.cells[2].childNodes[0])
    rowElement.cells[2].removeChild(rowElement.cells[2].childNodes[0])

    this.newfirstnameElement = document.createElement("input");
    this.newfirstnameElement.type = "text";
    this.newfirstnameElement.setAttribute("class", "name");
    rowElement.cells[0].appendChild(this.newfirstnameElement);

    this.newemailElement = document.createElement("input");
    this.newemailElement.type = "email";
    this.newemailElement.setAttribute("class", "email");
    rowElement.cells[1].appendChild(this.newemailElement);

    this.newsaveButtonElement = document.createElement("input");
    this.newsaveButtonElement.type = "button";
    this.newsaveButtonElement.value = "save";
    this.newsaveButtonElement.setAttribute("rowid", parseInt(rowElement.id));
    this.newsaveButtonElement.onclick = function() {
      obj.save(this);
    }
    rowElement.cells[2].appendChild(this.newsaveButtonElement);
  },

  removeRow: function(rowElement) {
    this.table.deleteRow(parseInt(rowElement.id));
  },

  save: function(saveButton) {
    this.rowElement = document.getElementById(saveButton.getAttribute("rowid"));
    this.fnameDiv = document.createElement('div');
    this.emailDiv = document.createElement('div');
    var obj = this;

    this.editLink = document.createElement("a");
    this.editLinkText = document.createTextNode("Edit");
    this.editLink.appendChild(this.editLinkText);
    this.editLink.name = "edit";
    this.editLink.onclick = function() {
      obj.editRow(obj.rowElement);
    }

    this.deleteLink = document.createElement("a");
    this.deleteLinkText = document.createTextNode("Delete");
    this.deleteLink.appendChild(this.deleteLinkText);
    this.deleteLink.name = "delete";
    this.deleteLink.onclick = function() {
      obj.removeRow(obj.rowElement);
    }

    this.fname = this.rowElement.getElementsByClassName("name")[0];
    this.email = this.rowElement.getElementsByClassName("email")[0];
    
    if (this.fname.value == "")
      alert("Name can't be blank");
    else if (this.email.value == "")
      alert("Email can't be blank");
    else {
      this.fnameDiv.innerHTML = this.fname.value;
      this.emailDiv.innerHTML = this.email.value;
      // this.rowElement.cells[0].replaceChild(this.fnameDiv, obj.fname);
      // this.rowElement.cells[1].replaceChild(this.emailDiv, obj.email);
      this.rowElement.cells[2].replaceChild(obj.editLink, saveButton);
      this.rowElement.cells[2].appendChild(obj.deleteLink);
    }
  },

  addRow: function() {
    var obj = this;
    this.rowCount = obj.table.rows.length;
    this.row = obj.table.insertRow(this.rowCount);
    this.row.id = obj.counter;
    
    this.cell1 = this.row.insertCell(0);
    this.firstnameElement = document.createElement("input");
    this.firstnameElement.type = "text";
    this.firstnameElement.setAttribute("class", "name");
    this.cell1.appendChild(this.firstnameElement);

    this.cell2 = this.row.insertCell(1);
    this.emailElement = document.createElement("input");
    this.emailElement.type = "email";
    this.emailElement.setAttribute("class", "email");
    this.cell2.appendChild(this.emailElement);

    this.cell3 = this.row.insertCell(2);
    this.saveButtonElement = document.createElement("input");
    this.saveButtonElement.type = "button";
    this.saveButtonElement.value = "save";
    this.saveButtonElement.setAttribute("rowid", obj.counter);
    this.saveButtonElement.onclick = function() {
      obj.save(this);
    }
    this.cell3.appendChild(this.saveButtonElement);
    obj.counter++;
  },
}

var table = new table();