/**
 * 
 * @param {Array[string]} dates - receive an array of all dates event
 * @param {HTMLElement} tabel - where we display header of tabel
 * @description - Create header of tabel with dates as titles
 */
export function createHeader(dates, tabel) {
  /** @var {HTMLElement} firstHeader - Create an element <div> */
  let firstHeader = document.createElement("div");
  /** @description - Add "header" like a classList to firstHeader element */
  firstHeader.classList.add("header");
  /** @description - Add firstHeader element to tabel element */
  tabel.appendChild(firstHeader);

  /** @description - Add style display: grid; & determine the numbers of coloms by the length of dates array */
  tabel.style.gridTemplateColumns = `auto repeat(${dates.length}, 1fr)`;
  /** @description - Add style width: 80em */
  tabel.style.width = "80em";
  /** @description - Define relative positions  */
  tabel.style.position = "relative";
  /** @description - Applies automatic margins to center the element in the grid layout */
  tabel.style.margin = "auto";

  /** @description - For each elements of dates do... */
  dates.forEach((element) => {
    /** @var {HTMLElement} header - Create an element <div> */
    let header = document.createElement("div");
    /** @description - Add classList to header element */
    header.classList.add("header");
    /** @description - Add the element like header element content */
    header.textContent = element;
    /** @description - Add header element to tabel element */
    tabel.appendChild(header);
  });
}
