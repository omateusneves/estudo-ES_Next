function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('arapua')//aqui será dado um erro de referencoa já q 'con' nao existes
            if (Math.random() < chanceErro) {
                reject('Ocorreu um problema')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando', 0.1)
    .then(valor => `Valor é igual a: ${valor}`)
    .then(valor => console.log(valor),
        //erro => console.log(`Erro especifico: ${erro}`)//o erro está sendo tratado aqui nesse momento e somente nesse then, na propria promise e não nenhum valor será retornado a partir daqui
    )
    .then(console.log('Quase fim'))
    .catch(erro => console.log(`Erro geral: ${erro}`))//todos os erros são tratados aqui, por isso convem deixar para o final
    .then(()=> console.log('Fim de verdade'))