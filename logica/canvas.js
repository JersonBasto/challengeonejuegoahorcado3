function dibujarCanvas() {
  console.log(widthA, heightA);
  tablero.lineWidth = 3;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#0A3871";
  tablero.fillRect(0, 0, widthA, heightA);
  tablero.beginPath();
  tablero.moveTo(widthA * 0.2, heightA * 0.7);
  tablero.lineTo(widthA * 0.8, heightA * 0.7);
  tablero.stroke();
  tablero.closePath();
}
function dibujarLinea(palabraSecreta) {
  tablero.lineWidth = 3;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";

  let anchura = widthA / (palabraSecreta.length + 1);
  console.log(palabraSecreta.length);
  console.log(anchura);
  for (let i = 0; i < palabraSecreta.length; i++) {
    tablero.moveTo(anchura * i + widthA * 0.1, heightA * 0.9);
    tablero.lineTo(anchura * i + widthA * 0.15, heightA * 0.9);
  }
  tablero.stroke();
  tablero.closePath();
}
function dibujarLetraCorrecta(letra, posicion) {
  tablero.fillStyle = "green";
  tablero.font =
    "50px 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
  let anchura = widthA / (palabraSecreta.length + 1);
  tablero.fillText(letra, widthA * 0.115 + anchura * posicion, heightA * 0.89);
}
function dibujarLineas(x1, y1, x2, y2, color) {
  tablero.beginPath();
  tablero.strokeStyle = color;
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.moveTo(x1, y1);
  tablero.lineTo(x2, y2);
  tablero.stroke();
  tablero.closePath();
}
function dibujaAhorcado() {
  contadorErrores += 1;
  if (contadorErrores > 7) {
  } else {
    switch (contadorErrores) {
      case 1:
        dibujarLineas(
          widthA * 0.3,
          heightA * 0.7,
          widthA * 0.3,
          heightA * 0.1,
          "#663300"
        );
        break;
      case 2:
        dibujarLineas(
          widthA * 0.3,
          heightA * 0.1,
          widthA * 0.55,
          heightA * 0.1,
          "#663300"
        );
        break;
      case 3:
        dibujarLineas(
          widthA * 0.55,
          heightA * 0.1,
          widthA * 0.55,
          heightA * 0.15,
          "#5f5f5f"
        );
        break;
      case 4:
        tablero.beginPath();
        tablero.strokeStyle = "#000000";
        tablero.fillStyle = "#ffffbf";
        tablero.arc(
          widthA * 0.55,
          heightA * 0.2,
          widthA * 0.04,
          0,
          2 * Math.PI
        );
        tablero.fill();
        tablero.stroke();
        break;
      case 5:
        dibujarLineas(
          widthA * 0.55,
          heightA * 0.25,
          widthA * 0.55,
          heightA * 0.42,
          "#000000"
        );
        break;
      case 6:
        dibujarLineas(
          widthA * 0.55,
          heightA * 0.28,
          widthA * 0.5,
          heightA * 0.32,
          "#000000"
        );
        dibujarLineas(
          widthA * 0.55,
          heightA * 0.28,
          widthA * 0.6,
          heightA * 0.32,
          "#000000"
        );
        break;
      case 7:
        dibujarLineas(
          widthA * 0.55,
          heightA * 0.42,
          widthA * 0.5,
          heightA * 0.5,
          "#000000"
        );
        dibujarLineas(
          widthA * 0.55,
          heightA * 0.42,
          widthA * 0.6,
          heightA * 0.5,
          "#000000"
        );
        tablero.fillStyle = "red";
        tablero.font =
          "50px 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
        tablero.fillText("¡Has perdido!", widthA * 0.1, heightA * 0.05);
        perder = true;
        setTimeout(() => {
          alert("Ha perdido intentalo de nuevo");
          window.location.reload(false);
        }, 1000);
        break;
    }
  }
}
function rellenarTeclado(letra, color) {
  let letra2 = document.getElementById(letra);
  letra2.style.backgroundColor = color;
}
