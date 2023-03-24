let valores = [8,1,7,4,2,9]
valores.push(6)
console.log(`${valores}`)
//console.log(valores[4])

for(var pos=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for(let pos in valores){
   console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/*let pos = valores.indexOf(9)
if(pos ==-1){
    console.log('esse valor não foi encontrado')
}
else{
    console.log(`Esse valor esta na posição ${pos}`)
}*/