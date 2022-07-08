// Open and close the lightbox

function displayLightbox() {
  const lightbox = document.getElementById("lightbox")
  lightbox.style.display = "block";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox")
  lightbox.style.display = "none";
}

const Lightbox = (photographerMedias, photographer) => { 
  const previous = document.querySelector(".previous")
  const next = document.querySelector(".next")

  // Open when an image is clicked

  function getLightboxContent(index) {
    const {name} = photographer;
    const firstName = name.substring(0,name.indexOf(' '));
    const lightboxMedia = document.getElementById('lightboxMedia')
    const titleContainer = document.getElementById("title")
  
    if (photographerMedias[index].image) {
      lightboxMedia.innerHTML = `
      <img src="assets/images/${firstName}/${photographerMedias[index].image}" alt="${photographerMedias[index].image}" class="carousel">
    `
    } else {
      lightboxMedia.innerHTML = `
      <video width="350" height="300" controls class="carousel">
       <source src="assets/images/${firstName}/${photographerMedias[index].video}" type="video/mp4" alt="${photographerMedias[index].video}">
      </video>
      `
    }
    titleContainer.innerHTML = photographerMedias[index].title
  
    displayLightbox()
  }

  const lightboxData = () => {
    let images = document.querySelectorAll(".images")
    let index = 0;

    images.forEach( image => {
      image.addEventListener('click', e => {
        index = photographerMedias.findIndex(object => {
          return object.image == e.target.alt
        })
        
        getLightboxContent(index)

      })
    })

    previous.addEventListener('click', e => {
      if (index == 0) {
        index = (photographerMedias.length-1)
      } else {
        index -= 1
      }
      console.log(index);
      getLightboxContent(index)
    })

    next.addEventListener('click', e => {
      if (index == photographerMedias.length-1) {
        index = 0
      } else {
        index += 1
      }
      console.log(index);
      getLightboxContent(index)
    })

     
  }
  
  return { lightboxData }
}
