/** @description - Import the .json data objects */
import { getAllInfos } from "./module-json.js/get-all-infos.js";
import { getInfo } from "./module-json.js/get-json-info.js";

/** @description - Import the header */
import { createHeader } from "./module-json.js/header.js";

/** @description - Create the header of page */
createHeader();

/** @var {JSON[Object]} allInfo - Contains the data of api in allInfo variable */
let allInfo = await getInfo("/api/events");

/** @description Call getAllInfo function with @param {JSON[Object]} allInfo */
getAllInfos(allInfo);

const container = document.getElementById("container");
export let idEvent = null;
container.addEventListener("click", (e) => {
  if (e.target.tagName === "SECTION") {
    console.log(e.target.firstElementChild.id);
    idEvent = e.target.firstElementChild.id;
  }
});
