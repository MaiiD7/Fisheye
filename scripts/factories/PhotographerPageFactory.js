const PhotographerPageFactory = (photographer, photographerMedia) => {
  // Store data in variables
  const { name, id, city, country, tagline, price, portrait } = photographer;
  const picture = `assets/photographers/${portrait}`;

  // Creates the header of the photographer page
  const getPhotographerPageDOM = () => {
    const header = document.querySelector(".photograph-header");
    const contactName = document.getElementById("contact-name");

    header.innerHTML = `
      <article>
        <h1>${name}</h1>
        <h3>${city}, ${country}</h3>
        <p>${tagline}</p>
      </article>

      <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
  
      <img src="${picture}" alt="${name}">
    `;
    contactName.innerHTML = name;
  };

  return { getPhotographerPageDOM };
};
