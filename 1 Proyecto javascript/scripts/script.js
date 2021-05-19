
const daysList = document.getElementById('daysList')
const opciones = document.getElementById('opciones')

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
const fragment = document.createDocumentFragment()

for(const day of days){
    itemDay = document.createElement('LI')
    itemDay.setAttribute('value',day) 
    itemDay.setAttribute('id',day)   
  
    itemDay.textContent=day
    fragment.appendChild(itemDay)
}

daysList.appendChild(fragment)

daysList.addEventListener('click',(e)=>{
    let lista=[]    
    const val = e.target.textContent
    
    for(const a of opciones.children){
        lista.push(a.textContent)
    }

    if (lista.includes(val)){
        var el = document.getElementById(`opciones-${val}`);
        // Lo eliminamos del DOM
        el.remove()
        console.log("Eliminado de opciones " + val)
    }
    else{
        selectItem = document.createElement('OPTION')
        selectItem.textContent=val
        selectItem.setAttribute('value',val)
        //Le agregamos un id unico
        selectItem.setAttribute('id',`opciones-${val}`)
        // Lo agregamos al DOM
        opciones.appendChild(selectItem)
        console.log("Agregado a opciones "+val)
    }
    //console.log(opciones.children)
})