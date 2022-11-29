import { getDogs } from "./info.js";
const dogsArray = await getDogs();
console.log(dogsArray)

const showDogs = document.getElementsByClassName('dog')
for (const showDog of showDogs) {
    showDog.addEventListener('click',() => paintDogs())
}

function paintDogs (){
    const sectionHome = document.getElementsByClassName('section-container')
    for (const iterator of sectionHome) {
        iterator.classList.add('section-container--disabled')
    }
    const petsContainer = document.getElementsByClassName('pets-container')
    for (const iterator of petsContainer) {
        iterator.classList.remove('pets-container--notShow')
    }
    dogsArray.map((dog)=> {
        const dogCard = document.createElement('div')
        const dogBreed = document.createElement('p')

        dogBreed.innerText = dog.breed

        dogCard.appendChild(dogBreed)

        dogCard.addEventListener('click', () =>showDetail(dog))

        
        for (const iterator of petsContainer) {
            iterator.appendChild(dogCard)
            
        }
    })
}

function showDetail(dog){
    console.log(dog)
const petsContainer = document.getElementsByClassName('pets-container')
for (const iterator of petsContainer) { 
    iterator.classList.add('pets-container--notShow');
}

}


