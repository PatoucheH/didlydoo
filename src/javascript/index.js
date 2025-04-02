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
        let element = data[i]; // Ititialize the element in the variable
        const name = element.name; // Catch element name
        const createdAt = element.created_at; // Catch date od element was created
        const description = element.description; // Catch the element description
        const id = element.id;
        console.log(`${name}\n ${createdAt}\n ${description}\n ${id}`); // Debug
        createEventCard(name, createdAt, description, id); // Call the createdEventCard function
    }
}

/**
 * 
 * @param - @var {JSON[Object]} allInfo
 */
getAllInfos(allInfo);

/**
 * 
 * @param {string} name - Name of Event
 * @param {string} date - Date to Event created 
 * @param {string} desc - Event description
 * @param {string} id - Event ID
 */
function createEventCard(name, date, desc, id) {
    const div = document.getElementById("container"); // Target the div container
    const newSection = document.createElement("section"); // Create new <section>
    newSection.id = "event"; // Add an id "event"
    // Add event contains in the <section>
    newSection.innerHTML = `
        <a href="./src/HTML/event.html" id="${id}" id="event-info">
          <h3>${name}</h3>
          <h6 class="desc">${desc}</h6>
          <p>created date : ${date}</p>
        </a>
    `
    div.appendChild(newSection); // Add <section> in <div> container
}
