var MAX_COLUMNS = 3;
var Table = function() {
  this.init();
}

Table.prototype = {
  init: function() {
    this.table = document.getElementById("dynamicTable");
    this.bindEvents();
  },

  bindEvents: function() {
    var obj = this;
    this.addBtn = document.getElementById("addRow");
    this.addBtn.onclick = function() {
      obj.addRow();
    }
  },

  deleteRow: function() {
    var row = this.parentNode.parentNode;
    document.getElementById("dynamicTable").deleteRow(row.rowIndex);
  },

  editRow: function() {
    var row = this.parentNode.parentNode, 
        i     = 0,
        cell0,
        cell1,
        cell2;

    cell0 = table.createInputElement(cell0);
    cell0.value = row.cells[0].firstChild.nodeValue;
    
    cell1 = table.createInputElement(cell1);
    cell1.value = row.cells[1].firstChild.nodeValue;
    
    cell2 = table.createInputElement(cell2);
    cell2.type    = "button";     // Overriding cell2 type from "text" to "button"
    cell2.value   = "save";
    cell2.onclick = table.save;
    
    for (i = MAX_COLUMNS-1; i >= 0; i--) {
      row.deleteCell(i); 
    }
    
    for (i = 0; i <= MAX_COLUMNS-1; i++) { 
      row.insertCell(i);
    }
    
    row.cells[0].appendChild(cell0);
    row.cells[1].appendChild(cell1);
    row.cells[2].appendChild(cell2);
  },

  createAnchorTag: function(element) {
    element = document.createElement("a");
    element.href = "#";
    return element;
  },

  save: function() {
    var i     = 0,
        row   = this.parentNode.parentNode,
        name  = row.cells[0].getElementsByTagName("input")[0].value,
        email = row.cells[1].getElementsByTagName("input")[0].value,
        edit  = table.createAnchorTag(edit),
        del   = table.createAnchorTag(del);
    
    edit.appendChild(document.createTextNode("Edit"));
    del.appendChild(document.createTextNode("Delete"));
    edit.onclick = table.editRow;
    del.onclick  = table.deleteRow;
    
    for (i = MAX_COLUMNS-1; i >= 0; i--) { 
      row.deleteCell(i); 
    }
    
    for (i = 0; i <= MAX_COLUMNS-1; i++) { 
      row.insertCell(i); 
    }

    inputNameValue = document.createTextNode(name);
    row.cells[0].appendChild(inputNameValue);
    inputEmailValue = document.createTextNode(email);
    row.cells[1].appendChild(inputEmailValue);
    
    row.cells[2].appendChild(edit);
    row.cells[2].appendChild(document.createTextNode(" / "));
    row.cells[2].appendChild(del);
  },

  addRow: function() {
    var row = this.table.rows.length,
        cell0,
        cell1,
        cell2,
        i = 0;
    
    cell0 = this.createInputElement(cell0);
    cell1 = this.createInputElement(cell1);
    cell2 = this.createInputElement(cell2);
    cell2.type    = "button";     // Overriding cell2 type from "text" to "button"
    cell2.value   = "save";
    cell2.onclick = this.save;
    
    this.table.insertRow(row);
    for (i = 0; i < 3; i++) { 
      this.table.rows[row].insertCell(i); 
    }

    this.table.rows[row].cells[0].appendChild(cell0);
    this.table.rows[row].cells[1].appendChild(cell1);
    this.table.rows[row].cells[2].appendChild(cell2);
    },

  createInputElement: function(element) {
    element = document.createElement("input");
    element.type = "text";
    return element;
  }

}

var table = new Table();