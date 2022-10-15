//nao aceita repetição e nao possui indice

const times = new Set()

times.add('Vasco')
times.add('Botafogo').add('Corinthians').add('São paulo')
times.add('Birmiham')
times.add('Nortinham')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))//nao vai achar pois primeira letra é minuscula
console.log(times.has('Vasco'))
times.delete('São paulo')
console.log(times.has('São paulo'))

const nomes = ['horacio', 'Cido', 'Mara', 'Cido']

const nomesSet = new Set(nomes)
console.log(nomesSet)


