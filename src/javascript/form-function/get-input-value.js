/**
 * @description - Functions to get all the inputs values
 * @returns - An object contains all values of the inputs
 */
export function getInputValue() {
  /** @var {object} inputObj - Create an empty object*/
  let inputObj = {};

  /** @const {HTMLElement} name - Get element who has name-event like id*/
  const name = document.getElementById("name-event");
  /** @const {HTMLElement} author - Get element who has author-event like id*/
  const author = document.getElementById("author-event");
  /** @const {HTMLElement} desc - Get element who has desc-event like id*/
  const desc = document.getElementById("desc-event");
  /** @const {HTMLElement} date - Get all element who had date like classList*/
  const date = document.querySelectorAll(".date");

  /** @var {Array} dateEvent - Create an empty array */
  let dateEvent = [];

  /** @description - Add name, author and description to inputObj */
  inputObj.name = name.value;
  inputObj.description = desc.value;
  inputObj.author = author.value;

  /** @description - For each elements of date do.. */
  date.forEach((el) => {
    /** @description - Add el.value to dateEvent Array */
    dateEvent.push(el.value);
  });
  /** @description - Add dateEvent to dates in inputObj object  */
  inputObj.dates = dateEvent;
  return inputObj;
}
