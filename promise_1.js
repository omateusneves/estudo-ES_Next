new Promise((resolve) => {
    resolve(['Joaquina','Maicon','Luiza'])
})
    //.then(valor => valor[0])
    .then(primerioElemeneto)
    .then(primeiro => primeiro[1])
    .then(letr => letr.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

function primerioElemeneto(array) {
    return array[0]
}

