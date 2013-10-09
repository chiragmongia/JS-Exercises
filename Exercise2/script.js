var checkBoxes = document.getElementsByName("check");
function checkAll() {
    for(var i=0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = true;
    }
}

function checkNone() {
    for(var i=0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = false;
    }
}