function clicou(){
    var data = new Date
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
   var res = document.getElementById('res')

   if(fano.value > ano || fano.value.length == 0){
    window.alert('[ERROR] verifique seus dados')
   } else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    // precisa colocar seempre o value, o number e para algumas ocasioes
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
   
    // dar um atributo
    if (fsex[0].checked){
        genero = 'homem'
        if( idade >= 0 && idade <= 10){
         img.setAttribute('src', 'criança-m.jpg')
        } else if ( idade < 20){
            img.setAttribute('src', 'jovemfm.jpg')
        }
        else {
            img.setAttribute('src', 'foto-idoso.jpg')
        }
    } else if (fsex[1].checked) {
        genero = 'mulher'
        // checked par checar qual que foi escolhido
        if( idade >= 0 && idade <= 10){
         img.setAttribute('src','criança-f.jpg')
        } else if ( idade < 21){
            img.setAttribute('src', 'jovem-f.jpg')
        }
        else {
            img.setAttribute('src','idosa.jpg')
        }
    }
 
    res.style.textAlign = 'center'
    res.innerText = `seu sexo é ${genero} e idade ${idade}`
    res.appendChild(img)
   }

}