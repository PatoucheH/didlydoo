import { displayEventById } from "./event-function/display-one-event.js";
import { createHeader } from "./general-utils/header.js";
/**
 * Create the header of the page 
 */
createHeader();


/**
 * Get the id of the event to display from the local storage
 */
let id = localStorage.getItem("event");

/**
 * When the DOM is loaded display the event select by the id
 */
window.addEventListener("DOMContentLoaded", (e) => {
  displayEventById(id);
});
