
// dentro do rest, o operador spread tem função de juntar valores dentro de um array passando como parametro
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(3, 5, 6, 6))

//fora do rest o spread serve para espalhar valores dentro de um array
const funcionario = { nome: 'Marcola', salario: 1936.59 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

const grupoA = ['Carlos', 'Luan', 'Leonel']
const grupoFinal = ['Leandro', ...grupoA, 'Jean']
console.log(grupoFinal)