import Figure from "./img/res-img.jpg";

export default function generateFrontpageElements() {
    const container = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Our Restaurant";

    const img = document.createElement("img");
    img.id = "restaurant-image";
    img.alt = "Restaurant Image";
    img.src = Figure;

    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "We are a delightful restaurant that offers a unique dining experience. Our chefs prepare mouth-watering dishes using only the finest ingredients sourced locally.";

    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "Join us for a memorable dining experience with our friendly staff and cozy ambiance. Whether it's a special occasion or a casual dinner, we look forward to serving you the most delicious meals.";

    const paragraph3 = document.createElement("p");
    paragraph3.textContent = "Visit us today and embark on a culinary journey that will leave you wanting more.";

    container.appendChild(h1);
    container.appendChild(img);
    const innerDiv = document.createElement("div");
    innerDiv.appendChild(paragraph1);
    innerDiv.appendChild(paragraph2);
    innerDiv.appendChild(paragraph3);
    container.appendChild(innerDiv);

    document.body.appendChild(container);
    return container;
}