import { getPokemons } from "../apiCall/apiPokemon.js";
import { viewHome, hidePokemons, hideDetail } from "../helpers/helpers.js";
import { showDetail } from "./detail.js";

let page = 1;
let currentView;

const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

btnNext.addEventListener("click", nextPage);
btnPrev.addEventListener("click", prevPage);

async function nextPage() {
  page++;
  if (page > 57) {
    alert("Esta es la ultima pagina");
  }
  const nextPage = await getPokemons(page);
  paintPokemons(nextPage);
}

async function prevPage() {
  page--;
  if (page <= 1) {
    alert("La siguiente es la primera pagina");
  }
  const prevPage = await getPokemons(page);
  paintPokemons(prevPage);
}

function showHome() {
  viewHome();
  hidePokemons();
  hideDetail();
}

async function showListPokemons() {
  if (currentView === "pokemonList") {
    alert("ya estas aqui");
  }
  currentView = "pokemonList";

  const sectionHome = document.getElementsByClassName("section-container");
  for (const iterator of sectionHome) {
    iterator.classList.add("section-container--notShow");
  }
  const pokemonContainer =
    document.getElementsByClassName("pokemons-container");
  for (const iterator of pokemonContainer) {
    iterator.classList.remove("pokemons-container--notShow");
  }
  const detailContainer = document.getElementsByClassName("detail-container");
  for (const iterator of detailContainer) {
    iterator.classList.add("detail-container--notShow");
  }

  const pokeArray = await getPokemons();
  paintPokemons(pokeArray);
}

function paintPokemons(pokeArray) {
  const pokemonContainer = document.getElementsByClassName(
    "pokemons-container__cardContainer"
  );
  for (const iterator of pokemonContainer) {
    iterator.innerHTML = "";
  }

  pokeArray.map((pokemon) => {
    const pokeCard = document.createElement("div");
    const pokeName = document.createElement("p");
    const pokeImg = document.createElement("img");

    pokeCard.classList.add("div-pokemon");
    pokeImg.classList.add("div-pokemon__img");

    pokeName.innerText = pokemon.name;
    pokeImg.src = pokemon.imgUrl;

    pokeCard.appendChild(pokeName);
    pokeCard.appendChild(pokeImg);

    pokeCard.addEventListener("click", () => showDetail(pokemon));

    for (const iterator of pokemonContainer) {
      iterator.appendChild(pokeCard);
    }
  });
}

function welcomeMessage() {
  setTimeout(alert("Hi! Welcome to the JavaScript assignment"), 1000);
}

export { showHome, welcomeMessage, showListPokemons };

// paintPokemons recibe array que quiero pintar, limpia lo que estuvieran y pinta lo nuevo.
