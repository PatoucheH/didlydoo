import { createHeader } from "./general-utils/header.js";
import { errorOrCreateEvent } from "./form-function/create-event-or-display-error.js";

// button to add a input date
const addDate = document.getElementById("add-date");

// form for an event
const form = document.getElementById("my-form");

createHeader();

/**
 * @description -- Add an input date to add another date to the event
 */

addDate.addEventListener("click", (e) => {
  addDate.insertAdjacentHTML(
    "beforebegin",
    `<label for="date-event">Enter the date : </label>
        <input type="date" class="date" required />`
  );
});
/**
 * Select the button to validate the form 
 */
const formBtn = document.getElementById("submit");

/**
 * When the form is send create an error if the inputs are not available and send the form if the input are available
 */
formBtn.addEventListener("click", (e) => {
  errorOrCreateEvent();
});
