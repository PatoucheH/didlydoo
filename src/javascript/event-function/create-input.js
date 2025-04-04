/**
 * 
 * @param {div} div div to add the input div
 * Create an input div with the information for the event to modify
 */
export function createInputDiv(div) {
  const divToAdd = document.createElement("div");
  const html = `<input type="text" placeholder="Event name">\n
                <input type="date" placeholder="Event date">\n
                <input type="text" placeholder="Event author">\n
                <input type="text" placeholder="Event desc">\n
                `;

  divToAdd.innerHTML = html;
  div.appendChild(divToAdd);
}
