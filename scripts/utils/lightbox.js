// Creates the lightbox
const lightbox = document.createElement("div")
lightbox.id = 'lightbox'

document.getElementById('main').appendChild(lightbox)

// Open and close the lightbox

function displayLightbox() {
  const lightbox = document.getElementById("lightbox")
  lightbox.style.display = "block";
}

function closeLightbox() {
  const modal = document.getElementById("lightbox")
  lightbox.style.display = "none";
}

// Open when an image is clicked

const images = document.querySelectorAll('img')
console.log(images);

images.forEach( image => {
  image.addEventListener('click', e => {
    console.log('click');
  })
})