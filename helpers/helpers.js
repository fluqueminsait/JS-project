function deleteDetail() {
  document.getElementById("id-detailCard").remove();
}

function viewHome() {
  const sectionHome = document.getElementsByClassName("section-container");
  for (const iterator of sectionHome) {
    iterator.classList.remove("section-container--notShow");
  }
}

function hideDetail(){
    const detailContainer = document.getElementsByClassName("detail-container");
  for (const iterator of detailContainer) {
    iterator.classList.add("detail-container--notShow");
  }
}

function hidePokemons() {
  const pokemonContainer =
    document.getElementsByClassName("pokemons-container");
  for (const iterator of pokemonContainer) {
    iterator.classList.add("pokemons-container--notShow");
  }
}

function detailShow() {
  const detailContainer = document.getElementsByClassName("detail-container");
  for (const iterator of detailContainer) {
    iterator.classList.remove("detail-container--notShow");
  }
}

function showListPokemons() {
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
}

export { deleteDetail, viewHome, hidePokemons, showListPokemons, hideDetail, detailShow };
