///permite fazer assincrono

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
    resolve(JSON.parse(resultado))
                }   
                catch (e) {
                    reject(e)
}
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))//concatenou tudo dentro de uma turma só
    .then(alunos => alunos.map(aluno => aluno.nome))//pegou só o nome dos alunos
    .then(nomes => console.log(nomes))
    
getTurma('D').catch(e => console.log(e.message))