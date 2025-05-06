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


// Lógica para o Carrosel no mobile tech


function startCarousel() {
  const iconsContainer = document.querySelector('#icons');
  const totalIcons = iconsContainer.children.length;
  const iconWidth = 68; // 60px (width) + 8px (gap)
  const containerWidth = iconWidth * totalIcons; // Largura dinâmica baseada no número de ícones

  // Clona os ícones para criar a ilusão de infinito
  const clonedIcons = Array.from(iconsContainer.children).map(icon => icon.cloneNode(true));
  clonedIcons.forEach(icon => iconsContainer.appendChild(icon));

  let scrollPosition = 0;
  const maxScroll = iconWidth * totalIcons;

  function animateCarousel() {
    scrollPosition += 0.8; // Velocidade de rolagem (ajuste para mais lento/rápido)
    if (scrollPosition >= maxScroll) {
      scrollPosition = 0; // Reinicia suavemente
    }
    iconsContainer.style.transform = `translateX(-${scrollPosition}px)`;
    requestAnimationFrame(animateCarousel);
  }

  // Define a largura do contêiner e centraliza o carrossel
  iconsContainer.style.width = `${containerWidth}px`;
  iconsContainer.style.transform = `translateX(-50%)`;

  // Inicia a animação
  requestAnimationFrame(animateCarousel);
}

// Inicia o carrossel em dispositivos móveis
if (window.innerWidth <= 768) {
  startCarousel();
}

// Reinicia o carrossel em caso de redimensionamento
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    startCarousel();
  }
});




