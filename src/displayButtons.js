const   displayButtons = (container, pagedItems, activeIndex)  =>{
    let btns = pagedItems.map((_,pageIndex) =>{
        return `
        <button class="pagination-btn   
        ${activeIndex   === pageIndex ? "active-btn" : 'null'}"
        data-index="${pageIndex}">
        ${pageIndex + 1}
        </button>
        `
    } )
    container.innerHTML = btns.join("");
}
export default displayButtons;