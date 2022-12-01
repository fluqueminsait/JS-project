import { detailShow, deleteDetail, hidePokemons } from "../helpers/helpers.js";
import { getSinglePokemon } from "../apiCall/apiPokemon.js";

 async function showDetail(pokemon) {
    const singlePoke = await getSinglePokemon(pokemon.pokeUrl)
  
    if (document.getElementById("id-detailCard")) {
      deleteDetail();
    }
    const detailContainer = document.getElementsByClassName('detail-container')
    hidePokemons();
    detailShow();
  
    const detailCard = document.createElement("div");
    const detailName = document.createElement("p");
    const detailType = document.createElement("p");
    const detailWeight = document.createElement("p");
    const detailImg = document.createElement("img");
    detailCard.id = "id-detailCard";
  
    detailCard.classList.add("div-pokemon");
    detailImg.classList.add("div-pokemon__img");
    detailName.classList.add("div-pokemon__name");
    detailType.classList.add("div-pokemon__type");
    detailWeight.classList.add("div-pokemon__weight");
  
    detailName.innerText = singlePoke.name;
    detailType.innerText = "TYPE: " + singlePoke.types[0].type.name;
    detailWeight.innerText = "Weight: " + singlePoke.weight;
    detailImg.src = singlePoke.sprites.other.dream_world.front_default;
  
    detailCard.appendChild(detailName);
    detailCard.appendChild(detailType);
    detailCard.appendChild(detailWeight);
    detailCard.appendChild(detailImg);
  
    for (const iterator of detailContainer) {
      iterator.appendChild(detailCard);
    }
  }

  export { showDetail }
  