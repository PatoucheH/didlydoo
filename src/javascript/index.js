import { getInputValue } from "./form.js";
import { createHeader } from "./module-json.js/header.js";
import { getInfo } from "./module-json.js/get-json-info.js";

let rep = await getInfo("/api/events");

createHeader();
console.log(rep);
