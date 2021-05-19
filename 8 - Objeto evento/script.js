const form = document.getElementById('form')
const input = document.getElementById('input')
const link = document.getElementById('link')
const button = document.getElementById('button')


// Le pasamos el evento a la funcion
input.addEventListener('keyup',(e)=>{
    console.log(e)
})

const gallery = document.getElementById('gallery')
gallery.addEventListener('click', (e) => {
    if (e.target.id!="gallery"){
        e.target.classList.add('red')
    }
    console.log(e.target.id)
})

form.addEventListener('click',(e)=>{
    e.preventDefault()
})

link.addEventListener('click',(e)=>{
    e.preventDefault()
    //Llamamos al evento click y ese escribe en el input el valor de has hecho click
    button.click()
})

button.addEventListener('click',()=>{
    input.value="Has hecho click"
})