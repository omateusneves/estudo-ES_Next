function gerarNumEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve,reject) => {
        const aleatorio = parseInt(Math.random() * (max - min) + 1) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido')//valida se o número já saiu
        } else {
            resolve(aleatorio)
        }
        
    })
}

async function gerarMegaSena(qtdeNumeros,tentatativas = 1) {
    try { 
    const numeros = []
    for (let qualquerCoisa of Array(qtdeNumeros).fill()) {
        numeros.push(await gerarNumEntre(1, 60, numeros))
    }
    return numeros//resolve a promise
    } catch (e) {
        if (tentatativas > 10) {
            
            throw "Deu ruim"
        } else {
            return gerarMegaSena(qtdeNumeros, tentatativas + 1)
        }
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)