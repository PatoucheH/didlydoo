export function getInputValue() {
  let inputObj = {};
  const name = document.getElementById("name-event");
  const author = document.getElementById("author-event");
  const id = document.getElementById("id-event");
  const desc = document.getElementById("desc-event");
  const date = document.getElementById("date-event");

  inputObj.name = name.value;
  inputObj.author = author.value;
  inputObj.id = id.value;
  inputObj.desc = desc.value;
  inputObj.date = date.value;
  console.log(inputObj);

  return inputObj;
}
