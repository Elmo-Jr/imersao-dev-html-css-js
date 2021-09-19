var filmes = [
  "https://i.ytimg.com/vi/-1gL374FIdc/movieposter.jpg",
  "https://static.wikia.nocookie.net/netflix/images/9/99/Navillera0.jpg",
  "https://br.web.img2.acsta.net/pictures/21/04/07/21/13/5564614.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/2/29/Pitch_Perfect.jpg",
  "https://ingresso-a.akamaihd.net/prd/img/movie/demon-slayer-kimetsu-no-yaiba-the-movie-infinity-train/505c829b-023d-406a-b6ae-b6c84cb9bde1.jpg",
];

var section = document.getElementById("secfilmes");

for (let i = 0; i < filmes.length; i++) {
  section.innerHTML += "<img src=" + filmes[i] + " >";
}

function adicionar() {
  var urlimg = document.getElementById("url").value;

  if (filmes.includes(urlimg)) {
    var msgja = document.getElementById("msg");
    msgja.innerHTML = "Essa imagem já foi adicionada.";
  } else {
    var msgja = document.getElementById("msg");
    msgja.innerHTML = "";
    filmes.unshift(urlimg);

    var section = document.getElementById("secfilmes");
    section.innerHTML = "";
    for (let i = 0; i < filmes.length; i++) {
      section.innerHTML += "<img src=" + filmes[i] + " >";
    }
  }
}
