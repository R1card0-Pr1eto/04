function cambiarImagen(imagen) {
    if (imagen.alt === "Protagonista") {
        // Tarjeta grande - alterna entre Denji.png y denji2.png
        if (imagen.src.includes("denji2.png")) {
            imagen.src = "img/Denji.png";
        } else {
            imagen.src = "img/denji2.png";
        }
    } else if (imagen.alt === "Elemento Secundario") {
        // Tarjeta mediana - alterna entre sendo1.jpg y sendo2.jpg
        if (imagen.src.includes("sendo2.png")) {
            imagen.src = "img/sendo1.png";
        } else {
            imagen.src = "img/sendo2.png";
        }
    } else if (imagen.alt === "Dante") {
        // Tarjeta pequeña 1 - alterna entre dante.png y dante2.png
        if (imagen.src.includes("dante2.png")) {
            imagen.src = "img/dante.png";
        } else {
            imagen.src = "img/dante2.png";
        }
    } else if (imagen.alt === "Peter") {
        // Tarjeta pequeña 2 - alterna entre spiderman1.png y spiderman2.png
        if (imagen.src.includes("spiderman2.png")) {
            imagen.src = "img/spiderman1.png";
        } else {
            imagen.src = "img/spiderman2.png";
        }
    }
}