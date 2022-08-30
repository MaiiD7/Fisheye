// Get photographer id in url
const id = window.location.search.substring(17);

// Fetch data corresponding to the id in .json file
const getPhotographerData = async () => {
  const data = await fetch("../data/photographers.json").then((res) =>
    res.json()
  );
  const photographer = data.photographers.find(
    (photographer) => photographer.id == id
  );
  const photographerMedia = data.media.filter(
    (file) => file.photographerId == id
  );

  return {
    photographer: photographer,
    photographerMedia: photographerMedia.sort((a, b) => b.likes - a.likes),
  };
};

// Display the photographer header, medias and media view (lightbox)
const displayPhotographerData = async (photographer, photographerMedia) => {
  const photographerData = PhotographerPageFactory(photographer);
  const mediaData = MediaFactory(photographer,photographerMedia);
  const mediaLightbox = Lightbox(photographerMedia, photographer);
  photographerData.getPhotographerPageDOM();
  mediaData.mediaDisplay();
  mediaLightbox.lightboxData();
};

// Manage the "like" feature
const getLikes = () => {
  const hearts = document.querySelectorAll(".heart");
  const totalLikes = document.getElementById("totalLikes");
  hearts.forEach((heart) => {
    let clicked = false;
    heart.addEventListener("click", () => {
      if (!clicked) {
        heart.previousElementSibling.innerHTML =
          Number(heart.previousElementSibling.innerHTML) + 1;
        totalLikes.innerHTML = Number(totalLikes.innerHTML) + 1;
        clicked = true;
      } else {
        heart.previousElementSibling.innerHTML =
          Number(heart.previousElementSibling.innerHTML) - 1;
        totalLikes.innerHTML = Number(totalLikes.innerHTML) - 1;
        clicked = false;
      }
    });
  });
};

// Run the other functions
const init = async () => {
  const { photographer, photographerMedia } = await getPhotographerData();
  displayPhotographerData(photographer, photographerMedia);
  getLikes();
  // Use to sort medias
  const sortMethod = SelectSortingMethod(photographer, photographerMedia);
  sortMethod.sortMedia();
};

init();
