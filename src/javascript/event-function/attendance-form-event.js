/**
 * 
 * @param {string} id of the event 
 * @param {string} type POST or PATCH to choose if we modify or create
 * @description change or create a new name/attendances
 */
export function attendancesFormEvent(id, type) {
    /** @var {Object} newParticipantObj - Initialize a variable contains an empty object*/
    let newParticipantObj = {};

    /** @var {Set} groupes - Initialize a variable contains an empty Set*/
    let groupes = new Set();
  
    /** @var {Array<string>} datesArr - Initialize a variable contains an empty array*/
    let datesArr = [];

    /** @var {NodeList} - Select all radio buttons and add their names to the Set*/
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      groupes.add(radio.name);
    });

    /** @description - For each elements of groupes do... */
    groupes.forEach((name) => { 
      /** @var {Object} selections - Initialize a variable contains an empty object*/
      let selections = {};
      /** @var {HTMLElement} selected - Select the checked radio button **/
      let selected = document.querySelector(`input[name="${name}"]:checked`);

      if (selected) {
        selections["date"] = name;
        selections["available"] = (selected.value === "true" ? true : false);
        /** @description - Add selections to datesArr array */
        datesArr.push(selections);
      }
    });

    /** @var {HTMLElement} input - Select the input field for the new attendee name **/
    let input = document.getElementById("input-new-attendee");

   

    /** @description - Add name and date in newParticipantObj object */
    newParticipantObj["name"] = input.value;
    newParticipantObj["dates"] = datesArr;

    // Debugging
    console.log(input.value);
    console.log(newParticipantObj);

    /** @description - POST to DB */
    try {
      fetch(`http://localhost:3000/api/events/${id}/attend`, {
        method: type,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newParticipantObj),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("Succes:", data);

          localStorage.setItem("event", data.id);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (e) {
      console.log(e);
    }
}