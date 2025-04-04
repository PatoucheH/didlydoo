/**
 * 
 * @param {string} id the id of the event 
 * @param {array} arrayDate An array with all the date to post 
 *  function to add the date to the db 
 */

export function addDate(id, arrayDate) {
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
        console.log("Succes:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (e) {
    console.log(e);
  }
}


