const getDogs = async () =>{
    const dogsAPI = await fetch ('https://back-pets-frandl92.vercel.app/pets')
    const dogsJSON = await dogsAPI.json();
    const dogsArray = await dogsJSON.Perrekes
    return dogsArray
}

export {getDogs}