/**
 * Created by Dongho on 2017. 2. 13..
 */
'use strict';

(function() {

    document.getElementById("btn_exam").addEventListener("click", createLiWithCheckExam, false);

})();

function setButtonText(total, incomplete, complete) {

    var totalText = document.querySelector(".total");
    var incompleteText = document.querySelector(".incomplete");
    var completeText = document.querySelector(".complete");

    totalText.textContent = "total: " + total;
    incompleteText.textContent = "incomplete: " + incomplete;
    completeText.textContent = "complete: " + complete;
}

function addTodo() {

    var totalText = document.querySelector(".total");
    var incompleteText = document.querySelector(".incomplete");
    var completeText = document.querySelector(".complete");

    totalText.value = Number(totalText.value) + 1;
    incompleteText.value = Number(incompleteText.value) + 1;
    completeText.value = Number(totalText.value) - Number(incompleteText.value);

    setButtonText(totalText.value, incompleteText.value, completeText.value);
}

function setTodo() {

    var totalText = document.querySelector(".total");
    var incompleteText = document.querySelector(".incomplete");
    var completeText = document.querySelector(".complete");

    incompleteText.value = Number(incompleteText.value) - 1;
    completeText.value = Number(totalText.value) - Number(incompleteText.value);

    setButtonText(totalText.value, incompleteText.value, completeText.value);
}

function clearTodo() {

    var totalText = document.querySelector(".total");
    var incompleteText = document.querySelector(".incomplete");
    var completeText = document.querySelector(".complete");

    incompleteText.value = Number(incompleteText.value) + 1;
    completeText.value = Number(totalText.value) - Number(incompleteText.value);

    setButtonText(totalText.value, incompleteText.value, completeText.value);
}

function deleteTodo(IsChecked) {

    var totalText = document.querySelector(".total");
    var incompleteText = document.querySelector(".incomplete");
    var completeText = document.querySelector(".complete");

    totalText.value = Number(totalText.value) - 1;

    if (!IsChecked) {
        incompleteText.value = Number(incompleteText.value) - 1;
    }

    completeText.value = Number(totalText.value) - Number(incompleteText.value);

    setButtonText(totalText.value, incompleteText.value, completeText.value);
}

function btnExam() {

    var input = document.getElementById("myInput");
    alert(input.value);
}

function createLiExam() {

    var input = document.getElementById("myInput");

    var newli = document.createElement("li");
    var newText = document.createTextNode(input.value);

    newli.appendChild(newText);

    document.body.appendChild(newli);
}

function createLiWithCheckExam() {

    var input = document.getElementById("myInput");

    var newDiv = document.createElement("div");

    var newli = document.createElement("li");
    var newText = document.createTextNode(input.value);
    var newCheck = document.createElement("input");

    var delButton = document.createElement("button");

    delButton.textContent = "delete";

    newCheck.className = "checkbox";
    newCheck.id = "check_box";
    newCheck.type = "checkbox";

    newli.appendChild(newCheck);
    newli.appendChild(newText);
    newli.appendChild(delButton);
    newDiv.appendChild(newli);

    delButton.addEventListener("click", function(eventObject) {

        eventObject.stopPropagation();

        deleteTodo(this.parentNode.childNodes[0].checked);
        var length = this.parentNode.childNodes.length;

        for (var i = 0; i < length; i++) {

            this.parentNode.removeChild(this.parentNode.childNodes[0])
        }

        document.body.removeChild(newDiv);
    });

    newCheck.addEventListener("click", function(eventObject) {

        eventObject.stopPropagation();
        drawTextDecoration(this, newDiv);

        //eventObject.preventDefault();
        //this.checked = !this.checked;

    }, false);

    newli.addEventListener("click", function(eventObject) {

        newCheck.checked = !newCheck.checked;

        drawTextDecoration(newCheck, this);

    }, false);

    addTodo();
    document.body.appendChild(newDiv);
}

function drawTextDecoration(checkbtn, elem) {

    if (checkbtn.checked) {
        elem.style.textDecoration = "line-through";
        setTodo();
    }
    else {
        elem.style.textDecoration = "";
        clearTodo();
    }
}
