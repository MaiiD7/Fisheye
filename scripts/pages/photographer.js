const id = window.location.search.substring(17);

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
    photographerMedia: photographerMedia,
  };
};

const displayPhotographerData = async (photographer, photographerMedia) => {
  const photographerData = PhotographerPageFactory(photographer);
  const mediaData = MediaFactory(
    photographer,
    photographerMedia.sort((a, b) => b.likes - a.likes)
  );
  const mediaLightbox = Lightbox(photographerMedia, photographer);
  photographerData.getPhotographerPageDOM();
  mediaData.mediaDisplay();
  mediaLightbox.lightboxData();
};

const getLikes = () => {
  const hearts = document.querySelectorAll(".heart");
  const totalLikes = document.getElementById("totalLikes");
  hearts.forEach((heart) => {
    let clicked = false;
    heart.addEventListener("click", (e) => {
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

const init = async () => {
  const { photographer, photographerMedia } = await getPhotographerData();
  displayPhotographerData(photographer, photographerMedia);
  getLikes();
  const sortMethod = SelectSortingMethod(photographer, photographerMedia);
  sortMethod.sortMedia();
};

init();
