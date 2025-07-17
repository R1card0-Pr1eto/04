function mostrarResultado(titulo, contenido) {
    const resultsDiv = document.getElementById('results');
    const exerciseDiv = document.createElement('div');
    exerciseDiv.className = 'exercise';
    exerciseDiv.innerHTML = `
        <h3>${titulo}</h3>
        <div class="result">${contenido}</div>
    `;
    resultsDiv.appendChild(exerciseDiv);
}

function ejercicio1() {
    // Crear arreglo vacío
    let compras = [];
    
    // Usar push() para agregar elementos
    compras.push("pan");
    compras.push("leche");
    compras.push("huevos");
    
    mostrarResultado("Ejercicio 1: Agregar elementos", 
        `Arreglo compras: [${compras.join(', ')}]`);
    
    return compras;
}

function ejercicio2() {
    // Partir del arreglo anterior
    let compras = ["pan", "leche", "huevos"];
    
    // Usar pop() para quitar el último
    let elementoEliminado = compras.pop();
    
    mostrarResultado("Ejercicio 2: Quitar el último", 
        `Elemento eliminado: ${elementoEliminado}<br>
        Arreglo actualizado: [${compras.join(', ')}]`);
    
    return { compras, elementoEliminado };
}

function ejercicio3() {
    // Crear arreglo colores
    let colores = ["rojo", "azul"];
    
    // Usar unshift() para agregar al inicio
    colores.unshift("amarillo");
    
    mostrarResultado("Ejercicio 3: Agregar al inicio", 
        `Arreglo colores: [${colores.join(', ')}]`);
    
    return colores;
}

function ejercicio4() {
    // Usar el arreglo colores
    let colores = ["amarillo", "rojo", "azul"];
    
    // Eliminar el primer elemento con shift()
    let elementoEliminado = colores.shift();
    
    mostrarResultado("Ejercicio 4: Quitar el primero", 
        `Elemento eliminado: ${elementoEliminado}<br>
        Arreglo actualizado: [${colores.join(', ')}]`);
    
    return { colores, elementoEliminado };
}

function ejercicio5() {
    // Crear arreglo números
    let numeros = [10, 20, 30];
    let pasos = [];
    
    // Agregar 40 al final
    numeros.push(40);
    pasos.push(`Después de push(40): [${numeros.join(', ')}]`);
    
    // Quitar el primer número
    let primero = numeros.shift();
    pasos.push(`Después de shift() (eliminado ${primero}): [${numeros.join(', ')}]`);
    
    // Agregar 5 al inicio
    numeros.unshift(5);
    pasos.push(`Después de unshift(5): [${numeros.join(', ')}]`);
    
    // Eliminar el último número
    let ultimo = numeros.pop();
    pasos.push(`Después de pop() (eliminado ${ultimo}): [${numeros.join(', ')}]`);
    
    mostrarResultado("Ejercicio 5: Combinación de métodos", 
        `${pasos.join('<br>')}<br>
        <strong>Arreglo final: [${numeros.join(', ')}]</strong>`);
    
    return numeros;
}

function ejercicio6() {
    // Crear arreglo vacío
    let orden = [];
    
    // Agregar números al inicio (orden inverso)
    orden.unshift(1);
    orden.unshift(2);
    orden.unshift(3);
    
    mostrarResultado("Ejercicio 6: Agregar elementos en orden inverso", 
        `Arreglo orden: [${orden.join(', ')}]`);
    
    return orden;
}

function ejercicio7() {
    // Crear arreglo historial
    let historial = [];
    
    // Agregar 3 mensajes con push()
    historial.push("Mensaje 1");
    historial.push("Mensaje 2");
    historial.push("Mensaje 3");
    
    // Eliminar el último mensaje con pop()
    let mensajeEliminado = historial.pop();
    
    mostrarResultado("Ejercicio 7: Historial de mensajes", 
        `Historial después de agregar mensajes: [${historial.join(', ')}, ${mensajeEliminado}]<br>
        Mensaje eliminado: ${mensajeEliminado}<br>
        Historial final: [${historial.join(', ')}]`);
    
    return { historial, mensajeEliminado };
}

function ejercicio8() {
    // Crear cola de clientes
    let cola = ["Cliente1", "Cliente2", "Cliente3"];
    
    // Eliminar primer cliente
    let clienteAtendido = cola.shift();
    
    // Agregar Cliente4 al final
    cola.push("Cliente4");
    
    mostrarResultado("Ejercicio 8: Cola de atención", 
        `Cliente atendido: ${clienteAtendido}<br>
        Cola final: [${cola.join(', ')}]`);
    
    return { cola, clienteAtendido };
}

function ejercicio9() {
    // Arreglo inicial
    let nombres = ["Pedro", "Juan", "Luis"];
    
    // Quitar el último nombre
    let ultimoNombre = nombres.pop();
    
    // Agregar "Mateo" al inicio
    nombres.unshift("Mateo");
    
    // Agregar "Ana" al final
    nombres.push("Ana");
    
    mostrarResultado("Ejercicio 9: Reordenar nombres", 
        `Nombre eliminado: ${ultimoNombre}<br>
        Arreglo actualizado: [${nombres.join(', ')}]`);
    
    return nombres;
}

function ejercicio10() {
    // Simular pila
    let pila = [];
    
    // Agregar 3 elementos
    pila.push("Elemento 1");
    pila.push("Elemento 2");
    pila.push("Elemento 3");
    
    // Quitar 2 elementos
    let elemento1 = pila.pop();
    let elemento2 = pila.pop();
    
    // Simular cola
    let colaNueva = [];
    
    // Agregar 3 elementos
    colaNueva.push("Tarea A");
    colaNueva.push("Tarea B");
    colaNueva.push("Tarea C");
    
    // Atender 2 elementos
    let tarea1 = colaNueva.shift();
    let tarea2 = colaNueva.shift();
    
    mostrarResultado("Ejercicio 10: Pilas y colas", 
        `<strong>Pila:</strong><br>
        Elementos eliminados: ${elemento1}, ${elemento2}<br>
        Pila restante: [${pila.join(', ')}]<br><br>
        <strong>Cola:</strong><br>
        Tareas atendidas: ${tarea1}, ${tarea2}<br>
        Cola restante: [${colaNueva.join(', ')}]`);
    
    return { pila, colaNueva };
}

function ejercicio11() {
    // Arreglo inicial
    let dias = ["lunes", "miércoles", "jueves"];
    
    // Agregar "martes" después de "lunes"
    // Primero removemos "miércoles" y "jueves"
    let miercoles = dias.pop(); // quita "jueves"
    let jueves = dias.pop(); // quita "miércoles"
    
    // Agregamos "martes"
    dias.push("martes");
    
    // Volvemos a agregar "miércoles" y "jueves"
    dias.push("miércoles");
    dias.push("jueves");
    
    // Agregamos "viernes"
    dias.push("viernes");
    
    mostrarResultado("Ejercicio 11: Completar la semana laboral", 
        `Arreglo final: [${dias.join(', ')}]`);
    
    return dias;
}

function ejercicio12() {
    // Arreglo inicial
    let personas = ["Carlos", "María", "Luis", "Ana", "Sofía"];
    
    // Quitar "Carlos" del inicio
    personas.shift();
    
    // Quitar "Sofía" del final
    personas.pop();
    
    // Quitar "Ana" del final
    personas.pop();
    
    // Agregar "Pedro" al inicio
    personas.unshift("Pedro");
    
    // Agregar "Camila" al final
    personas.push("Camila");
    
    mostrarResultado("Ejercicio 12: Registro de personas en una sala", 
        `Arreglo final: [${personas.join(', ')}]`);
    
    return personas;
}

function ejercicio13() {
    // Arreglo inicial
    let tareas = ["comer", "estudiar", "dormir", "jugar", "ver TV", "navegar"];
    
    // Eliminar tareas del final hasta quedarnos con las primeras 2
    tareas.pop(); // quita "navegar"
    tareas.pop(); // quita "ver TV"
    tareas.pop(); // quita "jugar"
    tareas.pop(); // quita "dormir"
    
    // Agregar nuevas tareas
    tareas.push("lavar la ropa");
    tareas.push("organizar escritorio");
    
    mostrarResultado("Ejercicio 13: Lista de tareas actualizada", 
        `Arreglo final: [${tareas.join(', ')}]`);
    
    return tareas;
}

function ejecutarTodosEjercicios() {
    limpiarResultados();
    
    ejercicio1();
    ejercicio2();
    ejercicio3();
    ejercicio4();
    ejercicio5();
    ejercicio6();
    ejercicio7();
    ejercicio8();
    ejercicio9();
    ejercicio10();
    ejercicio11();
    ejercicio12();
    ejercicio13();
}

function limpiarResultados() {
    document.getElementById('results').innerHTML = '';
}

// Ejecutar automáticamente al cargar la página
window.onload = function() {
    // Ya no ejecutamos automáticamente, esperamos a que el usuario haga clic
    console.log("Página cargada. Haz clic en un ejercicio para comenzar.");
};