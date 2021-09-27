var carta1 = {
    nome: "perola",
    img: "https://i.gifer.com/6vOr.gif",
    atributos: {
        ataque: 1900,
        defesa: 700,
        magia: 1000
    }
};

var carta2 = {
    nome: "ametista",
    img: "https://thumbs.gfycat.com/WarmAcademicCuckoo-size_restricted.gif",
    atributos: {
        ataque: 1800,
        defesa: 1000,
        magia: 1700
    }
};

var carta3 = {
    nome: "garnet",
    img: "http://pa1.narvii.com/6149/c5f1d2e006803c4cfe254edda0c22721e3e918af_00.gif",
    atributos: {
        ataque: 2000,
        defesa: 2000,
        magia: 1000
    }
};

var carta4 = {
    nome: "steven",
    img: "https://thumbs.gfycat.com/DistantSolidIggypops-max-1mb.gif",
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
    
    exibirCartaJogador()
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
    var divResultado = document.getElementById("resultado")

    var valorCartaPlayer = cartaPlayer.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

if (selecionado == true){
    if (valorCartaPlayer > valorCartaMaquina) {
        htmlDivResultado = "<p class='resultado-final' >Você VENCEU!!!</p>"
        document.getElementById("btnJogar").disabled = true
        exibirCartaMaquina()

    } else if (valorCartaPlayer < valorCartaMaquina) {
        htmlDivResultado = "<p class='resultado-final' >Você PERDEU ;-;</p>"
        document.getElementById("btnJogar").disabled = true
        exibirCartaMaquina()
    
    } else {
        htmlDivResultado = "<p class='resultado-final' >EMPATOU</p>"
        document.getElementById("btnJogar").disabled = true
        exibirCartaMaquina()
    
    }
} else {
    htmlDivResultado = "<p class='resultado-final' >Selecione um atributo</p>"
}

divResultado.innerHTML = htmlDivResultado
}


function exibirCartaJogador() {
    var divCartaPlayer = document.getElementById("carta-jogador")
    divCartaPlayer.style.backgroundImage = `url(${cartaPlayer.img})`

    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    var nome = `<p class="carta-subtitle" >${cartaPlayer.nome}</p>`
    
    var tagHTML = `<div id='opcoes' class='carta-status' >`

    var opcoesTexto = ""
        
    for (var atributo in cartaPlayer.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='"+ atributo +"'>" + atributo + " " + cartaPlayer.atributos[atributo] + "<br>"
    }

    divCartaPlayer.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
    
}


function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`

    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    var nome = `<p class="carta-subtitle" >${cartaMaquina.nome}</p>`
    
    var tagHTML = `<div id='opcoes' class='carta-status' >`

    var opcoesTexto = ""
        
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='"+ atributo +"'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
    }

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
    
}

