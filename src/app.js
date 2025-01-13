import "./style.css";
 window.onload = function() {
  generarCarta();

  document.getElementById('generarBoton').addEventListener('click', function(event) {
      event.preventDefault();
      generarCarta();
  });
}; 

let contadorCartas = 0;

document.getElementById('generarBoton').addEventListener('click', function(event) {
  event.preventDefault();
  generarCarta();
  
  contadorCartas++;
  document.getElementById('contadorCartas').innerText = contadorCartas;
});

function generarCarta() {
  let numeroCarta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let palo = ["Rombos", "Picas", "Corazones", "Treboles"];
  let randomnumeroCarta = Math.floor(Math.random() * numeroCarta.length);
  let randompaloNumber = Math.floor(Math.random() * palo.length);
  let finalpalo = palo[randompaloNumber];

  document.getElementById('contenidoCarta').innerHTML = numeroCarta[randomnumeroCarta];
  cambiarColorNumero(finalpalo);

  console.log(getpaloeClass(finalpalo));

  document.getElementById('carta').className = "";
  document.getElementById('carta').classList.add("card");
  document.getElementById('carta').classList.add(getpaloeClass(finalpalo));
}

function getpaloeClass(palo) {
  switch (palo) {
      case "Rombos": return "palo-Rombos";
      case "Picas": return "palo-Picas";
      case "Corazones": return "palo-Corazones";
      case "Treboles": return "palo-Treboles";
  }
}

function cambiarColorNumero(palo) {
  let numeroElemento = document.getElementById('contenidoCarta');
  
  if (palo === "Rombos" || palo === "Corazones") {
      numeroElemento.style.color = "red";
  } else {
      numeroElemento.style.color = "black";
  }
}
