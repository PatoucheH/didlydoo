export function modifyEvent(id) {
  const modifyBtn = document.getElementById("btn-modify");
  const name = document.getElementById("input-name");
  const date = document.querySelectorAll(".input-date");
  const author = document.getElementById("input-author");
  const desc = document.getElementById("input-desc");

  let inputObject = {};
  inputObject.name = name;
  inputObject.date = date;
  inputObject.author = author;
  inputObject.description = desc;

  fetch(`http://localhost:3000/api/events/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application.json",
    },
    body: JSON.stringify(inputObject),
  })
    .then((response) => {
      return response;
    })
    .catch((e) => console.error(e));
}
