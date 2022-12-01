
const LIMIT = 20

  const getPokemons = async (page=1) =>{
    const offSet = (page - 1) * LIMIT
    const pokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${LIMIT}`);
    const pokemonsJson = await pokemonsResponse.json();
    return pokemonsJson.results.map((poke)=> {
      const split = poke.url.split('/');
       let id = split[split.length - 2];
      return {
        name: poke.name,
        imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
        pokeUrl: poke.url
      }
    })
  }

 

  const getSinglePokemon = async (pokeUrl) => {
    const pokemonRes = await fetch (pokeUrl)
    const pokemonJ = await pokemonRes.json();
    return pokemonJ
  }




export {getPokemons, getSinglePokemon}