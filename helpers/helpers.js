let currentView;

function deleteDetail() {
  document.getElementById("id-detailCard").remove();
}

function viewHome() {
  if (currentView === "home") { alert('estamos aqui'); }
  currentView = "home";
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
  currentView="detail"
  const detailContainer = document.getElementsByClassName("detail-container");
  for (const iterator of detailContainer) {
    iterator.classList.remove("detail-container--notShow");
  }
}






export { deleteDetail, viewHome, hidePokemons, hideDetail, detailShow };
