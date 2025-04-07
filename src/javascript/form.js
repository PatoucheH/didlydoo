/** @description - Import the fucntions we needed for start form module */
import { createHeader } from "./general-utils/header.js";
import { errorOrCreateEvent } from "./form-function/create-event-or-display-error.js";

/** @const {HTMLElement} addDate - Get element who has add-date like id */
const addDate = document.getElementById("add-date");

/** @description - Call createHeader function */
createHeader();

/** @description - Add an event listener to addDate element */
addDate.addEventListener("click", (e) => {
  /** @description - Add adjacent content for addDate element */
  addDate.insertAdjacentHTML(
    "beforebegin",
    `<label for="date-event">Enter the date : </label>
        <input type="date" class="date" required />`
  );
});

/** @const {HTMLElement} formBtn - Get element who has submit like id */
const formBtn = document.getElementById("submit");

/** @description - Add an event listener to formBtn element */
formBtn.addEventListener("click", (e) => {
  /** @description - Call errorOrCreateEvent() function */
  errorOrCreateEvent();
});
