// Fetch data from .json file
const getPhotographers = async () => {
  const data = await fetch("../data/photographers.json").then((res) =>
    res.json()
  );
  const photographers = data.photographers;

  return {
    photographers: photographers,
  };
};

// Display styled data in home page
const displayData = async (photographers) => {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = PhotographersFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
};

// Run the other functions
const init = async () => {
  const { photographers } = await getPhotographers();
  displayData(photographers);
};

init();
