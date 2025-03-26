    function parImpar () {
    let numero = paseint(prompt("Ingrese valor: "));
    if (numero % 2 === 0){
        alert("El numero es par");
    } else {
        alert("el numero es impar");
    }
}

    function imc () {
    let peso = parseFloat (prompt("Ingrese su peso actual sin mentir: "));
    let altura = parseFloat (prompt("Ingrese su altura actual en cm: "));
    altura = altura / 100;
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        alert("Bajo peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso ideal");
    } else {
        alert("Sobrepeso");
    }
}

    function promedio() {
        let nota1 = parseFloat(prompt("Ingresa tu primera nota: "));
        let nota2 = parseFloat(prompt("Ingresa tu segunda Nota: "));
        let nota3 = parseFloat(prompt("Ingresa tu tercera Nota: "));
        let promedio = (nota1 + nota2 + nota3) / 3;
        if (promedio < 4.0) {
            alert("Reprobado");
        } else {
            alert("Aprobado");
        }
    }
