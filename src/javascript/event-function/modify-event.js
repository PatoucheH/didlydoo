/**
 * 
 * @param {string} id of the event to modify
 * @description Modify the name author or description of an event
 */
export function modifyEvent(id) {
    /** @const {HTMLElement} name - Get element who has input-name id*/
    const name = document.getElementById("input-name");

    /** @const {HTMLElement} author - Get element who has input-author id*/
    const author = document.getElementById("input-author");

    /** @const {HTMLElement} desc - Get element who has input-desc id*/
    const desc = document.getElementById("input-desc");

    /** @var {Array} inputObject - Create uan empty array */
    let inputObject = {};
    /** @description - Add name, author and description to inputObject */
    if (name.value !== "") inputObject.name = name.value;
    /** @description - Add author to inputObject */
    if (author.value !== "") inputObject.author = author.value;
    /** @description - Add description to inputObject */
    if (desc.value !== "") inputObject.description = desc.value;
    // Debugging
    console.log(inputObject);
  
    /** @description - Fetch to modify the event with id */
    fetch(`http://localhost:3000/api/events/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputObject),
    })
      .then(async (response) => {
        console.log(response);
        if (!response.ok) {
          /** @const {JSON} error - Waiting asyncronous event for receive the json response */
          const error = await response.json();
          /** @description - Create a new error */
          throw new Error(`SCRIPT_ERROR: ${error}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(`SCRIPT_INFO: Success, ${data}`);
      })
      .catch((e) => console.error(`SCRIPT_ERROR: ${e}`));
  }
  