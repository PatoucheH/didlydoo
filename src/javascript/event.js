import { displayEventById } from "./module-json.js/display-one-event.js";
import { createHeader } from "./module-json.js/header.js";

createHeader();

let id = localStorage.getItem("event");

displayEventById(id);
