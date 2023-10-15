"use strict";
// starting conditions
let isChecked = false;

// INPUTS
const inputs = document.querySelectorAll(".item input");
const inpArr = [];
inpArr.push(...inputs);

// LABELS
const label = document.querySelectorAll("label");
const labArr = [];
labArr.push(...label);

inputs.forEach((inp) => {
  inp.addEventListener("change", () => {
    //  Get index of the current input to adjust the exact label
    const getIndex = inpArr.indexOf(inp);
    console.log(getIndex);

    // Toggle .checked class once the input is changed
    labArr[getIndex].classList.toggle("checked");

    // When isChecked is true or false
    if (inp.checked) {
      isChecked = false;
      console.log(`${inp.id} checked 🤜`);
    } else {
      console.log(`${inp.id} unchecked  👎`);
      isChecked = true;
    }
  });
});
