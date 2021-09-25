var carta1 = {
    nome: "perola",
    img: "https://pm1.narvii.com/6489/15a896381bed20018304d7b544b729730d1523e8_hq.jpg",
    atributos: {
        ataque: 1900,
        defesa: 700,
        magia: 1000
    }
};

var carta2 = {
    nome: "ametista",
    img: "https://pm1.narvii.com/6489/83a39098b78319eb7c876bcb2cecbf248dfade5c_hq.jpg",
    atributos: {
        ataque: 1800,
        defesa: 1000,
        magia: 1700
    }
};

var carta3 = {
    nome: "garnet",
    img: "https://pm1.narvii.com/6489/20025e454d9e0d86aa626af225121009fd6ffd70_hq.jpg",
    atributos: {
        ataque: 2000,
        defesa: 2000,
        magia: 1000
    }
};

var carta4 = {
    nome: "steven",
    img: "https://pm1.narvii.com/6489/87cd2214bdc2d3905711c944976a938ea147714b_hq.jpg",
    atributos: {
        ataque: 1000,
        defesa: 2000,
        magia: 3000
    }
};

var cartas = [carta1, carta2, carta3, carta4];

var selecionado = false

var cartaMaquina;
var cartaPlayer;

function sortearCarta() {
    numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];

    numeroCartaPlayer = parseInt(Math.random() * cartas.length);
    
    while (numeroCartaMaquina == numeroCartaPlayer) {
        numeroCartaPlayer = parseInt(Math.random() * cartas.length);
    }
    
    cartaPlayer = cartas[numeroCartaPlayer];
    
    console.log(cartaPlayer)
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    
    exibirOpcoes()
}

function exibirOpcoes() {
var imgPlayer = document.getElementById("imgPlayer")
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""

    imgPlayer.innerHTML = "<img src='"+ cartaPlayer.img +"'>";


    for (var atributo in cartaPlayer.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='"+ atributo +"'>" + atributo

    }

     opcoes.innerHTML = opcoesTexto
}

function obtemAtributos() {
    var radioSelecionado = document.getElementsByName("atributo")

    for (var i = 0; i < radioSelecionado.length; i++) {
        if (radioSelecionado[i].checked == true) {
            selecionado = true
            return radioSelecionado[i].value;

        }
    }

}

function jogar() {
    var atributoSelecionado = obtemAtributos()
    var valorCartaPlayer = cartaPlayer.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    var elementoResultado = document.getElementById("resultado")

if (selecionado == true){
    if (valorCartaPlayer > valorCartaMaquina) {
        elementoResultado.innerHTML= "Você VENCEU!!!!!"
    } else if (valorCartaPlayer < valorCartaMaquina) {
        elementoResultado.innerHTML = "Você PERDEU ;-;"
    } else {
        elementoResultado.innerHTML = "ENPATE"
    }
} else {
    elementoResultado.innerHTML = "Selecione um atributo"
}



console.log(cartaMaquina)

}
