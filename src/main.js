import { getInputValue } from "./module-json.js/form.js";
import { createHeader } from "./module-json.js/header.js";

const formBtn = document.getElementById("submit");

createHeader();
getInfo();

formBtn.addEventListener("click", getInputValue);
