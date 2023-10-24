function clearZoneImageContainer() {
  // Clear container html with id zzz1
  const container = document.getElementById("zzz1");
  container.innerHTML = ""; // This will remove all child elements from the container.
}

function openTechImages() {
  // Append images zones1.png, zones2.png, and zones3.png from images/tech-island
  const container = document.getElementById("zzz1");

  // Define the image file names and their paths
  const imageFileNames = ["zones1.png", "zones2.png", "zones3.png"];
  const imagePath = "images/tech-island/";

  // Loop through the image file names and create image elements
  imageFileNames.forEach((fileName) => {
    const image = document.createElement("img");
    image.src = imagePath + fileName;
    container.appendChild(image);
  });
}
