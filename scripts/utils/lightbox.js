// Open and close the lightbox

function displayLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("visible");
  lightbox.style.display = "block";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("visible");
  lightbox.style.display = "none";
}

// Runs when an image is clicked
const Lightbox = (photographerMedias, photographer) => {
  const previous = document.querySelector(".previous");
  const next = document.querySelector(".next");

  // Get the media to display in lightbox using its path and index
  function getLightboxContent(index) {
    const { name } = photographer;
    const firstName = name.substring(0, name.indexOf(" "));
    const lightboxMedia = document.getElementById("lightboxMedia");
    const titleContainer = document.getElementById("title");

    if (photographerMedias[index].image) {
      lightboxMedia.innerHTML = `
      <img src="assets/images/${firstName}/${photographerMedias[index].image}" alt="${photographerMedias[index].title}" class="carousel" id="media">
    `;
    } else {
      lightboxMedia.innerHTML = `
      <video width="350" height="300" controls class="carousel">
       <source src="assets/images/${firstName}/${photographerMedias[index].video}" type="video/mp4" alt="${photographerMedias[index].title}" id="media">
      </video>
      `;
    }
    titleContainer.innerHTML = photographerMedias[index].title;

    displayLightbox();
  }

  // Use previous functions and add navigation using event listeners
  const lightboxData = () => {
    let images = document.querySelectorAll(".images");
    let index = 0;

    images.forEach((image) => {
      image.addEventListener("click", (e) => {
        index = photographerMedias.findIndex((object) => {
          return object.image == e.target.alt;
        });

        getLightboxContent(index);
        document.getElementById('lightboxMedia').focus();
      });

      image.addEventListener("keydown", e => {
        if (image == document.activeElement && e.key == 'Enter'){
          index = photographerMedias.findIndex((object) => {
            return object.image == e.target.alt;
          });
  
          getLightboxContent(index);
          document.getElementById('lightbox').focus();
        }
      })
    });

    // Navigate on click
    previous.addEventListener("click", (e) => {
      if (index == 0) {
        index = photographerMedias.length - 1;
      } else {
        index -= 1;
      }
      getLightboxContent(index);
      document.getElementById('lightboxMedia').focus();
    });

    next.addEventListener("click", (e) => {
      if (index == photographerMedias.length - 1) {
        index = 0;
      } else {
        index += 1;
      }
      getLightboxContent(index);
      document.getElementById('lightboxMedia').focus();
    });

    // Navigate using the keyboard
    document.addEventListener("keydown", (e) => {
      const lightbox = document.getElementById("lightbox");
      if (lightbox.classList.contains("visible")) {
        switch (e.key) {
          case "ArrowRight":
            if (index == photographerMedias.length - 1) {
              index = 0;
            } else {
              index += 1;
            }
            getLightboxContent(index);
            document.getElementById('lightboxMedia').focus();
            break;
          case "ArrowLeft":
            if (index == 0) {
              index = photographerMedias.length - 1;
            } else {
              index -= 1;
            }
            getLightboxContent(index);
            document.getElementById('lightboxMedia').focus();
            break;
          case "Escape":
            closeLightbox();
            break;
        }
      }
    });
  };

  return { lightboxData };
};
