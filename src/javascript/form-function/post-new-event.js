/** @param {object} data - Data object of created element */
export function postNewEvent(data) {
  /** @description - Send the event to the db to add it */
  try {
    /** @description - fetching & try to save the new event */
    fetch("http://localhost:3000/api/events/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("SCRIPT_INFO: Success", data);
        /** @description - Save the event id in localStorage */
        localStorage.setItem("event", data.id);
      })
      .catch((error) => {
        console.error("SCRIPT_ERROR:", error);
      });
  } catch (e) {
    console.log(`SCRIPT_INFO: ${e}`);
  }
}
