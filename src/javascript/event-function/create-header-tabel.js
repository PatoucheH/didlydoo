export function createHeader(dates, tabel) {
    // create header blank
      let firstHeader = document.createElement("div");
      firstHeader.classList.add("header");
      tabel.appendChild(firstHeader);
    
      // create header dates, determines the number of columns grid     
      tabel.style.gridTemplateColumns = `auto repeat(${dates.length}, 1fr)`;
      tabel.style.width = "80em";
      tabel.style.position = "relative";
      tabel.style.margin = "auto";
      dates.forEach((element) => {
        let header = document.createElement("div");
        header.classList.add("header");
        header.textContent = element;
        tabel.appendChild(header);
      });  
}