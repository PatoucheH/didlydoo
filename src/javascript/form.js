import { createHeader } from "./module-json.js/header.js";
import { getInputValue } from "./module-json.js/get-input-value.js";

// button to add a input date
const addDate = document.getElementById("add-date");

// form for an event
const form = document.getElementById("my-form");

createHeader();

/**
 * Add an input date to add another date to the event
 */
addDate.addEventListener("click", (e) => {
  addDate.insertAdjacentHTML(
    "beforebegin",
    `<label for="date-event">Enter the date : </label>
        <input type="date" class="date" required />`
  );
});

// button submit of the form
const formBtn = document.getElementById("submit");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(getInputValue());
  console.log("📤 Données envoyées :", JSON.stringify(getInputValue(), null, 2));

  fetch("http://localhost:3000/api/events/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(getInputValue()),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log("Succès:", data);
    })
    .catch((error) => {
      console.error("Erreur:", error);
    });
});
