//Aqui tramos el elemento html 
let gallery = document.getElementById('gallery');
//console.log(gallery);


const myGallery = htmlElement =>{
 const photos = htmlElement.getElementsByTagName('img');
 console.log(photos);
 //volviendo la colección de html en arreglo
 const photoArray = Array.from(photos);
console.log(photoArray);
//iterando en los elementos del array para colocarlos dentro de su etiqueta figure
photoArray.map(function(photo){
const image = document.createElement('img');
const figure = document.createElement('figure');
const figCapt = document.createElement('figcaption');

image.src = photo.src;
figCapt.innerHTML= photo.alt;

figure.appendChild(image);
figure.appendChild(figCapt);
gallery.appendChild(figure);
})
}
myGallery(gallery);
//window.addEventListener('click', myGallery);