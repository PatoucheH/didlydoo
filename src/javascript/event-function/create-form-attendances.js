/**
 * 
 * @param {Array[string]} dates - receive an array of all dates event
 * @param {HTMLElement} container - container that receive form
 * @description - create form to add new participant to event
 */
export function createFormAttendances(dates, container) {
    /** @var {HTMLElement} form - Create an element <form> */
    let form = document.createElement("form");
    /** @description - Add an id for <form> element */
    form.id = "form";
    /** @description - Add an action for <form> element */
    form.action = "./event.html";
    /** @var {HTMLElement} newAttendance - Create an element <div> */
    let newAttendance = document.createElement("div");
    /** @description - Add an id for <div> element */
    newAttendance.id = "attendance-input";
    /** @description - Add style display: grid; */
    newAttendance.style.display = "grid";
    /** @description - The number of columns in grid-template-columns is dynamically based on the number of dates predefined by the event creator. */
    newAttendance.style.gridTemplateColumns = `auto repeat(${dates.length}, 1fr)`;
    /** @description - Add newAttendance element in from element */
    form.appendChild(newAttendance);
    /** @var {HTMLElement} first - Create an element <div> */
    let first = document.createElement("div");
    /** @description - Add class to first element */
    first.classList.add("header");
    /** @description - Add first element to newAttendance element */
    newAttendance.appendChild(first);
    /** @description - For each elements of dates do.. */
    dates.forEach((date) => {
        /** @var {HTMLElement} header - Create an element <div> */
        let header = document.createElement("div");
        /** @description - Add classList to header element */
        header.classList.add("header");
        /** @description - Add the element like header element content */
        header.textContent = date;
        /** @description - Add header element to newAttendance element */
        newAttendance.appendChild(header);
    })

    /** @var {HTMLElement} newParticipant - Create an element <div> */
    let newParticipant = document.createElement("div");
    /** @description - Add classList to newParticipant element */
    newParticipant.classList.add("participant");
    /** @var {HTMLElement} input - Create an element <input> */
    let input = document.createElement("input");
    /** @description - Add an id for input element */
    input.id = "input-new-attendee";
    /** @description - Add type="text" for input element */
    input.type = "text";
    /** @description - Add placeholder="Name" for input element */
    input.placeholder = "Name";
    /** @description - Add input element to newParticipant element */
    newParticipant.appendChild(input);
    /** @description - Add newParticipant element to newAttendance element */
    newAttendance.appendChild(newParticipant);

    /** @description - For each elements of dates do.. */
    dates.forEach((date) => {
        /** @var {HTMLElement} availability - Create an element <div> */
        let availability = document.createElement("div");
        /** @description - Assign a unique ID to each availability element based on its date value during iteration */
        availability.id = `${date}`;
        /** @description - Add classList to availability element */
        availability.classList.add("availability");
        /** @description - Add a contents of availability element */
        availability.innerHTML = `
            <input type="radio" id="${date}-true" name="${date}" value="true">
            <label for="${date}-true"><i class="fa-solid fa-thumbs-up"></i></label>
            <input type="radio" id="${date}-false" name="${date}" value="false">
            <label for="${date}-false"><i class="fa-solid fa-thumbs-down"></i></label>
        `;
        /** @description - Add availability element to newAttendance element */
        newAttendance.appendChild(availability);
    });
    /** @var {HTMLElement} submit - Create an element <input> */
    let submit = document.createElement("input");
    /** @description - Add type="submit" for submit element */
    submit.type = "submit";
    /** @description - Add id="new-attendance-submit" for submit element */
    submit.id = "new-attendance-submit";
    /** @description - Add value="Submit" for submit element */
    submit.value = "Submit";
    /** @description - Add submit element to form element */
    form.appendChild(submit);
    /** @description - Add form element to container element */
    container.appendChild(form);
}