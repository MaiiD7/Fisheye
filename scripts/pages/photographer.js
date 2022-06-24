const id = window.location.search.split("?").join("");

async function getPhotographerData() {
  const data = await fetch('../data/photographers.json').then(res => res.json());
  const photographer = data.photographers.filter(photographer => photographer.id == id);
  const photographerMedia = data.media.filter(file => file.photographerId == id);

  return ({
      photographer: photographer,
      photographerMedia: photographerMedia})
}


// Ecrire les fonctions qui utilisent et modifient les données içi 
// Puis les appler dans init(), qui fait tout!


async function init() {
  const {photographer, photographerMedia} = await getPhotographerData();
  console.log(photographer, photographerMedia);
}

init();
