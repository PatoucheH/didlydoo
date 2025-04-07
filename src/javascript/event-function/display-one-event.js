/** @description - Import all the modules we needed for this script */
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
  /** @var {string} id - Get the id of the event in displayEventById fucntion parameter */
  let id = idEvent;
  /** @var {JSON} event - Get the event with the id choosen using asyncronous event*/
  let event = await getInfo(`/api/events/${id}`);
  /** @var {HTMLElement} container - Get the element with id="event" */
  let container = document.getElementById("event");
  /** @description - Add content of container element */
  container.innerHTML = `
    <section id="section">
      <h2>${event.name}</h2>            <!-- Using name value of the response -->
      <p>${event.description}</p>       <!-- Using description value of the response -->
      <p>by ${event.author}</p>         <!-- Using author value of the response -->
    </section>

    <div id="attendance-grid"></div>    <!-- Create an empty div with an id -->
  `;
  /** @var {HTMLElement} tabel - Get the element with id="attendance-grid" */
  let tabel = document.getElementById("attendance-grid");
  /** @var {Array<Object>} dates - Array containing all date objects from the event response */
  let dates = event.dates;
  /** @var {Array<string>} datesArray - Array containing all date strings extracted from the event */
  let datesArray = getDates(dates);
  /** @description - Call createHeader function with datesArray and tabel like params */
  createHeader(datesArray, tabel);
  /** @var {JSON} event - Get the attendances using asyncronous event*/
  let attendances = await getInfo("/api/attendees/");
  /** @description - Call createBody function with attendances, datesArray and tabel like params */
  createBody(attendances, datesArray, tabel, id);

  /** @const {HTMLElement} deleteBtn - Create a button element */
  const deleteBtn = document.createElement("button");
  /** @description - Add an id for deleteBtn element */
  deleteBtn.id = "del-btn";
  /** @description - Add content of deleteBtn element */
  deleteBtn.textContent = "Delete Event";
  /** @description - Add deleteBtn element to container element */
  container.appendChild(deleteBtn);

  /** @description - Add an event listener to deleteBtn element */
  deleteBtn.addEventListener("click", (e) => {
    /** @description - Call deleteEvent function with id like params */
    deleteEvent(id);
    /** @description - Redirect to index.html page */
    location.href = "../../../index.html";
  });

  /** @const {HTMLElement} modifyBtn - Create a button element */
  const modifyBtn = document.createElement("button");
  /** @description - Add an id for modifyBtn element */
  modifyBtn.id = "modify-btn";
  /** @description - Add content of modifyBtn element */
  modifyBtn.textContent = "Update Event";
  /** @description - Add modifyBtn element to container element */
  container.appendChild(modifyBtn);



  /** @description - Add an event listener to modifyBtn element */
  modifyBtn.addEventListener("click", (e) => {
    /** @const {HTMLElement} divInput - Get the element with id="div-input" */
    const divInput = document.getElementById("div-input");
    /** @description - Determine the display style for divInput element */
    if (divInput.style.display === "none") {
      divInput.style.display = "block"; // if display non turn to block
    } else if ((divInput.style.display = "block")) {
      divInput.style.display = "none"; // if display block turn to none
    }
  });

  /** @const {HTMLElement} acceptModify - Get the element with id="accept-modify-btn" */
  const acceptModify = document.getElementById("accept-modify-btn");

  /** @description - Add an event listener to acceptModify element */
  acceptModify.addEventListener("click", (e) => {
    /** @description - Call modifyEvent function with idlik params */
    modifyEvent(id);
    /** @description - Redirect to event.html page */
    location.href = "./event.html";
  });

  /** @description - call createFormAttendances with datesArray & container like params */
  createFormAttendances(datesArray, container);
  /** @var {HTMLElement} submitForm - Get the element with id="new-attendance-submit" */
  let submitForm = document.getElementById("new-attendance-submit");

  /** @description - Add an event listener to submitForm element */
  submitForm.addEventListener("click", (e) => {
    /** @description - Prevent to reload html page */
    e.preventDefault();

    /** @var {Array<string>} participantsArray - Create an empty array */
    let participantsArray = [];

    /** @const {HTMLElement} input - Get the element with id="input-new-attendee" */
    const input = document.getElementById("input-new-attendee");

    /** @const {HTMLElement} divParticipants - Get the element with id="attendance-grid" */
    const divParticipants = document.getElementById("attendance-grid");

    /** @const {HTMLElement} participants - Get all elements content participant class */
    const participants = divParticipants.querySelectorAll(".participant");

    /** @description - For each elements of participants do.. */
    participants.forEach((el) => {
      /** @description - Add the innerHTML of each element to participantsArray */
      participantsArray.push(el.innerHTML);
    });

    // Debugging
    console.log(participantsArray);
    console.log(id);

    /** @description - If participantArray not include input.value */
    if (!participantsArray.includes(input.value)) {
      /** @description - Call attendancesFormEvent function with id & POST method */
      attendancesFormEvent(id, "POST");
    } else {
      /** @description - Call attendancesFormEvent function with id & PATCH method */
      attendancesFormEvent(id, "PATCH");
    }
    /** @description - Redirect to event.html page */
    location.href = "./event.html";
  });

  /** @const {HTMLElement} divAddDate - Create a element <div> */
  const divAddDate = document.createElement("div");
  /** @description - Add an id for divAddDate element */
  divAddDate.id = "div-add-date";
  /** @description - Add content of divAddDate element */
  divAddDate.innerHTML = `<input type="date" class="add-date-input">`;

  /** @const {HTMLElement} addDateEvent - Create element <button> */
  const addDateEvent = document.createElement("button");
  /** @description - Add content of addDateEvent element */
  addDateEvent.textContent = "Add a date";
  /** @description - Add an id for addDateEvent element */
  addDateEvent.id = "add-date-btn";
  /** @description - Add addDateEvent element to divAddDate element */
  divAddDate.appendChild(addDateEvent);

  /** @const {Object} objDate - Create an empty object */
  const objDate = {};

  /** @const {Array<string>} dateToAdd - Create an empty array */
  const dateToAdd = [];

  /** @description - Add divAddDate element to container element */
  container.appendChild(divAddDate);

  /** @description - Add an event listener to addDateEvent element */
  addDateEvent.addEventListener("click", (e) => {
    /** @const {HTMLElement} inputDateToAdd - Get all elements have add-date-input like classlist */
    const inputDateToAdd = document.querySelector(".add-date-input");
    /** @description - Add inputDateToAdd.value in dateToAdd array */
    dateToAdd.push(inputDateToAdd.value);

    /** @description - Add dateToAdd to objDate object */
    objDate.dates = dateToAdd;

    /** @description - Call addDate function with id & objDate like params */
    addDate(id, objDate);

    /** @description - Redirect to event.html page */
    location.reload();

    // Debugging
    console.log(dateToAdd);
    
    /** @description - Call addDate function with id & dateToAdd like params */
    addDate(id, dateToAdd);
  });
}
