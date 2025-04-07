/**
 * 
 * @param {Array<object>} attendances - response API with all attendances for all events
 * @param {Array<string>} dates - receive an array of all dates event
 * @param {HTMLElement} tabel - where we display header of tabel
 * @param {string} id - id of the event
 * @description - create tabel with availibilities for the participants of events
 */
export function createBody(attendances, dates, tabel, id) {
  /** @description - participants attendances */
  attendances.forEach((attendance) => {
    /** @var {object} eventsUser - find the event for the participant */
    let eventsUser = attendance.events.find((event) => event.id === id);

    if (eventsUser) {
      /** @var {HTMLElement} participant - create new participant name row */
      let participant = document.createElement("div");
      /** @description - add class for the participant */
      participant.classList.add("participant");
      /** @description - add textcontent of participant with name of attendance object */
      participant.textContent = attendance.name;
      /** @description - add participant element in tabel element*/
      tabel.appendChild(participant);
      /** @var {object} availabilities - create new object with all availabilities for the participant */
      let availabilities = {};
      /** @description - add availibilities for participant */
      eventsUser.dates.forEach((d) => {
        availabilities[d.date] = d.available;
      });

      /** @description - add availibilities for participant */
      dates.forEach((date) => {
        /** @var {HTMLElement} availability - create new div */
        let availability = document.createElement("div");
        /** @description - add class for the availability div */
        availability.classList.add("availability");
        /** @description - condition for create a defaut content when the date is undefined */
        if (availabilities[date] !== undefined) {
          /** @description - add contains to avaiability */
          availability.innerHTML = availabilities[date]
            ? `<i class="fa-solid fa-thumbs-up"></i>`
            : `<i class="fa-solid fa-thumbs-down"></i>`;
        } else {
          /** @description - add empty contains to avaiability */
          availability.textContent = "";
        }
        /** @description - add availability to tabel */
        tabel.appendChild(availability);
      });
    }
  });
}
