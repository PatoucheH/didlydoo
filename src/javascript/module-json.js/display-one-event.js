import { getInfo } from "./get-json-info.js";

export async function displayEventById(id) {
  let event = await getInfo(`/api/events/${id}`);
  let container = document.getElementById("event");
  container.innerHTML = `
            <h2>${event.name}</h2>
            <p>${event.description}</p>
            <p>by ${event.author}</p>
            <div id="attendance-grid"></div>`;

  let tabel = document.getElementById("attendance-grid");

  // create header blank
  let firstHeader = document.createElement("div");
  firstHeader.classList.add("header");
  tabel.appendChild(firstHeader);

  // create header dates, determines the number of columns grid
  let dates = event.dates;
  tabel.style.gridTemplateColumns = `auto repeat(${dates.length}, 1fr)`;
  let datesSave = [];
  dates.forEach((element) => {
    let header = document.createElement("div");
    header.classList.add("header");
    header.textContent = element.date;
    tabel.appendChild(header);
    datesSave.push(element.date);
  });

  //participants attendances
  let attendances = await getInfo("/api/attendees/");

  attendances.forEach((attendance) => {
    //find the right event
    let eventsUser = attendance.events.find((event) => event.id === id);

    if (eventsUser) {
      //create participant name row
      let participant = document.createElement("div");
      participant.classList.add("participant");
      participant.textContent = attendance.name;
      tabel.appendChild(participant);

      let availabilities = {};
      eventsUser.dates.forEach((d) => {
        availabilities[d.date] = d.available;
      });

      //add availibilities for participant
      datesSave.forEach((date) => {
        let availability = document.createElement("div");
        availability.classList.add("availability");

        if (availabilities[date] !== undefined) {
          availability.innerHTML = availabilities[date]
            ? `<i class="fa-solid fa-thumbs-up"></i>`
            : `<i class="fa-solid fa-thumbs-down"></i>`;
        } else {
          availability.textContent = "";
        }
        tabel.appendChild(availability);
      });
    }
  });
}
