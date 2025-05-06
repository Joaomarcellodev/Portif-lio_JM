// Lógica da foto giratória

const photo = document.getElementById("photo").querySelector("img");
let toggled = false;

photo.addEventListener("click", () => {
  photo.style.transform = "rotateY(180deg)";
  photo.style.opacity = "0";

  setTimeout(() => {
    photo.src = toggled
      ? "./images/photo_jm.jpeg"
      : "./images/logo_jm.png";
    photo.style.transform = "rotateY(0deg)";
    photo.style.opacity = "1";
    toggled = !toggled;
  }, 600);
});

// Lógica para o menu responsivo do header

document.querySelector('.menu-button').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});
