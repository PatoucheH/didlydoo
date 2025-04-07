/**
 * 
 * @param {string} id Of the event choose
 * @description Delete the event
 */
export function deleteEvent(id) {
  /** @description - Fetch the API to delete the event with the id */
    fetch(`http://localhost:3000/api/events/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log("SCRIPT_INFO: Success! ");
          return response;
        })
        .catch((e) => {
          console.error(`SCRIPT_ERROR: ${e}`);
        });
}