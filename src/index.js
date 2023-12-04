//dom elements
const dogImageContainer = document.querySelector('#dog-image-container')
const dogBreedContainer = document.getElementById('dog-breeds')
const dropDown = document.getElementById('breed-dropdown')
let breedsArray
//fetch
const breedUrl = "https://dog.ceo/api/breeds/list/all"
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(dogImages => {
        renderImages(dogImages)
    })
fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
        breedsArray = Object.keys(breeds.message)
        renderBreeds(breedsArray)
    })

//render functions
function renderImages(dogImages){
    let dogImageArray = dogImages.message
    dogImageArray.forEach(dogImage => {
        const dogImageElement = document.createElement('img')
        dogImageElement.src = dogImage
        dogImageContainer.append(dogImageElement)
    })}
function renderBreeds(breedsArray){
    breedsArray.map(breed => {
        const breedLi = document.createElement('li')
        breedLi.textContent = breed
        dogBreedContainer.append(breedLi)

    breedLi.addEventListener('click', changeColor)
    })}


//callback function
function changeColor(e){
    e.target.style.color = 'Red'
}


dropDown.addEventListener('change', e =>{
    dogBreedContainer.innerHTML = ' ' 
    let letter = e.target.value
    let filteredBreed = breedsArray.filter(breed => breed.charAt(0) === letter)
    renderBreeds(filteredBreed)
    
})

