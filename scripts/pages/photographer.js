const id = window.location.search.substring(17);

const getPhotographerData = async () => {
  const data = await fetch('../data/photographers.json').then(res => res.json());
  const photographer = data.photographers.find(photographer => photographer.id == id);
  const photographerMedia = data.media.filter(file => file.photographerId == id);

  return ({
      photographer: photographer,
      photographerMedia: photographerMedia})
}

const displayPhotographerData = async (photographer, photographerMedia) => {
  const photographerData = PhotographerPageFactory(photographer);
  const mediaData = MediaFactory(photographer,photographerMedia);
  const mediaLightbox = Lightbox(photographerMedia, photographer);
  photographerData.getPhotographerPageDOM();
  mediaData.mediaDisplay();
  mediaLightbox.lightboxData();
}

const init = async () =>  {
  const {photographer, photographerMedia} = await getPhotographerData();
  displayPhotographerData(photographer, photographerMedia);
  console.log(photographerMedia);
}

init();
