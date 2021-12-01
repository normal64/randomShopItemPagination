
const fetchIt = async(url)    =>  {
    try{
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.log(error);
    }
}
export default fetchIt;