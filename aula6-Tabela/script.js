var jogadorRafa = {
  nome: "Rafa",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};
var jogadorPaulo = {
  nome: "Paulo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};
var jogadorGui = {
  nome: "Gui",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};

function calculaPontos(jogador) {
  pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var listaJogadores = [];
exibeJogadoresNaTela(listaJogadores);

function exibeJogadoresNaTela(listaJogadores) {
  var elemento = "";
  for (var i = 0; i < listaJogadores.length; i++) {
    elemento += "<tr>";
    elemento += "<td>" + listaJogadores[i].nome + "</td>";
    elemento += "<td>" + listaJogadores[i].vitorias + "</td>";
    elemento += "<td>" + listaJogadores[i].empates + "</td>";
    elemento += "<td>" + listaJogadores[i].derrotas + "</td>";
    elemento += "<td>" + listaJogadores[i].pontos + "</td>";
    elemento +=
      "<td><button class='btn btn-sucsses' onclick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>";
    elemento +=
      "<td><button class='btn' onclick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = listaJogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(listaJogadores);

  console.log(i);
  adicionarDerrota(i);
}

function adicionarEmpate(i) {
  for (var i = 0; i < listaJogadores.length; i++) {
    var jogador = listaJogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
  }
  exibeJogadoresNaTela(listaJogadores);
}

function adicionarDerrota(indexvitoria) {
  for (var i = 0; i < listaJogadores.length; i++) {
    var jogador = listaJogadores[i];
    jogador.derrotas++;
  }
  var jogadorvitoria = listaJogadores[indexvitoria];
  jogadorvitoria.derrotas--;

  exibeJogadoresNaTela(listaJogadores);
}

function novojogador() {
  var nomeplayer = document.getElementById("nome").value;
  listaJogadores.push({
    nome: nomeplayer,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  });
  exibeJogadoresNaTela(listaJogadores);

  document.getElementById("nome").value = "";
}

function zerar() {
  for (var i = 0; i < listaJogadores.length; i++) {
    var jogador = listaJogadores[i];
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = calculaPontos(jogador);
  }
  exibeJogadoresNaTela(listaJogadores);
}
