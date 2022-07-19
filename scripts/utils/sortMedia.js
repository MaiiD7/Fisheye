const selectField = document.getElementById("selectField");
const selectText = document.getElementById("selectText");
const list = document.getElementById("list");
const options = document.querySelectorAll(".options");
const arrow = document.querySelector(".arrow");

const hideOptions = () => {
  if (list.classList.contains("hide")) {
    list.classList.remove("hide");
    arrow.classList.add("rotate-arrow");
  } else {
    list.classList.add("hide");
    arrow.classList.remove("rotate-arrow");
  }
};

selectField.addEventListener("click", (e) => {
  hideOptions();
});

const SelectSortingMethod = (photographer, photographerMedia) => {
  const sortMedia = () => {
    options.forEach((option) =>
      option.addEventListener("click", (e) => {
        [selectText.innerHTML, option.innerHTML] = [
          option.innerHTML,
          selectText.innerHTML,
        ];
        hideOptions();
        switch (selectText.innerHTML) {
          case "Popularité":
            photographerMedia = photographerMedia.sort(
              (a, b) => b.likes - a.likes
            );
            break;
          case "Date":
            photographerMedia = photographerMedia.sort((a, b) =>
              b.date < a.date ? -1 : 1
            );
            break;
          case "Titre":
            photographerMedia = photographerMedia.sort((a, b) =>
              b.title < a.title ? 1 : -1
            );
            break;
        }
        const mediaData = MediaFactory(photographer, photographerMedia);
        const mediaLightbox = Lightbox(photographerMedia, photographer);
        mediaData.mediaDisplay();
        mediaLightbox.lightboxData();
      })
    );
  };

  return { sortMedia };
};
