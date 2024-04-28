const getStoredCityHome = () =>{
    const storedCityHome = localStorage.getItem('city home detailed');
    if(storedCityHome){
        return JSON.parse(storedCityHome);
    }
    return [];
}


const saveCityHomes = id =>{
    const storedCityHome = getStoredCityHome();
    const exists = storedCityHome.find(bookId => bookId === id);
    if(!exists){
        storedCityHome.push(id);
        localStorage.setItem('city home details', JSON.stringify(storedCityHome))
    }
    console.log(getStoredCityHome, saveCityHomes)
}

export { getStoredCityHome, saveCityHomes}