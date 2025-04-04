import { displayEventById } from "./event-function/display-one-event.js";
import { createHeader } from "./general-utils/header.js";

createHeader();

let id = localStorage.getItem("event");
window.addEventListener("DOMContentLoaded", (e) => {
  displayEventById(id);
});
