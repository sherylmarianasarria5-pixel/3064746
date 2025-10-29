let operador = '';
let valorAnterior = '';

function agregarNumero(numero) {
  const pantalla = document.getElementById('pantalla');
  if (pantalla.innerText === '0') {
    pantalla.innerText = numero;
  } else {
    pantalla.innerText += numero;
  }
}

function operar(op) {
  valorAnterior = document.getElementById('pantalla').innerText;
  operador = op;
  document.getElementById('pantalla').innerText = '';
}

function calcular() {
  const valorActual = document.getElementById('pantalla').innerText;
  let resultado = 0;

  switch (operador) {
    case '+':
      resultado = parseFloat(valorAnterior) + parseFloat(valorActual);
      break;
    case '-':
      resultado = parseFloat(valorAnterior) - parseFloat(valorActual);
      break;
    case '*':
      resultado = parseFloat(valorAnterior) * parseFloat(valorActual);
      break;
    case '/':
      if (parseFloat(valorActual) === 0) {
        resultado = 'Error';
      } else {
        resultado = parseFloat(valorAnterior) / parseFloat(valorActual);
      }
      break;
  }

  document.getElementById('pantalla').innerText = resultado;
}

function borrarTodo() {
  document.getElementById('pantalla').innerText = '0';
  valorAnterior = '';
  operador = '';
}

function borrarUltimo() {
  const pantalla = document.getElementById('pantalla');
  pantalla.innerText = pantalla.innerText.slice(0, -1) || '0';
}
