/**
 * 
 * @param {HTMLElement} div div to add the input div
 * @description Create an input div with the information for the event to modify
 */
export function createInputDiv(div) {
  /** @const {HTMLElement} divToAdd - Create a element <div> */
  const divToAdd = document.createElement("div");
  /** @const {string} html - Defines the HTML content for the event creation inputs */
  const html = `
    <input type="text" placeholder="Event name">\n
    <input type="date" placeholder="Event date">\n
    <input type="text" placeholder="Event author">\n
    <input type="text" placeholder="Event desc">\n
  `;
  /** @description - Add html variable like content of divToAdd */
  divToAdd.innerHTML = html;
  /** @description - Add divToAdd element ti div element */
  div.appendChild(divToAdd);
}
