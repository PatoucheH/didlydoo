import { getInfo } from "./module-json.js/get-json-info.js";
import { createHeader } from "./module-json.js/header.js";
import { showAllEvent } from "./module-json.js/show-event.js";

createHeader();

let info = getInfo();

showAllEvent(info);