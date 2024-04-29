const getStoredHome = () =>{
    const storedHome = localStorage.getItem('city home detailed');
    if(storedHome){
        return JSON.parse(storedHome);
    }
    return [];
}


const saveHomes = idInt =>{
    const storedHome = getStoredHome();
    const exists = storedHome.find(id => id === idInt);
    if(!exists){
        storedHome.push(idInt);
        localStorage.setItem(' home details', JSON.stringify(storedHome))
    }
    console.log(getStoredHome, saveHomes)
}

export { getStoredHome, saveHomes}