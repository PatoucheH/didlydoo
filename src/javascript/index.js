/** @description - Import the header */
import { createHeader } from "./module-json.js/header.js";
/** @description - Import the .json data objects */
import { getInfo } from "./module-json.js/get-json-info.js";

/** @description - Create the header of page */
createHeader();

/** @var {JSON[Object]} allInfo - Contains the data of api in allInfo variable */
let allInfo = await getInfo("/api/events");

/**
 * 
 * @param {JSON[Object]} data - Array of all events objects
 * @description - Iterate the array for display all events in db.json
 */ 
function getAllInfos(data) {
    // Debug
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        /** @var {object} element - Ititialize the element in the variable */
        let element = data[i];
        /** @const {string} name - Name of Event*/
        const name = element.name;        
        /** @const {string} createdAt - Date to Event created */
        const createdAt = element.created_at;
        /** @const {string} description - Event description */
        const description = element.description;
        /** @const {string} id - Event ID */
        const id = element.id;
        /** @description - Debug */
        console.log(`${name}\n ${createdAt}\n ${description}\n ${id}`);
        /** @description - Call the createdEventCard function */
        createEventCard(name, createdAt, description, id);
    }
}

/** @param - @var {JSON[Object]} allInfo */
getAllInfos(allInfo);

/**
 * 
 * @param {string} name - Name of Event
 * @param {string} date - Date to Event created
 * @param {string} desc - Event description
 * @param {string} id - Event ID
 */
function createEventCard(name, date, desc, id) {
    /** @const {HTMLElement} div - Target the div container */
    const div = document.getElementById("container");
    /** @const {HTMLElement} div - Create new <section> */
    const newSection = document.createElement("section");
    /** @description - Add an id "event" */
    newSection.id = "event";
    /** @description - Add event contains in the <section> */
    newSection.innerHTML = `
        <a href="./src/HTML/event.html" id="${id}" class="id">
          <h3>${name}</h3>
          <h6 class="desc">${desc}</h6>
          <p>created date : ${date}</p>
        </a>
    `
    /** @description - Add <section> in <div> container */
    div.appendChild(newSection);
}

const container = document.getElementById("container");
export let idEvent = null;
container.addEventListener("click", (e) => {
  if (e.target.tagName === "SECTION") {
    console.log(e.target.firstElementChild.id);
    idEvent = e.target.firstElementChild.id;
  }
});

