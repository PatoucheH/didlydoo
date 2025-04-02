import { getInputValue } from "./module-json.js/form.js";
import { createHeader } from "./module-json.js/header.js";

const formBtn = document.getElementById

createHeader();

let rep = await getInfo("/api/events/38b643aeb883");

formBtn.addEventListener("click", getInputValue);
