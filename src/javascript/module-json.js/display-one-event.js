import { getInfo } from "./get-json-info.js";
import { modifyEvent } from "./modify-event.js";

export async function displayEventById(id) {
  let event = await getInfo(`/api/events/${id}`);
  let container = document.getElementById("event");
  container.innerHTML = `
    <section id="section">
      <h2>${event.name}</h2>
      <p>${event.description}</p>
      <p>by ${event.author}</p>
      <div id="attendance-grid"></div>
    </section>
  `;

  let tabel = document.getElementById("attendance-grid");

  // create header blank
  let firstHeader = document.createElement("div");
  firstHeader.classList.add("header");
  tabel.appendChild(firstHeader);

  // create header dates, determines the number of columns grid
  let dates = event.dates;
  tabel.style.gridTemplateColumns = `auto repeat(${dates.length}, 1fr)`;
  tabel.style.width = "900px";
  tabel.style.position = "relative";
  tabel.style.margin = "auto";
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

  const deleteBtn = document.createElement("button");
  deleteBtn.id = "del-btn";
  deleteBtn.textContent = "Delete Event";
  container.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", (e) => {
    fetch(`http://localhost:3000/api/events/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Succes ! ");
        return response;
      })
      .catch((e) => {
        console.error(e);
      });
    location.href = "../../../index.html";
  });

<<<<<<< HEAD
  //modify attendances
  let form = document.createElement("form");
  form.action = "./event.html";
  let newAttendance = document.createElement("div");
  newAttendance.id = "attendance-input";
  newAttendance.style.display = "grid";
  newAttendance.style.gridTemplateColumns = `auto repeat(${dates.length}, 1fr)`;
  form.appendChild(newAttendance);

  let newParticipant = document.createElement("div");
  newParticipant.classList.add("participant");
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Name";
  newParticipant.appendChild(input);
  newAttendance.appendChild(newParticipant);

  datesSave.forEach((date) => {
    let availability = document.createElement("div");
    availability.id = `${date}`
    availability.classList.add("availability");
    availability.innerHTML = `<input type="radio" id="${date}-true" name="${date}" value="true">
                              <label for="${date}-true"><i class="fa-solid fa-thumbs-up"></i></label>
                              <input type="radio" id="${date}-false" name="${date}" value="false">
                              <label for="${date}-false"><i class="fa-solid fa-thumbs-down"></i></label>`
    newAttendance.appendChild(availability);
  })
  let submit = document.createElement("input");
  submit.type = "submit";
  submit.id = "new-attendance-submit";
  submit.value = "Submit";
  form.appendChild(submit);
  container.appendChild(form);
  let submitForm = document.getElementById("new-attendance-submit");
  submitForm.addEventListener("click", (e) => {
    e.preventDefault();
    let newParticipantObj = {};
    let groupes = new Set(); 
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        groupes.add(radio.name);
    });
    let datesArray = [];
    groupes.forEach(name => {
        let selections = {};
        let selected = document.querySelector(`input[name="${name}"]:checked`);
        if(selected) {
          selections["date"] = name;
          selections["available"] = selected.value;
          datesArray.push(selections);
        }
    });
    newParticipantObj["name"] = input.value;
    newParticipantObj["dates"] = datesArray;
    console.log(newParticipantObj);
    
});
} 
=======
  const modifyBtn = document.createElement("button");
  modifyBtn.id = "modify-btn";
  modifyBtn.textContent = "Update Event";
  container.appendChild(modifyBtn)
  modifyBtn.addEventListener("click", (e) => {
    const divInput = document.getElementById("div-input");
    if (divInput.style.display === "none") {
      divInput.style.display = "block";
    } else if ((divInput.style.display = "block")) {
      divInput.style.display = "none";
    }
  });

  const acceptModify = document.getElementById("accept-modify-btn");
  acceptModify.addEventListener("click", (e) => {
    modifyEvent(id);
    location.href = "./event.html";
  });
}
>>>>>>> 0c0ad1438630645c8ff1bd69705f30c4e0c27a63
