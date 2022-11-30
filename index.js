import {paintPokemons, showHome} from "./viewsJS/views.js";
import { showListPokemons } from "./helpers/helpers.js";

const showPokemons = document.getElementsByClassName("pokemons");
for (const showpoke of showPokemons) {
  showpoke.addEventListener("click", () => showListPokemons());
}

const home = document.getElementsByClassName("header-container__img")
for (const iterator of home) {
    iterator.addEventListener("click", () => showHome())
}

paintPokemons()








