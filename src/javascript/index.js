// Import the header
import { createHeader } from "./module-json.js/header.js";
import { getInfo } from "./module-json.js/get-json-info.js";

createHeader();

let allInfo = await getInfo("/api/events");

export function getAllInfos(data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        const name = element.name;
        const createdAt = element.created_at;
        const description = element.description;
        console.log(`${name}\n ${createdAt}\n ${description}`);
        createEventCard(name, createdAt, description, i);     
    }
}

getAllInfos(allInfo);

function createEventCard(name, date, desc, i) {
    const div = document.getElementById("container");
    const newSection = document.createElement("section");
    newSection.id = "event";
    newSection.innerHTML = `
        <a href="./src/HTML/event.html" id="event-btn" id="event-info">
          <h3>${name}</h3>
          <h6 class="desc">${desc}</h6>
          <p>created date : ${date}</p>
        </a>
    `
    div.appendChild(newSection);
}