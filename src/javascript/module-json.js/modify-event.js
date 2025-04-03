export function modifyEvent(id) {
  const modifyBtn = document.getElementById("btn-modify");
  const name = document.getElementById("input-name");
  const dateInput = document.querySelectorAll(".input-date");
  const author = document.getElementById("input-author");
  const desc = document.getElementById("input-desc");

  let inputObject = {};
  if (name.value !== "") inputObject.name = name.value;
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
      console.log(response);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Error : ${error}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`Succes ${data}`);
    })
    .catch((e) => console.error(e));
}
