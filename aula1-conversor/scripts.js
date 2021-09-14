function media() {
  var inputPriB = document.querySelector("#b1");
  var inputSegB = document.querySelector("#b2");
  var inputTerB = document.querySelector("#b3");
  var inputQuaB = document.querySelector("#b4");

  var priB = inputPriB.value;
  var segB = inputSegB.value;
  var terB = inputTerB.value;
  var quaB = inputQuaB.value;

  var soma = parseInt(priB) + parseInt(segB) + parseInt(terB) + parseInt(quaB);

  var media = soma / 4;

  var mediafixada = media.toFixed(1);

  console.log(mediafixada);

  if (mediafixada < 6) {
    var p1 = document.getElementById("p1");
    p1.innerHTML = "QUE PENA ;-;";
    var p2 = document.getElementById("p2");
    p2.innerHTML = "Você não foi aprovado, sua média é: " + mediafixada;
  } else {
    var p1 = document.getElementById("p1");
    p1.innerHTML = "PARABÉNS!!!!";
    var p2 = document.getElementById("p2");
    p2.innerHTML = "Você foi aprovado, sua média é: " + mediafixada;
  }
}

function dolar() {
  var inputVlrDolar = document.querySelector("#bd1");

  var vlrDolar = inputVlrDolar.value;

  var real = parseInt(vlrDolar) * 5.21;

  var realfixado = real.toFixed(2);

  var pd2 = document.getElementById("pd2");
  pd2.innerHTML = "R$ " + realfixado;
}

function temp() {
  var inputCTemp = document.querySelector("#bt1");

  var cTemp = inputCTemp.value;

  var fTemp = parseInt(cTemp) * 1.8 + 32;

  var fTempFixada = fTemp.toFixed(1);

  var pt2 = document.getElementById("pt2");
  pt2.innerHTML = fTempFixada + "ºF";
}
