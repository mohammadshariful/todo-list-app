"use strict";
// select all elements
const inputField = document.querySelector("#text-field");
const AddButton = document.querySelector("#add-button");
const tableContainer = document.querySelector(".table-container");
// declear global variables
let count = 0;
// functionalities
AddButton.addEventListener("click", function (event) {
  event.preventDefault();

  const inputNum = parseInt(inputField.value);

  // conditional checking
  if (inputField.value === "") {
    alert("Please Enter a string value");
  } else if (!Number.isNaN(inputNum)) {
    alert("Please Enter a string value");
  } else {
    count++;
    //   clear All button visible
    const showBtn = document.querySelector(".btn-outline-danger");
    showBtn.style.visibility = "visible";
    //   create elements
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
               <th>${count}</th>
              <td>${inputField.value}</td>
              <td class = "d-flex justify-content-center flex-column flex-md-row">
                <button class="btn btn-success">Done</button>
                <button class="btn btn-danger">Delete</button>
                <button class="btn btn-info">Edit</button>
              </td>
      `;

    tableContainer.appendChild(tableRow);
    inputField.value = "";

    // done button funtionalites
    const doneBtn = document.querySelectorAll(".btn-success");
    for (const buttons of doneBtn) {
      buttons.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.textDecoration = "line-through";
      });
    }

    // delete button funtionalites
    const deleteBtn = document.querySelectorAll(".btn-danger");
    for (const buttons of deleteBtn) {
      buttons.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.remove();
      });
      // edit info btn
      const editBtn = document.querySelectorAll(".btn-info");
      for (const edit of editBtn) {
        edit.addEventListener("click", function (e) {
          console.log(e.target);
        });
      }

      // added show btn
      showBtn.addEventListener("click", function (e) {
        tableRow.remove();
      });
    }
  }
});
