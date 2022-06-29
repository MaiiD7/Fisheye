const getPhotographers = async () => {
    const data = await fetch('../data/photographers.json').then(res => res.json() );
    const photographers = data.photographers;

    return ({
        photographers: photographers})
}

const displayData = async (photographers) => {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographersFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

const init = async () => {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();