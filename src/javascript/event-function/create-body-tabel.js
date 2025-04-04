export function createBody(attendances, dates, tabel, id) {
  //participants attendances
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
      dates.forEach((date) => {
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
