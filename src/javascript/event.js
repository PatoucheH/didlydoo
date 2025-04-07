/** @description - Import the fucntions we needed for start event module */
import { displayEventById } from "./event-function/display-one-event.js";
import { createHeader } from "./general-utils/header.js";

/** @description - Call createHeader function */
createHeader();

/** @var {json} id - get Event in backend local storage */
let id = localStorage.getItem("event");

/** @description - Add an event listener on the window who has call after the scripts is loaded*/
window.addEventListener("DOMContentLoaded", (e) => {
  /** @description - Call displayEventById function with id like params */
  displayEventById(id);
});
