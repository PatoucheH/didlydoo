import { getInputValue } from "./module-json.js/form.js";
import { createHeader } from "./module-json.js/header.js";

const formBtn = document.getElementById("submit");
import { getInfo } from "./module-json.js/get-json-info.js";

createHeader();

let rep = await getInfo("/api/events/38b643aeb883");
let allInfos =  await getInfo("/api/events");
formBtn.addEventListener("click", getInputValue);


