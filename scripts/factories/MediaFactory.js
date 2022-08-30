const MediaFactory = (photographer, photographerMedias) => {
  const main = document.getElementById("main");
  const aside = document.createElement("aside");
  const { name, price } = photographer;
  let totalLikes = 0;

  // Clear the media section if needed (used when sorting medias)
  if (document.contains(document.querySelector(".medias-section"))) {
    document.querySelector(".medias-section").remove();
  }

  aside.classList.add("infos");

  // Display the photographer medias in a section
  const mediaDisplay = () => {
    const section = document.createElement("section");

    section.classList.add("medias-section");
    main.appendChild(section);
    section.appendChild(aside);

    photographerMedias.forEach((photographerMedia) => {
      const article = document.createElement("article");
      const { image, video, title, likes } = photographerMedia;
      const firstName = name.substring(0, name.indexOf(" "));

      article.classList.add("media-container");

      // Differenciate images and videos
      if (image) {
        article.innerHTML = `
          <a>
            <img src="assets/images/${firstName}/${image}" class="images" alt="${image}" aria-label="${title}, image" tabindex="0">
          </a>
          <div>
            <h5>${title}</h5>
            <div>
              <p aria-label='${likes} likes'>${likes}</p>
              <i class="fa-solid fa-heart heart" aria-label="Bouton Like"></i>
            </div>
          </div>
        `;
      } else if (video) {
        article.innerHTML = `
          <video width="350" height="300" class="images" aria-label="${title}, video" tabindex="0">
           <source src="assets/images/${firstName}/${video}" type="video/mp4" >
          </video>
          <div>
            <h5>${title}</h5>
            <div>
              <p aria-label='${likes} likes'>${likes}</p>
              <i class="fa-solid fa-heart heart" aria-label="Bouton Like"></i>
            </div>
          </div>
        `;
      }

      section.appendChild(article);
      totalLikes += likes;
    });

    aside.innerHTML = `
      <div>
        <p id="totalLikes" tabindex="0" aria-label="nombre total de likes: ${totalLikes}">${totalLikes}</p>
        <i class="fa-solid fa-heart"></i>
      </div>
      <p tabindex="0" aria-label="prix journalier: ${price} euros">${price}€/jour</p>
    `;
  };

  return { mediaDisplay };
};
