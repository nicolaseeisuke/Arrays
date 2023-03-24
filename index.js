let impar = [9,7,5,3,1]
var par = [8,6,4,2]
/*console.log(`O vetor impar é ${impar}`)
console.log(`O vetor par é ${par}`)*/
impar.sort()
par.sort()
console.log(`Em ordem fica ${impar}`)
console.log(`Em ordem fica ${par}`)

console.log(`O vetor impar tem ${impar.length} elementos`)
console.log(`O vetor par tem ${par.length} elementos`)

par.push(10)
console.log(`O vetor par ${par}`)

console.log(`na elemento 2 está na posição ${par.indexOf(2)}`)
impar[5] = 11
console.log(`Em ordem fica ${impar}`)
