const PhotographerPageFactory = (photographer) => {
  // Store data in variables
  const { name, city, country, tagline, portrait } = photographer;
  const picture = `assets/photographers/${portrait}`;

  // Creates the header of the photographer page
  const getPhotographerPageDOM = () => {
    const header = document.querySelector(".photograph-header");
    const contactName = document.getElementById("contact-name");

    header.innerHTML = `
      <article>
        <h1>${name}</h1>
        <h2>${city}, ${country}</h2>
        <p>${tagline}</p>
      </article>

      <button class="contact_button" onclick="displayModal()" aria-label="Contactez Moi, lien vers formulaire de contact">Contactez-moi</button>
  
      <img src="${picture}" alt="${name}" tabindex="0">
    `;
    contactName.innerHTML = name;
  };

  return { getPhotographerPageDOM };
};
