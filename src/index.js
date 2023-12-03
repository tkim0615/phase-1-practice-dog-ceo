console.log('%c HI', 'color: firebrick')
let breedsArray = []


document.addEventListener('DOMContentLoaded', ()=> {


    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(images => {
            renderDogs(images)
        })
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(breeds => {
            breedsArray = Object.keys(breeds.message)
            renderDogBreed(breedsArray)
        })

        const dropDown = document.querySelector('#breed-dropdown')
        dropDown.addEventListener('change', handleChange)

    })
  

function renderDogs(images){
    images.message.forEach(message => {
        const imgElement = document.createElement('img')
        imgElement.src = message
        const divImgELement = document.querySelector('#dog-image-container')
        divImgELement.appendChild(imgElement)
    })
}
function renderDogBreed(breedsArray){
       //breeds is an object and breeds.message is the array of breed. dot.xxx indicate it's object
    breedsArray.forEach(breed => {                //breedsarray is not defined globally so it can be accessed for dropdown funciton below
        const breedUl = document.querySelector('#dog-breeds')
        const breedLiElement = document.createElement('li')
        breedLiElement.textContent = breed
        breedUl.appendChild(breedLiElement)
    
        breedLiElement.addEventListener('click', changeColor)
    })
}

//callbacks
function changeColor(ee){
    ee.target.style.color = "yellow"
}

function handleChange(e){
    const breedUl = document.querySelector('#dog-breeds')
    breedUl.innerHTML = ' '
    let letter = e.target.value
    let newFiltered = breedsArray.filter(breed => breed.charAt(0) === letter)
    console.log(newFiltered)
    renderDogBreed(newFiltered)   


}