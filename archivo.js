let nuevoElemento = document.createElement("main")

nuevoElement.id = "nuevo"
nuevoElemento.textContent = "Hola, soy nuevo elemento*"

let cuerpoHTML = document.querySelector("body")

cuerpoHTML.appendChild(nuevoElemento)
console.log(nuevoElemento)