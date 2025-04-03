
import { displayEventById } from "./module-json.js/display-one-event.js";
import { createHeader } from "./module-json.js/header.js";

let eventId; // recupère l'id

export function recipe(id){
    eventId = id;
}

createHeader();
displayEventById(eventId);


