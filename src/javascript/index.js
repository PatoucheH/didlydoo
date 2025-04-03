/** @description - Import the .json data objects */
import { getAllInfos } from "./module-json.js/get-all-infos.js";
import { getInfo } from "./module-json.js/get-json-info.js";

/** @var {JSON[Object]} allInfo - Contains the data of api in allInfo variable */
let allInfo = await getInfo("/api/events");

/** @description Call getAllInfo function with @param {JSON[Object]} allInfo */
getAllInfos(allInfo);