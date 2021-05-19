
const numbers = document.getElementById('numbers')
const result = document.getElementById('result')

let a = prompt("Introduzca el primer numero")
let b = prompt("Introduzca el segundo numero")
let c = prompt("Introduzca el tercer numero")

//numbers.textContext = `Los numeros introducidos son ${a} , ${b} , ${c}`
numbers.textContent = `Los numeros introducidos son ${a} , ${b} , ${c}`;


/* Ejercicio */

if(a>b && a>c){
    result = `El numero mayor es ${a} `;
}
else if(b>a && b>c){
    result =`El numero mayor es ${b} `;
}
else if(c>a && c>b){
    result =`El numero mayor es ${c} `;
}