/*

document.getElementByUd('id') - Acceder a un elemento a traves de su id

document.querySelector('selectorCSS') -  Accedemos al primer elemento que coincida con el selector css

document.querySelectorAll('selectorCSS') -- Accedemos a todos los elementos que coincidan con el selector css, devuelve un nodeList


*/

//Los elementos se guardan siempre en una constante

const title = document.getElementById("title");
console.log(title);
console.log(title.textContent);

title.textContent = "Accediendo a nodos "; // Modificamos el contenido del h1

// Me trae todo
const paragraph = document.querySelectorAll(".paragraph");
paragraph[0].style.color = "red";

// Pasamos cada elemento a una lista y luego si lo mapeamos
const paragraphSpread = [...document.querySelectorAll(".paragraph")];

paragraphSpread.map((p) => (p.style.color = "green"));

// Array
const paragraphArray = Array.from(document.querySelectorAll(".paragraph"));
clg;
paragraphSpread.map((p) => (p.style.color = "blue"));
paragraph// Un nodeList No es un array
.console
  .log(paragraph);
console.log();
