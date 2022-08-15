function Enviar(){
    let nome = document.getElementById('txtnome')
    let contato = document.getElementById('contato')
    let n = String(nome.value)
    var agora = new Date()
    let hora = agora.getHours()
    contato.innerHTML =`Seja bem vindo(a) ${n}. Ficamos felizes em termos você conosco, Logo mais entraremos em contato,`
    if(hora < 12){
        contato.innerHTML += ` tenha um bom dia!`
    }else if(hora < 18){
        contato.innerHTML += ` tenha uma boa tarde!`
    }else{
        contato.innerHTML += ` tenha uma boa noite!`
    }
}