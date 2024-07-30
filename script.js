function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img corretamente
  const img = document.querySelector("#profile img") 
  
  // Substituir a img
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // Se não tiver, manter imagem normal
    img.setAttribute("src", "./assets/avatar-night.png")
  }
}
