function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, rejected) => {//a promise sempre tem valor aceito e rejeitado
        setTimeout(()=> {
            resolve(frase)
     },segundos*1000)      
    })
}

falarDepoisDe(2, 'Show de bola!')
    .then(frase => frase.concat('?!?!?!'))//execeuta esse primeiro
    .then(outraFrase => console.log(outraFrase))
    .catch(e=>console.log(e))//captura erro caso seja rejected