//executando then quando todas promises estiver pronta

function gerarNumEntre(min, max,tempo) {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function () {
            const aleatorio = parseInt(Math.random() * (max - min) + 1) + min
            resolve(aleatorio)
        },tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumEntre(1,5,4000),
        gerarNumEntre(6,10,1000),
        gerarNumEntre(11,15,100),
        gerarNumEntre(16,20,500),
        gerarNumEntre(21,25,1500),
    ])
}

console.time('Tempo de execução')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('Tempo de execução')
    })