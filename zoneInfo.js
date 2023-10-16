class Island {
  constructor() {
    this.placeListOfLists = [];
  }
  setByList(list) {
    this.placeListOfLists = list;
    return this.placplaceListOfListseList;
  }
  getListOfLists() {
    return this.placeListOfLists;
  }
  generateHtmlTable(list) {
    this.placeListOfLists = list;

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Create the table headers
    const headers = [
      "ID",
      "Title",
      "Description",
      "Connections",
      "Possible Encounters",
    ];
    const headerRow = document.createElement("tr");
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table rows
    this.placeListOfLists.forEach((place) => {
      const row = document.createElement("tr");
      place.forEach((data) => {
        const cell = document.createElement("td");
        cell.textContent = data;
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    return table;
  }
}

class ZoneInfoManager {
  constructor() {
    this.zoneInfoContainer = document.getElementById("zoneInfo-container");
    this.buttonZone = document.createElement("div");
    this.buttonZone.id = "ZoneInfo-ButtonZone";
    this.ZoneInfoZone = document.createElement("div");
    this.ZoneInfoZone.id = "ZoneInfo-ZoneInfoZone";

    this.zoneInfoContainer.appendChild(this.buttonZone);
    addhr(this.zoneInfoContainer);
    this.zoneInfoContainer.appendChild(this.ZoneInfoZone);

    this.island = new Island();

    //buttons
    this.createCleanZonesButton();
    this.createAppendTableButton(ZoneTechnologyIsland, "Show Te Is");
    this.createAppendTableButton(ZoneHuntIsland, "Show Hu Is");
    this.createAppendTableButton(ZoneHellIsland, "Show H Is");
    this.createAppendTableButton(ZoneWaterfallIsland, "Show Wa Is");
  }
  createAppendTableButton(listOfLists, name) {
    const button = document.createElement("button");
    button.textContent = name;
    button.addEventListener("click", () => {
      this.appendTable(listOfLists);
    });
    this.buttonZone.appendChild(button);
  }
  appendTable(listOfLists) {
    this.ZoneInfoZone.appendChild(this.island.generateHtmlTable(listOfLists));
  }
  createCleanZonesButton() {
    const button = document.createElement("button");
    button.textContent = "Clear Zones";
    button.addEventListener("click", () => {
      while (this.ZoneInfoZone.firstChild) {
        this.ZoneInfoZone.removeChild(this.ZoneInfoZone.firstChild);
      }
    });
    this.buttonZone.appendChild(button);
  }
}

const zoneInfoManager = new ZoneInfoManager();
