import { getInfo } from "../general-utils/get-json-info.js";
import { modifyEvent } from "./modify-event.js";
import { addDate } from "../general-utils/add-date.js";
import { createHeader } from "./create-header-tabel.js";
import { getDates } from "../general-utils/get-dates.js";
import { createBody } from "./create-body-tabel.js";
import { deleteEvent } from "./delete-event.js";
import { createFormAttendances } from "./create-form-attendances.js";
import { attendancesFormEvent } from "./attendance-form-event.js";

/**
 * 
 * @param {string} idEvent Id of the event to display
 * @description Display all the informations of an event choose by the id enter 
 */
export async function displayEventById(idEvent) {
  let id = idEvent;
  let event = await getInfo(`/api/events/${id}`);
  let container = document.getElementById("event");
  container.innerHTML = `
    <section id="section">
      <h2>${event.name}</h2>
      <p>${event.description}</p>
      <p>by ${event.author}</p>
    </section>
    <div id="attendance-grid"></div>
  `;

  let tabel = document.getElementById("attendance-grid");
  let dates = event.dates;

  let datesArray = getDates(dates);
  createHeader(datesArray, tabel);

  let attendances = await getInfo("/api/attendees/");
  createBody(attendances, datesArray, tabel, id);

  const deleteBtn = document.createElement("button");
  deleteBtn.id = "del-btn";
  deleteBtn.textContent = "Delete Event";
  container.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", (e) => {
    deleteEvent(id);
    location.href = "../../../index.html";
  });

  const modifyBtn = document.createElement("button");
  modifyBtn.id = "modify-btn";
  modifyBtn.textContent = "Update Event";
  container.appendChild(modifyBtn);
  modifyBtn.addEventListener("click", (e) => {
    const divInput = document.getElementById("div-input");
    if (divInput.style.display === "none") {
      divInput.style.display = "block";
    } else if ((divInput.style.display = "block")) {
      divInput.style.display = "none";
    }
  });

  const acceptModify = document.getElementById("accept-modify-btn");
  acceptModify.addEventListener("click", (e) => {
    modifyEvent(id);
    location.href = "./event.html";
  });

  createFormAttendances(datesArray, container);

  let submitForm = document.getElementById("new-attendance-submit");
  submitForm.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.getElementById("input-new-attendee");
    const divParticipants = document.getElementById("attendance-grid");
    const participants = divParticipants.querySelectorAll(".participant");
    let participantsArray = [];
    participants.forEach((el) => {
      participantsArray.push(el.innerHTML);
    });
    console.log(participantsArray);
    console.log(id);

    if (!participantsArray.includes(input.value)) {
      attendancesFormEvent(id, "POST");
    } else {
      attendancesFormEvent(id, "PATCH");
    }
    location.href = "./event.html";
  });

  const divAddDate = document.createElement("div");
  divAddDate.id = "div-add-date";
  divAddDate.innerHTML = `<input type="date" class="add-date-input">`;
  const addDateEvent = document.createElement("button");
  addDateEvent.textContent = "Add a date";
  addDateEvent.id = "add-date-btn";
  divAddDate.appendChild(addDateEvent);
  const objDate = {};
  const dateToAdd = [];

  container.appendChild(divAddDate);
  addDateEvent.addEventListener("click", (e) => {
    const inputDateToAdd = document.querySelector(".add-date-input");
    dateToAdd.push(inputDateToAdd.value);
    objDate.dates = dateToAdd;
    addDate(id, objDate);
    location.reload();
    console.log(dateToAdd);
    addDate(id, dateToAdd);
  });
}
