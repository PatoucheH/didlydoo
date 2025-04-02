/**
 * Functions to get all the inputs values
 * @returns An object with all the informations
 */

export function getInputValue() {
  let inputObj = {};
  const name = document.getElementById("name-event");
  const author = document.getElementById("author-event");
//   const id = document.getElementById("id-event");
  const desc = document.getElementById("desc-event");
  const date = document.querySelectorAll(".date");
  let dateEvent = [];

//   inputObj.id = id.value;
  inputObj.name = name.value;
  inputObj.description = desc.value;
  inputObj.author = author.value;

  date.forEach((el) => {
    dateEvent.push(el.value);
  });
  inputObj.dates = dateEvent;

  return inputObj;
}
