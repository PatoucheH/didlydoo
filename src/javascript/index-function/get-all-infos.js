import { bestPossibleDate } from "./best-possible-date";

/**
 *
 * @param {JSON[Object]} data - Array of all events objects
 * @description - Iterate the array for display all events in db.json
 */
export function getAllInfos(data) {
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
 * @param {string} name - Name of Event
 * @param {string} date - Date to Event created
 * @param {string} desc - Event description
 * @param {string} id - Event ID
 */
async function createEventCard(name, date, desc, id) {
  const div = document.getElementById("container"); // Target the div container
  const newSection = document.createElement("section"); // Create new <section>
  newSection.id = "event"; // Add an id "event"
  // Add event contains in the <section>
  const newDate = date.split("T")[0];

  //best possible date(s)
  let bestDates = await bestPossibleDate(id);
 
  newSection.innerHTML = `
            <a href="./src/HTML/event.html" id="${id}" class="card">
            <h3>${name}</h3>
            <h6 class="desc">${desc}</h6>
            <p>created date : ${newDate}</p>
            <p> best possible date(s) : <br>
             ${bestDates.length > 0 ? bestDates.join("<br>") : "no best date(s) found"}</p>
            </a>
        `;
  div.appendChild(newSection); // Add <section> in <div> container
  let a = newSection.querySelector(".card");

  a.addEventListener("click", function () {
    localStorage.setItem("event", a.id);
  });
}
