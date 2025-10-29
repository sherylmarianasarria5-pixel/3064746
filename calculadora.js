function fnGeo() {
    let datovariable = document.getElementById("txtdato").value;
    alert("Ingresaste el dato: " + datovariable);
    fnsalidaparrafo (datovariable);
   fnalerta(datovariable);
}
function fnsalidaparrafo (datovariable) {
    document.getElementById("pfosalida").innerHTML= "el dato ingresado fue:" + datovariable; 
}
function fnalerta(datovariable) {
    alert(`el dato ingresado fue: 
        ${datovariable}`); 
}

function fnCalculaRider() {
    let numero1 = document.querySelector("#txtnum1").value;
    let numero2 = document.querySelector(".txtnum2").value;
    let resultadosuma = parseFloat(numero1) + parseFloat(numero2);
    document.getElementById("resultado").innerText = `La suma es: ${resultadosuma}`;
}

function fnCalculaRider1() {
    let numero1 = document.querySelector("#txtnum1").value;
    let numero2 = document.querySelector(".txtnum2").value;
    let elresultadoresta = parseFloat(numero1) - parseFloat(numero2);
    document.getElementById("resultado").innerText = `La resta es: ${elresultadoresta}`;
}

function fnCalculaRider2() {
    let numero1 = document.querySelector("#txtnum1").value;
    let numero2 = document.querySelector(".txtnum2").value;
    let resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    document.getElementById("resultado").innerText = `La multiplicación es: ${resultadoMultiplicacion}`;
}

function fnCalculaRider3() {
    let numero1 = document.querySelector("#txtnum1").value;
    let numero2 = document.querySelector(".txtnum2").value;

    if (numero2 == 0 || numero2 === "") {
        document.getElementById("resultado").innerText = "Error: No se puede dividir entre cero";
    } else {
        let resultadodivision = parseFloat(numero1) / parseFloat(numero2);
        document.getElementById("resultado").innerText = `La división es: ${resultadodivision}`;
    }
}
