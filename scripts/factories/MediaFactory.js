const MediaFactory = (photographer,photographerMedias) => {
  const main = document.getElementById('main');
  const section = document.createElement('section');
  const aside = document.createElement('aside');
  const {name, price} = photographer;
  let totalLikes = 0;

  section.classList.add('medias-section')
  aside.classList.add('infos')

  main.appendChild(section);
  section.appendChild(aside);

  const mediaDisplay = () => {

    photographerMedias.forEach((photographerMedia) => {
      const article = document.createElement('article');  
      const {image, video, title, likes} = photographerMedia;
      const firstName = name.substring(0,name.indexOf(' '));
      let likeFlag = false;
  
      article.classList.add('media-container')
     
      if (image) {
        article.innerHTML = `
          <img src="assets/images/${firstName}/${image}" alt="${image}" class="images">
          <div>
            <h5>${title}</h5>
            <div>
              <p>${likes}</p>
              <i class="fa-solid fa-heart heart"></i>
            </div>
          </div>
        `
      } else if (video) {
        article.innerHTML = `
          <video width="350" height="300" class="images">
           <source src="assets/images/${firstName}/${video}" type="video/mp4" alt="${video}">
          </video>
          <div>
            <h5>${title}</h5>
            <div>
              <p>${likes}</p>
              <i class="fa-solid fa-heart heart"></i>
            </div>
          </div>
        `
      }
  
      section.appendChild(article);
      totalLikes += likes;
    })
  
    aside.innerHTML = `
      <div>
        <p id="totalLikes">${totalLikes}</p>
        <i class="fa-solid fa-heart"></i>
      </div>
      <p>${price}€/jour</p>
    `
  }

  return { mediaDisplay }
}