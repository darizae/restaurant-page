import generateFrontpageElements from "./backbone.js";
import Figure from "./img/res-img.jpg";

function appendToMainContainer(content) {
    const mainContainer = document.getElementById("content");
    mainContainer.appendChild(mainContainer);
}

appendToMainContainer(generateFrontpageElements());
