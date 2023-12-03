// // Challenge 4
// // Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a 
// particular letter using a dropdownLinks to an external site..

// // For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, 
// the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet.


//dom elements
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const ImageContainer = document.querySelector('#dog-image-container')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const ulELement = document.querySelector('#dog-breeds')
const dropDownMenu = document.querySelector('#breed-dropdown')
let breedsArray
let liElement
//fetch
fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogImageObject => {
        let dogImages = dogImageObject.message
        renderImage(dogImages)
    })
fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
         breedsArray = Object.keys(breeds.message)
        renderBreed(breedsArray)
    })
    
//render functions
function renderImage(dogImages){
    dogImages.forEach(dogImage => {
        const imgElement = document.createElement('img')
        imgElement.src = dogImage
        ImageContainer.appendChild(imgElement)
    })}
function renderBreed(breedsArray){
    breedsArray.forEach(breed => {
         liElement = document.createElement('li')
        liElement.textContent = breed
        ulELement.appendChild(liElement)

        liElement.addEventListener('click', changeColor)  //must be inside here so that event listener is attached to each lielement created
    })}


//callback functionss
function changeColor(e){
    e.target.style.color = 'red'
}

function filter(e){
    ulELement.innerHTML = ' '
    let letter = e.target.value
    let filteredBreed = breedsArray.filter(breed => breed.charAt(0) === letter)
    renderBreed(filteredBreed)
}

dropDownMenu.addEventListener('change', filter)
