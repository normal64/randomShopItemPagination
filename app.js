import fetchIt from "./src/fetch.js";
import displayItems from "./src/displayItems.js";
import display from "./src/displayItems.js";
import pagination from "./src/pagination.js";
import displayButtons from './src/displayButtons.js'
const url = "http://fakestoreapi.com/products?limit=20";
const title = document.querySelector('.title h2')
const btnContainer = document.querySelector('.paginate')

document.addEventListener("DOMContentLoaded", fetchIt(url));
let index = 0;
let pagedItems = [];

const   setupUI = ()    =>{
    console.log('setupUI reached');
    displayItems(pagedItems[index]);
    displayButtons(btnContainer,pagedItems,index)
}
btnContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("paginate")) return
    if(event.target.classList.contains("pagination-btn")){
        index   = parseInt(event.target.dataset.index)
    }
    setupUI();
})

const init = async()    =>{
    const items = await fetchIt(url);
    let staff   = pagination(items)
    title.textContent = "Items";
    pagedItems = staff;
    setupUI();
}
window.addEventListener('load', init);