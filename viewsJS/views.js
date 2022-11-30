import { getPokemons } from "../info.js";
import {
  deleteDetail,
  viewHome,
  hidePokemons,
  hideDetail,
  detailShow,
} from "../helpers/helpers.js";

const pokeArray = await getPokemons();

function showHome() {
  viewHome();
  hidePokemons();
  hideDetail();
  
}

function paintPokemons() {
  const pokemonContainer =
    document.getElementsByClassName("pokemons-container");
  pokeArray.map((pokemon) => {
    const pokeCard = document.createElement("div");
    const pokeName = document.createElement("p");
    const pokeImg = document.createElement("img");

    pokeCard.classList.add("div-pokemon");
    pokeImg.classList.add("div-pokemon__img");

    pokeName.innerText = pokemon.name;
    pokeImg.src = pokemon.sprites.other.dream_world.front_default;

    pokeCard.appendChild(pokeName);
    pokeCard.appendChild(pokeImg);

    pokeCard.addEventListener("click", () => showDetail(pokemon));

    for (const iterator of pokemonContainer) {
      iterator.appendChild(pokeCard);
    }
  });
}

function showDetail(pokemon) {
  console.log(pokemon);
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

  detailName.innerText = pokemon.name;
  detailType.innerText = "TYPE: " + pokemon.types[0].type.name;
  detailWeight.innerText = "Weight: " + pokemon.weight;
  detailImg.src = pokemon.sprites.other.dream_world.front_default;

  detailCard.appendChild(detailName);
  detailCard.appendChild(detailType);
  detailCard.appendChild(detailWeight);
  detailCard.appendChild(detailImg);

  for (const iterator of detailContainer) {
    iterator.appendChild(detailCard);
  }
}

export { paintPokemons, showHome };
