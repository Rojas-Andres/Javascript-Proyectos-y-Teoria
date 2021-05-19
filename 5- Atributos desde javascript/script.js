/*
Atributos
    element.getAttribute('attribute')
    element.setAttribute('attribute',value)

Clases
    element.classList.add('class','class',...)
    
    element.classList.remove('class','class',...)


    element.classList.add('class',[,force],...)    
    element.classList.contains('class')
    element.classList.replace('oldclass',newClass)
    
Atributos directos
    id
    value
*/

const title = document.getElementById('title')
const name = document.getElementById('name')


console.log(name.getAttribute('id'))
name.setAttribute('type','number')
title.classList.add('main-title')

if (title.classList.contains('title')) console.log('Title tiene la clase title')
else console.log('Title no tiene la clase title')

title.classList.replace('title','main-title')

console.log(name)
console.log(title)
