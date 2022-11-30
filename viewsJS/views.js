import { getPokemons, getSinglePokemon } from "../info.js";
import {
  deleteDetail,
  viewHome,
  hidePokemons,
  hideDetail,
  detailShow,
} from "../helpers/helpers.js";




let page = 1;

const btnNext = document.getElementById('next')
const btnPrev= document.getElementById('prev')

btnNext.addEventListener('click',  nextPage)
btnPrev.addEventListener('click', prevPage)

async function nextPage() {
  page++;
  const nextPage = await getPokemons(page)
  paintPokemons(nextPage)
}

async function prevPage() {
  page--;
  const prevPage = await getPokemons(page)
  paintPokemons(prevPage)
}

function showHome() {
  viewHome();
  hidePokemons();
  hideDetail();
}

async function showListPokemons() {
  // if(currentView === "pokemonList"){alert("ya estas aqui")}
  // currentView = "pokemonList";
  
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
  
    const pokePrueba = await getPokemons()
    paintPokemons(pokePrueba)
    
  }

function paintPokemons(pokePrueba) {
  const pokemonContainer =
    document.getElementsByClassName("pokemons-container__cardContainer");
    for (const iterator of pokemonContainer) {
      iterator.innerHTML = "";
    }
    

    
  pokePrueba.map((pokemon) => {
   
    const pokeCard = document.createElement("div");
    const pokeName = document.createElement("p");
    const pokeImg = document.createElement("img");

    pokeCard.classList.add("div-pokemon");
    pokeImg.classList.add("div-pokemon__img");

    pokeName.innerText = pokemon.name;
    pokeImg.src = pokemon.imgUrl

    pokeCard.appendChild(pokeName);
    pokeCard.appendChild(pokeImg);

    pokeCard.addEventListener("click", () => showDetail(pokemon));

    for (const iterator of pokemonContainer) {
      iterator.appendChild(pokeCard);
    }
  });
  
}

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

function welcomeMessage(){
  setTimeout(alert("Hi! Welcome to the JavaScript assignment"), 1000)
}



export {  showHome, welcomeMessage, showListPokemons };

// paintPokemons recibe array que quiero pintar, limpia lo que estuvieran y pinta lo nuevo.