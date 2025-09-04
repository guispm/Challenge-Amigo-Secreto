//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
listaAmigos = []
nomeDoAmigoSecreto = sortearAmigo()

function adicionarAmigo(){
    let amigo = document.querySelector("input").value;

    if (amigo == ''){
        alert ("Por favor insira um nome válido");
    } else {
        listaAmigos.push(amigo)
        console.log(listaAmigos)
        exibirTextoNatela("listaAmigos",listaAmigos)
        limpaNome()
        return adicionarAmigo
    }
}

function limpaNome(){
    amigo = document.querySelector("input");
    amigo.value = ''
}

function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    nomeSorteado = listaAmigos[indiceAleatorio]
    console.log (`O nome sorteado foi ${nomeSorteado}`)
    return nomeSorteado
}

function exibirTextoNatela(){
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
}

