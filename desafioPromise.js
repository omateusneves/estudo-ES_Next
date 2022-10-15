const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (e, conteudo) {
            resolve(conteudo.toString())
        })
       // console.log('Depois de ler')
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O conteúdo final é: ${conteudo}`)
    .then(console.log)