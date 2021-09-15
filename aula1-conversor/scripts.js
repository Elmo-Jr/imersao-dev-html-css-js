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

  var real = parseFloat(vlrDolar) * 5.21;

  var realfixado = real.toFixed(2);

  var pd2 = document.getElementById("p1");
  pd2.innerHTML = "R$ " + realfixado;
  var pd2 = document.getElementById("pd2");
  pd2.innerHTML = "";
}

function libra() {
  var inputVlrLibra = document.querySelector("#bd1");

  var vlrLibra = inputVlrLibra.value;

  var real = parseFloat(vlrLibra) * 7.27;

  var realfixado = real.toFixed(2);

  var pd2 = document.getElementById("p1");
  pd2.innerHTML = "R$ " + realfixado;
  var pd2 = document.getElementById("pd2");
  pd2.innerHTML = "";
}

function yenes() {
  var inputVlrYenes = document.querySelector("#bd1");

  var vlrYenes = inputVlrYenes.value;

  var real = parseFloat(vlrYenes) * 0.03162;

  var realfixado = real.toFixed(2);

  var pd2 = document.getElementById("p1");
  pd2.innerHTML = "R$ " + realfixado;
  var pd2 = document.getElementById("pd2");
  pd2.innerHTML = "";
}

function wons() {
  var inputVlrWons = document.querySelector("#bd1");

  var vlrWons = inputVlrWons.value;

  var real = parseFloat(vlrWons) * 0.0045;

  var realfixado = real.toFixed(2);

  var pd2 = document.getElementById("p1");
  pd2.innerHTML = "R$ " + realfixado;
  var pd2 = document.getElementById("pd2");
  pd2.innerHTML = "";
}

function CF() {
  var inputCTemp = document.querySelector("#bt1");

  var cTemp = inputCTemp.value;

  var fTemp = parseInt(cTemp) * 1.8 + 32;

  var fTempFixada = fTemp.toFixed(1);

  var pt2 = document.getElementById("p1");
  pt2.innerHTML = fTempFixada + "ºF";
  var pd2 = document.getElementById("pt2");
  pd2.innerHTML = "";
}

function CK() {
  var inputCTemp = document.querySelector("#bt1");

  var cTemp = inputCTemp.value;

  var kTemp = parseInt(cTemp) + 273;

  var kTempFixada = kTemp.toFixed(1);

  var pt2 = document.getElementById("p1");
  pt2.innerHTML = kTempFixada + "ºK";
  var pd2 = document.getElementById("pt2");
  pd2.innerHTML = "";
}

function kmToAl() {
  var inputKm = document.querySelector("#bt1");

  var Km = inputKm.value;

  var al = parseFloat(Km) / 9.461e12;

  // var alFixada = al.toFixed(1);

  var pt2 = document.getElementById("p1");
  pt2.innerHTML = al + " Ano(s) luz";
  var pd2 = document.getElementById("pt2");
  pd2.innerHTML = "";
}

function alToKm() {
  var inputAl = document.querySelector("#bt2");

  var als = inputAl.value;

  var kms = parseFloat(als) * 9.461e12;

  // var kmFixada = km.toFixed(1);

  var pt2 = document.getElementById("p1");
  pt2.innerHTML = kms + " Kilometros";
  var pd2 = document.getElementById("pt2");
  pd2.innerHTML = "";
}
