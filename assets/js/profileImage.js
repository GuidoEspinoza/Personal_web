//* Función para la animación de profileImage

export function profileImage() {
    if (window.innerWidth > 768) {
      const profileImage = document.getElementById('profileImage')
      const width = profileImage.clientWidth
      const height = profileImage.clientHeight
  
      profileImage.addEventListener('mousemove', (evt) => {
        const { layerX, layerY } = evt
  
        const yRotation = (
          (layerX - width / 2) / width
        ) * 8
  
        const xRotation = (
          (layerY - height / 2) / height
        ) * 8
  
        const string = `
          perspective(1200px)
          scale(1)
          rotateX(${xRotation}deg)
          rotateY(${yRotation}deg)`
  
        profileImage.style.transform = string
      })
  
      profileImage.addEventListener('mouseout', () => {
        profileImage.style.transform = `
          perspective(1200px)
          scale(1)
          rotateX(0)
          rotateY(0)`
      })
    }
  }