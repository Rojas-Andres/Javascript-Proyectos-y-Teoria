// DOM - crear e insertar elementos 

/* 
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML

    parent = ese elemento debe de ser hijo de alguien
Añadir un elemento al DOM: parent.appendChild(element)
Fragmentos de código: document.createDocumentFragment()
*/
const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

/* const itemList = document.createElement('LI')
itemList.textContent = 'Lunes'

daysList.appendChild(itemList) */

// Primera forma
/*
for (const day of days){
    daysList.innerHTML += `<li>${day}</li>`
}
*/

// Segunda forma mas optima -> creacion de fragmento esto se usa para la optimizacion de recursos ya que solo es al final que se toca el DOM
const fragment = document.createDocumentFragment()
console.log("Este es el fragmento creado -> ",fragment)
for (const day of days){
    const itemList = document.createElement('LI')
    itemList.textContent = day
    fragment.appendChild(itemList)
}
console.log(fragment)
// Solo una inyección de codigo modificamos el DOM
daysList.appendChild(fragment)

// Rellenar la lista desplegable del select

const fragment2 = document.createDocumentFragment()

for (const day of days){
    const selectItem = document.createElement('OPTION')
    selectItem.textContent = day
    // Le añadimos el atributo 
    selectItem.setAttribute('value',day.toLowerCase())

    fragment2.appendChild(selectItem)
}
selectDays.appendChild(fragment2)
