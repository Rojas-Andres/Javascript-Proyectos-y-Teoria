/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón
Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/


//Localizamos
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const box = document.getElementById('box')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const input = document.getElementById('input')

//Escuchamos el evento
button1.addEventListener('click',()=>{
    console.log("Se pulso click")
})

button2.addEventListener('dblclick',()=>{
    console.log("Se pulso click 2 veces")
})

// Cuando entramos a la caja lo pone verde
box.addEventListener('mouseenter',()=>{
    /*
    1 forma
    box.style.background="green"

    2 forma
    Eliminamos el backgroud que le dimos en styles.css red porque es en cascada y luego añadimos el verde
    box.classList.remove('red')

    box.classList.add('green')
    */
    //Tercera forma
    box.classList.replace('red','green')
    

})

// Cuando el mouse no esta en la caja lo pone rojo
box.addEventListener('mouseleave',()=>{
    // Eliminamos el backgroud que le dimos en styles.css green porque es en cascada y luego añadimos el rojo

    //box.classList.remove('green')
    //box.classList.add('red')
    box.classList.replace('green','red')
})

box2.addEventListener('mousedown',()=>{
    console.log("has pulsado")
})


box2.addEventListener('mouseup',()=>{
    console.log("has soltado el boton pulsado")
})


box3.addEventListener('mousemove',()=>{
    console.log("Estas moviendo el raton en la caja")
})

input.addEventListener('keydown',()=>{
    console.log("has pulsado una tecla");
})

input.addEventListener('keyup',()=>{
    console.log("has soltado una tecla");
})

input.addEventListener('keypress',()=>{
    console.log("Estas pulsando una tecla");
})