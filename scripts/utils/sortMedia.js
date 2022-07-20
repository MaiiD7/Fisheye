const selectField = document.getElementById("selectField");
const selectText = document.getElementById("selectText");
const list = document.getElementById("list");
const options = document.querySelectorAll(".options");
const arrow = document.querySelector(".arrow");

// Display or hide the list of options for the select button
// Animate the arrow of the button
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

// Select the method and sort the medias according to it
const SelectSortingMethod = (photographer, photographerMedia) => {
  const sortMedia = () => {
    options.forEach((option) =>
      option.addEventListener("click", (e) => {
        // Manage the display of the button
        [selectText.innerHTML, option.innerHTML] = [
          option.innerHTML,
          selectText.innerHTML,
        ];
        hideOptions();
        // Sort according to the selected option
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
        // Call the different functions and factories with the sorted media array
        const mediaData = MediaFactory(photographer, photographerMedia);
        const mediaLightbox = Lightbox(photographerMedia, photographer);
        mediaData.mediaDisplay();
        mediaLightbox.lightboxData();
        getLikes();
      })
    );
  };

  return { sortMedia };
};
