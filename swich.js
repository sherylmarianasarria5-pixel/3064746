function ejecutarOperacion() {
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
  const operacion = document.getElementById('operacion').value;
  const resultadoElemento = document.getElementById('resultado');
  let resultado;

  switch (operacion) {
    case 'sumar':
      resultado = sumarNumeros(input1, input2);
      break;
    case 'restar':
      resultado = restarNumeros(input1, input2);
      break;
    case 'multiplicar':
      resultado = multiplicarNumeros(input1, input2);
      break;
    default:
      resultadoElemento.innerHTML = "Operación no válida";
      return;
  }

  resultadoElemento.innerHTML = "Resultado: " + resultado;
}

function sumarNumeros(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function restarNumeros(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiplicarNumeros(a, b) {
  return parseFloat(a) * parseFloat(b);
}