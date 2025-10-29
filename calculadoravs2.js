let pantalla = document.getElementById("pantalla");
let operacion = "";

function agregarNumero(num) {
  if (pantalla.textContent === "0" && 
    num !==".") {
      pantalla.textContent = num; 
    } else {
        pantalla.textContent += num;
      }
    }

function agregarOperacion(op) {
  operacion += pantalla.textContent +
  op;
  pantalla.textContent = "0";
}

function calcular() {
  operacion += pantalla.textContent;
  try {
    const resultado = eval(operacion);
    pantalla.textContent = resultado;
    operacion = "";
  } catch {
    pantalla.textContent = "error";
    operacion = "";
  }
}

function borrar () {
 pantalla.textContend = pantalla.textContent.sline(0, -1) || "0"
}

function borrarTodo() {
  pantalla.textContent = "0"
  operacion = "";
}