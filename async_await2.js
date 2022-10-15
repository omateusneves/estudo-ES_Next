//um await nao pode ser adicionado diretamente no codigo. Precisa estar dentro de uma função async, ou ser oriunda de uma função async

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() =>resolve(),tempo)
    })
}

// isso nao pode: await esperarPor(3000)

esperarPor(2000)
    .then(()=>console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(()=>console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(console.log('Executando promise 3...'))//sem função ele executa direto

function retornaValor() {
    return new Promise(resolve => {
        setTimeout(()=> resolve(10),5000)
    })
}

async function retornaValorRapido() {
    return 20
}

async function executar() {//executa um await por vez na sequencia
    // let valor = await retornaValor()
    let valor = await retornaValorRapido()
    await esperarPor(1500)//toda função que retonra promise pode ser usada await
    console.log(`Async/Await 1 ${valor}...`)
    await esperarPor(1000)
    console.log(`Async/Await 2 ${valor +1}...`)
    await esperarPor(4005)
    console.log(`Async/Await 3 ${valor + 2}...`)
    
    return valor +3//nao vai aparecer por conta de ser async
} 

async function executandoDeVerdade() {
    const resultado = await executar()
    console.log(resultado)
}

executandoDeVerdade()
//executar().then(console.log)//acessa valor sincrono