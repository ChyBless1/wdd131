const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navigation.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Chicago Illinois",
    location: "Glenview, Illinois, United States",
    dedicated: "1985, August, 9",
    area: 37062,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-58403-main.jpg"
  },
  {
    templeName: "Freetown Sierra Leone",
    location: "Freetown, Sierrs Leone",
    dedicated: "2022, March, 19",
    area: 18000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/freetown-sierra-leone-temple/freetown-sierra-leone-temple-24087-main.jpg"
  },
    {
    templeName: "Sao paulo Brazil",
    location: "Sao Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
  },
];
const gallery = document.querySelector(".gallery");

function displayTemples(templeList) {
    gallery.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250" loading="lazy">
        `;

        gallery.appendChild(card);
    });
}

displayTemples(temples);
document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    const oldTemples = temples.filter(temple =>
        Number(temple.dedicated.split(",")[0]) < 1900
    );

    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
    const newTemples = temples.filter(temple =>
        Number(temple.dedicated.split(",")[0]) > 2000
    );

    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
    const largeTemples = temples.filter(temple =>
        temple.area > 90000
    );

    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
    const smallTemples = temples.filter(temple =>
        temple.area < 10000
    );

    displayTemples(smallTemples);
});