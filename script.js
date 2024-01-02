function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    html.classList.remove('light')
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute(
      'alt', 
      'Foto de Matheus Quirino com fundo branco. Bigode, sem sorrir, camisa branca.'
    )
  } else {
    html.classList.add('light')
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      'alt', 
      'Foto de Matheus Quirino com fundo preto. Óculos escuro, barba, camisa verde.'
    )
  }
  // html.classList.toggle('light')
}