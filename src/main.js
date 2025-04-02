import { createHeader } from "./module-json.js/header.js";
import { getInfo } from "./module-json.js/get-json-info.js";

createHeader();

let rep = await getInfo("/api/events/38b643aeb883");




getInfo();