// Variables para almacenar los likes de cada post
let likes1 = 9;
let likes2 = 12;
let likes3 = 9;
let likes4 = 5;

// Obtener referencias a los elementos
const likesEl1 = document.getElementById('likes1');
const likesEl2 = document.getElementById('likes2');
const likesEl3 = document.getElementById('likes3');
const likesEl4 = document.getElementById('likes4');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

// Eventos para cada botón
btn1.onclick = () => {
    likes1++;
    likesEl1.textContent = likes1 + ' like(s)';
}

btn2.onclick = () => {
    likes2++;
    likesEl2.textContent = likes2 + ' like(s)';
}

btn3.onclick = () => {
    likes3++;
    likesEl3.textContent = likes3 + ' like(s)';
}

btn4.onclick = () => {
    likes4++;
    likesEl4.textContent = likes4 + ' like(s)';
}