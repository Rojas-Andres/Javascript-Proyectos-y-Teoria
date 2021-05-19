const addNumbers = (a,b,c)=>{
    console.log(a+b+c)
}

let numbers =[1,2,3]

addNumbers(...numbers)

// Añadir un array a otro array

let users = ["javier","david","rosa","juan"]
let new_users = ["andres","felipe","mercedes"]

users.push(...new_users)

//copiar arrays

let arr1 = [1,2,3,4]
let arr2 = [...arr1]

console.log(arr2)

// concatenar arrays

let ar1 = [1,2,3,4,5]
let ar2 = [6,7,5]
let arr3_concat = [...ar1,...ar2]
//let arrContact = arr1.contact(arr2)

console.log(arr2)

// parametros rest

const restParams = (...numbers)=>{
    console.log(numbers)
}

restParams(1,2,3,1,1,2,2,1,3,4)


//Libreria math

const numbers2 = [-12,2,3,2,23,43,2,3]

console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

// Eliminar elemetnos duplicados

console.log([...new Set(numbers2)])

