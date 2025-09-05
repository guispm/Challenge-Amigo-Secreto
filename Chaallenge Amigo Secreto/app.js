//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
listaDeAmigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector("input").value;

    if (amigo == ''){
        alert ("Por favor insira um nome válido");
    } else {
        listaDeAmigos.push(amigo);
        console.log(listaDeAmigos);
        limpaNome();
    }
}

function limpaNome(){
    amigo = document.querySelector("input");
    amigo.value = '';
}

function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    nomeSorteado = listaDeAmigos[indiceAleatorio];
    if (nomeSorteado){
        exibirResultado(nomeSorteado);
    }
}

function exibirResultado (nome){
    campo = document.getElementById("resultado");
    campo.innerHTML = `O amigo secreto sorteado é: ${nome}`;
}

// function exibirListaDeNomes (){
//     campo = document.getElementById("listaAmigos");
// } -> Ainda em produção essa função