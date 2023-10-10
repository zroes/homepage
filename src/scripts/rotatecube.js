function rotateCube(e) {
  let cube = document.getElementsByClassName('cube')

  let x = e.clientX - window.innerWidth / 2
  let y = e.clientY - window.innerHeight / 2
  let q = 0.15
  x = x * q * 1.25
  // console.log(x)
  y = -y * q * 1.25

  for (let i = 0; i < cube.length; i++) {
    cube[i].style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg) rotateX(50deg) rotateZ(135deg)"
  }

}

document.addEventListener("mousemove", rotateCube)