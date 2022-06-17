//para adciionar elelemnto a un array
//nesecitamos una variable auxliar mucho mwjor


const carrito =[]

const producto1 ={
    nombre:"monitor",
    precio:200,
}

const producto ={
    nombre:"tablet",
    precio:100,
}

const producto3 ={
    nombre:"parlante",
    precio:270,
}
//para añadir elementos a un array spreadoperator

let carritocopia = [...carrito,producto1]
carritocopia=[...carritocopia,producto ]
carritocopia=[...carritocopia,producto3 ]

console.log(carritocopia)