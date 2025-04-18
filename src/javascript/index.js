/** @description - Import the .json data objects */
import { getAllInfos } from "./index-function/get-all-infos.js";
import { getInfo } from "./general-utils/get-json-info.js";

/** @description - Import the header */
import { createHeader } from "./general-utils/header.js";

/** @description - Create the header of page */
createHeader();

/** @var {JSON[Object]} allInfo - Contains the data of api in allInfo variable */
let allInfo = await getInfo("/api/events");

/** @description Call getAllInfo function with @param {JSON[Object]} allInfo */
getAllInfos(allInfo);
