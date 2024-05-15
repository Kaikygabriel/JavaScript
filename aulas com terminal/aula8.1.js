var agora = new Date
var horas = agora.getHours()
// para poder pegar a hora em tempo real
console.log(`Agora são exatamente ${horas} horas`)
if (horas <= 12 && horas >= 6){
    console.log('Bom dia')
} else if(horas <= 18 && horas == 18){
    console.log('Boa tarde')
} else {
    console.log('Boa noite ou Boa madrugada')
}