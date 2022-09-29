var palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let tablero1 = document.getElementById("canvas-draw");
let tablero = tablero1.getContext("2d");
let teclado = document.getElementById("teclado");
var palabraSecreta = "";
let contador = 0;
let contadorErrores = 0;
let palabrasIncorrectas = [];
let palabrasCorrectas = [];
let iniciar = false;
let perder = false;
let contadorCorrectas = 0;
let newWord = [];
let widthA = tablero1.width;
let heightA = tablero1.height;



function iniciarJuego() {
  document.getElementById("iniciar").style.display = "none";
  document.getElementById("add-word").style.display = "none";
  teclado.style.display = "flex";
  tablero1.style.display = "flex";
  iniciar = true;
  escojerPalabraSecreta();
}

function agregarPalabra() {
  document.getElementById("iniciar").style.display = "none";
  document.getElementById("add-word").style.display = "none";
  document.getElementById("inputword").style.display = "flex";
  document.getElementById("addWord").style.display = "flex";
  document.getElementById("cancel").style.display = "flex";
}

function cancelar() {
  window.location.reload(false);
}

function addWord() {
  let word = document.getElementById("inputword").value;
  if (word === "" || word === null) {
    alert("Debe colocar una palabra");
  } else {
    newWord.push(word.toUpperCase());
    localStorage.setItem("newWords", newWord);
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }
}

window.addEventListener(
  "keydown",
  function (event) {
    if (iniciar && perder === false) {
      comprobarLetras(event.key.toUpperCase());
    }
  },
  false
);

function comprobarLetras(letra) {
  let regex = new RegExp("^[a-zA-Z ]+$");
  let correcto = false;
  if (regex.test(letra)) {
    if (letra.length === 1) {
      for (let i = 0; i < palabraSecreta.length; i++) {
        if (letra === palabraSecreta[i]) {
          correcto = true;
          if (!palabrasCorrectas.includes(letra)) {
            contadorCorrectas += 1;
            rellenarTeclado(letra, "green");
            dibujarLetraCorrecta(letra, i);
            if (contadorCorrectas === palabraSecreta.length) {
              tablero.fillStyle = "green";
              tablero.font =
                "50px 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
              tablero.fillText("¡Has Ganado!", widthA * 0.5, heightA * 0.5);
              setTimeout(() => {
                alert("¡Felicidades ha ganado!");
                window.location.reload(false);
              }, 1000);
            }
          } else {
            alert("La letra " + letra + " ya se utilizo");
          }
        }
      }
      if (correcto) {
        palabrasCorrectas.push(letra);
      } else {
        if (palabrasIncorrectas.includes(letra)) {
          alert("La letra " + letra + " ya se utilizo");
        } else {
          dibujaAhorcado();
          rellenarTeclado(letra, "red");
          palabrasIncorrectas.push(letra);
        }
      }
    }
  }
}
