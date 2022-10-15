//permite fazer apenas sicrono
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''
        res.on('data', dados => {
            resultado += dados
        })
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', aluns => {
   // console.log(aluns[0].nome)
    nomes = nomes.concat(aluns.map(a => `A: ${a.nome}`))
    getTurma('B', aluns => {
       // console.log(aluns[0].nome)
        nomes = nomes.concat(aluns.map(b => `B: ${b.nome}`))
        getTurma('A', aluns => {
           // console.log(aluns[0].nome)
            nomes = nomes.concat(aluns.map(c => `C: ${c.nome}`))
            console.log(nomes)
        })
    })
})