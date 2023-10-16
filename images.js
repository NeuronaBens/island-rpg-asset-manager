class ImageManager {
  constructor() {
    this.imageContainer = document.getElementById("image-container");

    //zone setup
    addhr(this.imageContainer);

    this.buttonZone = this.imageContainer.appendChild(
      document.createElement("div")
    );
    this.buttonZone.id = "imageManager-buttonZone";

    addhr(this.imageContainer);

    this.imageZone = this.imageContainer.appendChild(
      document.createElement("div")
    );
    this.imageZone.id = "imageManager-imageZone";

    addhr(this.imageContainer);

    //button setup
    this.createCleanImageZoneButton();
    const imageButtonInfos = [
      ["images/Map.jpg", "Map", "Show Map"],
      ["images/Table.png", "Table", "Show Table"],
      ["images/AbandonedIsland.jpg", "Abandoned Island", "Show Ab Is"],
      ["images/Castle 1.jpg", "Castle 1", "Show Castle 1"],
      ["images/Castle 2.jpg", "Castle 2", "Show Castle 2"],
      ["images/Castle 3.jpg", "Castle 3", "Show Castle 3"],
      ["images/CastleIsland.jpg", "Castle Island", "Show Cas Is"],
      ["images/HellIsland.jpg", "Hell Island", "Show H Is"],
      ["images/HuntIsland.jpg", "Hunt Island", "Show Hu Is"],
      ["images/TechnologyIsland.jpg", "Technology Island", "Show Te Is"],
      ["images/WaterfallIsland.jpg", "Waterfall Island", "Show Wa Is"],
    ];
    for (let i = 0; i < imageButtonInfos.length; i++) {
      this.createAppendImageButton(
        imageButtonInfos[i][0],
        imageButtonInfos[i][1],
        imageButtonInfos[i][2]
      );
    }
  }
  appendImage(location, alias) {
    const image = document.createElement("img");
    image.src = location;
    image.alt = alias;
    this.imageZone.appendChild(image);
  }
  createAppendImageButton(location, alias, buttonText) {
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.addEventListener("click", () => this.appendImage(location, alias));
    this.buttonZone.appendChild(button);
  }
  createCleanImageZoneButton() {
    const button = document.createElement("button");
    button.textContent = "Clear Image Zone";
    button.addEventListener("click", () => {
      while (this.imageZone.firstChild) {
        this.imageZone.removeChild(this.imageZone.firstChild);
      }
    });
    this.buttonZone.appendChild(button);
  }
}

const imageManager = new ImageManager();
