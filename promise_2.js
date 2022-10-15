// setTimeout(() => {
//     console.log('Executando callback')
//     setTimeout(() => {
//         console.log('Executando callback')
//         setTimeout(() => {
//             console.log('Executando callback')
//         }, 2000)
//     }, 2000)
// }, 2000)

function esperandoPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve()//esperado uma promise
            
        },tempo)
    })
}

esperandoPor()
    .then(()=>esperandoPor())
    .then(esperandoPor)