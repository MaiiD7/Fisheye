const id = window.location.search.substring(17);

const getPhotographerData = async () => {
  const data = await fetch('../data/photographers.json').then(res => res.json());
  const photographer = data.photographers.filter(photographer => photographer.id == id);
  const photographerMedia = data.media.filter(file => file.photographerId == id);

  return ({
      photographer: photographer,
      photographerMedia: photographerMedia})
}

const displayPhotographerData = async (photographer, photographerMedia) => {
  const photographerData = photographerPageFactory(photographer);
  const mediaData = MediaFactory(photographer,photographerMedia);
  photographerData.getPhotographerPageDOM();
}

// Ecrire les fonctions qui utilisent et modifient les données içi 
// Puis les appler dans init(), qui fait tout!

const init = async () =>  {
  const {photographer, photographerMedia} = await getPhotographerData();
  displayPhotographerData(photographer[0], photographerMedia);
}

init();
