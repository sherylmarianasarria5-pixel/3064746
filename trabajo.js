function fnGeo() {
    let datovariable = "";
    datovariable = document.getElementById("txtdato").value;
    console.log("ingresaste el dato:", datovariable);
}

function fnCalculaRider() {
    let numero1 = 0;
    let numero2 = 0;
    numero1 = document.querySelector("#txtnum1").value;
    numero2 = document.querySelector(".txtnum2").value;

    let resultadosuma = parseInt(numero1) + parseInt(numero2);
    console.log("la suma de los datos",
        numero1, "+", numero2, "es:", resultadosuma);

    console.log(`la suma de los datos:
        ${numero1} + ${numero2} es: ${resultadosuma}`);
}

function fnCalculaRider1() {
    let numero1 = 0;
    let numero2 = 0;
    numero1 = document.querySelector("#txtnum1").value;
    numero2 = document.querySelector(".txtnum2").value;

    let elresultadoresta = parseInt(numero1) + parseInt(numero2);
    console.log("el resultado de la resta",
        numero1, "-", numero2, "=", elresultadoresta);

    console.log(`la resultado de la resta:
        ${numero1} - ${numero2} = ${elresultadoresta}`);
}

function fnCalculaRider2() {
    let numero1 = document.querySelector("#txtnum1").value;
    let numero2 = document.querySelector(".txtnum2").value;

    let resultadoMultiplicacion = parseInt(numero1) * parseInt(numero2);

    console.log("El resultado de la multiplicación es",
        numero1, "*", numero2, "=", resultadoMultiplicacion);

    console.log(`El resultado de la multiplicación es:
        ${numero1} * ${numero2} = ${resultadoMultiplicacion}`);
}

function fnCalculaRider3() {
    let numero1 = document.querySelector("#txtnum1").value;
    let numero2 = document.querySelector(".txtnum2").value;

    let resultadodivision = parseInt(numero1) / parseInt(numero2);

    console.log("resultado division",
        numero1, "/", numero2, "=", resultadodivision);

    console.log(`El resultado de la division es:
        ${numero1} / ${numero2} = ${resultadodivision}`);
    }