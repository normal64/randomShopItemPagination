const pagination = (items) =>{
    const itemsPerPage = 4;
    const numberOfPages = Math.ceil(items.length /itemsPerPage);
    console.log("items in pagination",items);
    const newItems = Array.from({length:numberOfPages},
        (_,index)=>{
            const start = index *   itemsPerPage;
            return items.slice(start,start +    itemsPerPage )
        });
    return newItems;
}

export default pagination;