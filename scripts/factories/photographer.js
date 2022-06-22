function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        const section = document.createElement('section');

        const link = document.createElement('a');
        link.href = '../../photographer.html';
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        link.appendChild(article);

        const paragraphe = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = `${city}, ${country}`;
        const p1 = document.createElement('p');
        p1.textContent = tagline;
        const span = document.createElement('span');
        span.textContent = `${price}€/jour`;
        paragraphe.appendChild(h3);
        paragraphe.appendChild(p1);
        paragraphe.appendChild(span);

        section.appendChild(link);
        section.appendChild(paragraphe);
        return (section);
    }
    return { name, picture, getUserCardDOM }
}