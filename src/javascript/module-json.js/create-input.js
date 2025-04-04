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
