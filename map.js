const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)//nao da certo
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, "objeto"],
    [123, 'Numero']
])

//um objeto nao tem chave, mas array tem

chavesVariadas.forEach((valor, chave) => {
    console.log(chave,valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

//chaves nao se repete mas valor sim
chavesVariadas.set(123,'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)