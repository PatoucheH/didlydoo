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

const formBtn = document.getElementById("submit");

formBtn.addEventListener("click", (e) => {
  errorOrCreateEvent();
});
