const container = document.querySelector(".items-container");

const display = (items) => {
    const newItems = items.map((item) => {
        const {title,   price, description, category,   image,rating:{rate: rate} } = item;
        return `
        <article class="item">
        <h3>${title}</h3>
        <p>$${price}</p>
        <p>${description}</p>
        <p>${category}</p>
        <img src="${image}" alt="item image">
        <p>Rate: ${rate}</p>
    </article>
        `
    }).join("");
    container.innerHTML = newItems;

}
export default display;
