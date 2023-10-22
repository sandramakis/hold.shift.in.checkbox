"use strict";
// ** STARTING VARTIABLES

// CHECKBOX
const checkboxes = document.querySelectorAll(".item input[type='checkbox']");

// LABELS
const label = document.querySelectorAll("label");

// create last checked variable
let lastChecked;

// handleEvent fctn
function handleEvent(e) {
  let isBetween = false;

  // If the checkbox is checked and shift key is on
  if (this.checked && e.shiftKey) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        isBetween = !isBetween;
        console.log("Starting to check them in between");
      }

      if (isBetween) {
        checkbox.checked = true;
        console.log(checkbox);
      }
    });
  }

  // loop through each checkbox, if checking, toggle classlist(.checked)
  if (this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkbox.parentElement.classList.add("checked");
      }
    });
  } else {
    this.parentElement.classList.remove("checked");
  }

  // make the last checked box = lastChecked
  lastChecked = this;
}

// click event for each checkbox
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleEvent)
);
