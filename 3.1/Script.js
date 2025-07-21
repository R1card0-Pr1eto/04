const likesEl = document.getElementById('likesCount');
const btn = document.getElementById('likeButton');
let likes = 3; 

btn.onclick = () => {
  likes++;
  likesEl.textContent = likes + ' like(s)';
}
