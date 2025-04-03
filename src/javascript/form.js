import { createHeader } from "./module-json.js/header.js";
import { getInputValue } from "./module-json.js/get-input-value.js";

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
  try {
    fetch("http://localhost:3000/api/events/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getInputValue()),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Succes:", data);

        localStorage.setItem("event", data.id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (e) {
    console.log(e);
  }
});
