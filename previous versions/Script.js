function showLevelInfo(levelId) {
  const level = Levels.find((l) => l.id === levelId);

  if (!level) {
    console.error(`Level with ID ${levelId} not found.`);
    return;
  }

  const levelInfoDiv = document.createElement("div");
  levelInfoDiv.classList.add("level-info");
  levelInfoDiv.innerHTML = `
      <h2>${level.name}</h2>
      <h3>Zones:</h3>
      <ol>
        ${level.zones
          .map(
            (zone) => `
              <li>
                <strong>${zone.name}</strong> (${zone.areaType})
                <p>${zone.description}</p>
              </li>
            `
          )
          .join("")}
      </ol>
    `;

  document.body.appendChild(levelInfoDiv);
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

function openImage(name) {
  // Create an image element
  var imgElement = document.createElement("img");
  // Set the source (src) attribute to the path of the image in the Assets directory
  imgElement.src = "Assets/" + name; // Replace with the correct file extension (e.g., .png, .jpg)
  // Append the image element to the body or any other container element on your webpage
  // Calculate 75% of the viewport width
  var viewportWidth = window.innerWidth * 0.5;
  // Set the image width to 75% of the viewport width
  imgElement.style.width = viewportWidth + "px";
  imgElement.style.height = "auto"; // Maintain the aspect ratio
  document.body.appendChild(imgElement);
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
