var agora = new Date
var horas = agora.getHours()

// para poder pegar a hora em tempo real

console.log(`Agora são exatamente ${horas} horas`)
if (horas <= 12 && horas >= 6){
    console.log('Bom dia')
} else if(horas <= 18 && horas >= 13){
    console.log('Boa tarde')
} else if (horas >= 19 && horas <= 23) {
    console.log('Boa noite')
} else{
    console.log('Boa madrugada')
}