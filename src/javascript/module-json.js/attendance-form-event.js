export function attendancesFormEvent(id) {
    let newParticipantObj = {};
    let groupes = new Set();
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      groupes.add(radio.name);
    });
    let datesArr = [];
    groupes.forEach((name) => { 
      let selections = {};
      let selected = document.querySelector(`input[name="${name}"]:checked`);
      if (selected) {
        selections["date"] = name;
        selections["available"] = (selected.value === "true" ? true : false);

        datesArr.push(selections);
      }
    });
    let input = document.getElementById("input-new-attendee");
    console.log(input.value);
    
    newParticipantObj["name"] = input.value;
    newParticipantObj["dates"] = datesArr;
    
    console.log(newParticipantObj);
    //POST to DB
    try {
      fetch(`http://localhost:3000/api/events/${id}/attend`, {
        method: "POST",
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