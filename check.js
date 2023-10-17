"use strict";
// starting variables

// CHECKBOX
const checkboxes = document.querySelectorAll(".item input[type='checkbox']");

// LABELS
const label = document.querySelectorAll("label");
const items = document.querySelectorAll(".item");

// create last checked variable
let lastChecked;

// handleEvent fctn
function handleEvent(e) {
  let isBetween = false;

  const inpArr = [];
  inpArr.push(...checkboxes);

  // Get index of the current input to toggle .changed
  // const getIndex = inpArr.indexOf(this);
  // items[getIndex].classList.toggle("checked");

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

  // update lastChecked to the current box checked
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleEvent)
);
