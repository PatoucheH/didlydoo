/**
 * 
 * @param {Array[string]} dates - receive an array of all dates event
 * @param {HTMLElement} container - container that receive form
 * @description - create form to add new participant to event
 */
export function createFormAttendances(dates, container) {
    //modify attendances
    let form = document.createElement("form");
    form.id = "form";
    form.action = "./event.html";
    let newAttendance = document.createElement("div");
    newAttendance.id = "attendance-input";
    newAttendance.style.display = "grid";
    newAttendance.style.gridTemplateColumns = `auto repeat(${dates.length}, 1fr)`;
    form.appendChild(newAttendance);

    let first = document.createElement("div");
    first.classList.add("header");
    newAttendance.appendChild(first);
    dates.forEach((date) => {
        let header = document.createElement("div");
        header.classList.add("header");
        header.textContent = date;
        newAttendance.appendChild(header);
    })

    let newParticipant = document.createElement("div");
    newParticipant.classList.add("participant");
    let input = document.createElement("input");
    input.id = "input-new-attendee";
    input.type = "text";
    input.placeholder = "Name";
    newParticipant.appendChild(input);
    newAttendance.appendChild(newParticipant);

    dates.forEach((date) => {
        let availability = document.createElement("div");
        availability.id = `${date}`;
        availability.classList.add("availability");
        availability.innerHTML = `<input type="radio" id="${date}-true" name="${date}" value="true">
                                <label for="${date}-true"><i class="fa-solid fa-thumbs-up"></i></label>
                                <input type="radio" id="${date}-false" name="${date}" value="false">
                                <label for="${date}-false"><i class="fa-solid fa-thumbs-down"></i></label>`;
        newAttendance.appendChild(availability);
    });
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.id = "new-attendance-submit";
    submit.value = "Submit";
    form.appendChild(submit);
    container.appendChild(form);
}