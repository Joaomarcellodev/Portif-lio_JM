// Lógica da foto giratória

const photo = document.getElementById("photo").querySelector("img")
let toggled = false

photo.addEventListener("click", () => {
  photo.style.transform = "rotateY(180deg)"
  photo.style.opacity = "0"

  setTimeout(() => {
    photo.src = toggled ? "./images/photo_jm.jpeg" : "./images/logo_joao_icon-corrigido(320x320).png"
    photo.style.transform = "rotateY(0deg)"
    photo.style.opacity = "1"
    toggled = !toggled
  }, 600)
})

// Lógica para o menu responsivo do header

document.querySelector(".menu-button").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("active")
})

// Adiciona evento de clique para cada link dentro do menu
document.querySelectorAll("header nav .menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".menu").classList.remove("active")
  })
})

// Lógica para o Carrosel no mobile tech

function startCarousel() {
  const iconsContainer = document.querySelector("#icons")
  const totalIcons = iconsContainer.children.length
  const iconWidth = 68 // 60px (width) + 8px (gap)
  const containerWidth = iconWidth * totalIcons // Largura inicial baseada no número de ícones

  // Clona os ícones várias vezes para garantir um efeito infinito suave
  const clonesNeeded = Math.ceil(window.innerWidth / containerWidth) + 1 // Garante que haja ícones suficientes para cobrir a tela
  for (let i = 0; i < clonesNeeded; i++) {
    const clonedIcons = Array.from(iconsContainer.children)
      .slice(0, totalIcons)
      .map((icon) => icon.cloneNode(true))
    clonedIcons.forEach((icon) => iconsContainer.appendChild(icon))
  }

  // Recalcula a largura total do contêiner após adicionar os clones
  const updatedTotalIcons = iconsContainer.children.length
  const totalWidth = iconWidth * updatedTotalIcons
  iconsContainer.style.width = `${totalWidth}px`

  let scrollPosition = 0
  const maxScroll = containerWidth // O ponto de reinício é a largura do conjunto original de ícones

  function animateCarousel() {
    scrollPosition += 0.9 // Velocidade de rolagem (ajuste para mais lento/rápido)
    if (scrollPosition >= maxScroll) {
      scrollPosition -= maxScroll // Reduz a posição para simular continuidade
    }
    iconsContainer.style.transform = `translateX(-${scrollPosition}px)`
    requestAnimationFrame(animateCarousel)
  }

  // Define a largura inicial do contêiner e centraliza o carrossel
  iconsContainer.style.transform = `translateX(-50%)`

  // Inicia a animação
  requestAnimationFrame(animateCarousel)
}

// Inicia o carrossel em dispositivos móveis
if (window.innerWidth <= 768) {
  startCarousel()
}

// Reinicia o carrossel em caso de redimensionamento
let resizeTimeout

window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    if (window.innerWidth <= 758) {
      startCarousel()
    }
  }, 200)
})
