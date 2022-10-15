function tag(partes, ...valotes) {
    console.log(partes)
    console.log(valotes)
    return 'Outra sring'
}

const aluno = 'Luan'
const situação = 'Reprovado'

console.log(tag`${aluno} está ${situação}`)
//a função tag dentro da template string é capaz de dividir toda string interpolada


function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice],valor)
    })
    return resultado.join('')
}

const preco = 29.905665
const valorParcela = 10.9567778

console.log(real `O produto em 1x a vista sairá por ${preco} ou em 3x por ${valorParcela}.`)