export function modifyEvent(id) {
  const modifyBtn = document.getElementById("btn-modify");
  const name = document.getElementById("input-name");
  const dateInput = document.querySelectorAll(".input-date");
  const author = document.getElementById("input-author");
  const desc = document.getElementById("input-desc");

  let inputObject = {};
  if (name.value !== "") inputObject.name = name.value;

  let dateArray = [];
  Array.from(dateInput).map((el) => {
    if (el.value !== "") dateArray.push(el.value);
  });
  if (dateArray.length > 0) inputObject.dates = dateArray;

  if (author.value !== "") inputObject.author = author.value;
  if (desc.value !== "") inputObject.description = desc.value;

  console.log(inputObject);

  fetch(`http://localhost:3000/api/events/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputObject),
  })
    .then(async (response) => {
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Error : ${error.message}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`Succes ${data}`);
      alert(`Succes event modified.`);
    })
    .catch((e) => console.error(e));
}
