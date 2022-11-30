const getPokemons = async () => {

    const pokemons= []
    for (let i = 1; i < 152; i++) {
  
    const pokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemonsJson = await pokemonsResponse.json();
    pokemons.push(pokemonsJson);
    
    }
    return pokemons;
  }

export {getPokemons}