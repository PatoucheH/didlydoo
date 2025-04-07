/**
 * @param {string} id - The id of the event
 * @param {Array<string>} arrayDate - An array contains all the dates of event
 * 
 */
export function addDate(id, arrayDate) {
  /** @description -  An array with all the date to post function to add the date to the db */
  try {
    fetch(`http://localhost:3000/api/events/${id}/add_dates`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arrayDate),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(`SCRIPT_INFO: ${data} `);
      })
      .catch((error) => {
        console.error(`SCRIPT_ERROR: ${error} `);
      });
  } catch (e) {
    console.log(`SCRIPT_INFO: ${e}`);
  }
}


