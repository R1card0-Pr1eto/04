// 1 evaluacion de temperatura

function calculo_temperatura(){
let calor = prompt("Ingrese la temperatura actual: ");
if (calor <= 0){
    alert("Hace frio")
    } else if(calor <25) {
        alert("La temperatura es agradable")
    } else{
    alert("Hace calor")
    }
}
