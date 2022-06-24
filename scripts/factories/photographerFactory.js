function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        const section = document.createElement('section');

        section.innerHTML = `
        <a id=${id} href="../../photographer.html?${id}">
            <article>
            <img src="${picture}" alt="id_picture">
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
    return { name, picture, getUserCardDOM }
}