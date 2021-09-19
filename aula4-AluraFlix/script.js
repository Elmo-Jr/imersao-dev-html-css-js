var filmes = [
  "https://i.ytimg.com/vi/-1gL374FIdc/movieposter.jpg",
  "https://static.wikia.nocookie.net/netflix/images/9/99/Navillera0.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/2/29/Pitch_Perfect.jpg",
  "https://ingresso-a.akamaihd.net/prd/img/movie/demon-slayer-kimetsu-no-yaiba-the-movie-infinity-train/505c829b-023d-406a-b6ae-b6c84cb9bde1.jpg",
];

var nomeFilme = [
  "Steven Universe: The Movie",
  "Navillera",
  "A Escolha Perfeita",
  "Demon Slayer: Kimetsu no Yaiba",
];

var section = document.getElementById("secfilmes");

imprimirTela();

function adicionar() {
  var urlimg = document.getElementById("url").value;
  var nome = document.getElementById("nome").value;

  if (urlimg.endsWith(".jpg") || urlimg.endsWith(".png")) {
    if (filmes.includes(urlimg)) {
      var msgja = document.getElementById("msg");
      msgja.innerHTML = "Essa imagem já foi adicionada.";

      limparinput();
    } else {
      if (nome.length > 0) {
        limparMsgErro();

        filmes.unshift(urlimg);
        nomeFilme.unshift(nome);

        imprimirTela();
      } else {
        var msgja = document.getElementById("msg");
        msgja.innerHTML = "Titulo não pode estar vazio";
      }
    }
  } else {
    var msgja = document.getElementById("msg");
    msgja.innerHTML = " Endereço de imagem inválida ;-; ";
    limparinput();
  }
}

function imprimirTela() {
  var section = document.getElementById("secfilmes");
  section.innerHTML = "";
  for (let i = 0; i < filmes.length; i++) {
    section.innerHTML +=
      "<div class='divfilmes'><img src=" +
      filmes[i] +
      " ><p>" +
      nomeFilme[i] +
      "</p></div";
    limparinput();
  }
}

function remover() {
  var tituloRemover = document.getElementById("nomer").value;
  console.log(tituloRemover);
  if (nomeFilme.includes(tituloRemover)) {
    if (tituloRemover.length > 0) {
      var i = nomeFilme.indexOf(tituloRemover);

      console.log(i);

      filmes.splice(i, 1);
      nomeFilme.splice(i, 1);

      imprimirTela();
      limparMsgErro();
      limparinput();
    }
  } else {
    var msgja = document.getElementById("msgr");
    msgja.innerHTML = "Titulo não encontrado";
  }
}

function limparMsgErro() {
  var msgja = document.getElementById("msgr");
  msgja.innerHTML = "";
  var msgja = document.getElementById("msg");
  msgja.innerHTML = "";
}

function limparinput() {
  document.getElementById("url").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("nomer").value = "";
}
