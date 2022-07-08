const PhotographersFactory = (data) => {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    const getUserCardDOM =() => {

        const section = document.createElement('section');

        section.innerHTML = `
        <a id=${id} href="../../photographer.html?photographer-id=${id}">
            <article>
            <img src="${picture}" alt="${name}">
            <h2>${name}</h2>
            </article>
        </a>
        <article>
            <h3>
            ${city}, ${country}
            </h3>
            <p>${tagline}</p>
            <span>
            ${price}/jour
            </span>
        </article>
        `

        return (section);
    }

    const getPhotographerPageDOM = () => {

        const header = document.querySelector('photograph-header');

        return (header);
    }

    return { name, picture, getUserCardDOM, getPhotographerPageDOM }
}