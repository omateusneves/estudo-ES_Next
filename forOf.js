for (let letra of "joselito") {
    console.log(letra)
}

const assuntoLol = ["leona", "ashe", "TF"]

for (let i in assuntoLol) {
    console.log(i)
}

//for of cuida para trazer somente o valor
for (let assunto of assuntoLol) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map',{jaFoiFalado:true}],
    ['Set',{jaFoiFalado:false}],
    ['Promise',{jaFoiFalado:false}]
])

for (let assunto of assuntoMap) {
    console.log(assunto)
}

for (let chave of assuntoMap.keys()) {
    console.log(chave)
}

for (let valor of assuntoMap.values()) {
    console.log(valor)
}

for (let [ch,val] of assuntoMap.entries()) {
    console.log(ch, val)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}