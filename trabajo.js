function fnGeo() {
    let datovariable = document.getElementById("txtdato").value;
    console.log("Ingresaste el dato:", datovariable);
    fnsalidaparrafo(datovariable);
    fnalerta(datovariable);
}

function fnsalidaparrafo(datovariable) {
    // Crear un párrafo y mostrar en pantalla
    let p = document.createElement("p");
    p.textContent = "El dato ingresado fue: " + datovariable;
    document.body.appendChild(p);
}

function fnalerta(datovariable) {
    alert(`El dato ingresado fue: ${datovariable}`);
}

// --- SUMA ---
function fnCalculaRider() {
    let numero1 = parseInt(document.querySelector("#txtnum1").value);
    let numero2 = parseInt(document.querySelector(".txtnum2").value);

    let resultadosuma = numero1 + numero2;

    // Mostrar en consola
    console.log("La suma de los datos:", numero1, "+", numero2, "=", resultadosuma);

    // Mostrar en pantalla
    let p = document.createElement("p");
    p.textContent = `La suma de ${numero1} + ${numero2} es: ${resultadosuma}`;
    document.body.appendChild(p);
}

// --- RESTA ---
function fnCalculaRider1() {
    let numero1 = parseInt(document.querySelector("#txtnum1").value);
    let numero2 = parseInt(document.querySelector(".txtnum2").value);

    let elresultadoresta = numero1 - numero2;

    console.log("El resultado de la resta:", numero1, "-", numero2, "=", elresultadoresta);

    let p = document.createElement("p");
    p.textContent = `La resta de ${numero1} - ${numero2} es: ${elresultadoresta}`;
    document.body.appendChild(p);
}

// --- MULTIPLICACIÓN ---
function fnCalculaRider2() {
    let numero1 = parseInt(document.querySelector("#txtnum1").value);
    let numero2 = parseInt(document.querySelector(".txtnum2").value);

    let resultadoMultiplicacion = numero1 * numero2;

    console.log("El resultado de la multiplicación es:", numero1, "*", numero2, "=", resultadoMultiplicacion);

    let p = document.createElement("p");
    p.textContent = `La multiplicación de ${numero1} * ${numero2} es: ${resultadoMultiplicacion}`;
    document.body.appendChild(p);
}

// --- DIVISIÓN ---
function fnCalculaRider3() {
    let numero1 = parseInt(document.querySelector("#txtnum1").value);
    let numero2 = parseInt(document.querySelector(".txtnum2").value);

    let resultadodivision = numero1 / numero2;

    console.log("El resultado de la división es:", numero1, "/", numero2, "=", resultadodivision);

    let p = document.createElement("p");
    p.textContent = `La división de ${numero1} / ${numero2} es: ${resultadodivision}`;
    document.body.appendChild(p);
}
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
      case 'dividir' :
        resultado = dividirNumeros(input1, input2);
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

function dividirNumeros(a, b) {
    return parseFloat(a) / parseFloat(b);
}
