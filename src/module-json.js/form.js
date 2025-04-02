const addDate = document.getElementById("add-date");
const form = document.getElementById("my-form");

/**
 * Add an input date to add another date to the event
 */
addDate.addEventListener("click", (e) => {
  addDate.insertAdjacentHTML(
    "beforebegin",
    `<label for="date-event">Enter the date : </label>
        <input type="date" id="date-event" required />`
  );
});

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

  fetch("http://localhost:3000/api/events/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputObj),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Succès:", data);
    })
    .catch((error) => {
      console.error("Erreur:", error);
    });
}
