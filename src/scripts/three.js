import "../styles/main.css"
import * as THREE from "three"
// import Math

console.log('script loaded')

const scene = new THREE.Scene()

scene.background = new THREE.Color(0x2D3142)

// resize observer
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg")
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(50)

const geometry = new THREE.BoxGeometry(17, 17, 17)
const normal = new THREE.TextureLoader().load('https://i.imgur.com/DqcP8Qk.png')
const material = new THREE.MeshPhongMaterial({ color: 0x212532 })
// material.displacementMap = normal
material.bumpMap = normal
material.bumpScale = 0.3
material.shininess = 40
material.dithering = true
// material.reflectivity = 0
const cube = new THREE.Mesh(geometry, material)
cube.position.set(0, 14, -15)
cube.castShadow = true

scene.add(cube)

const topLight = new THREE.SpotLight(0xB6C6F0, 10000, 0)
topLight.position.set(0, 80, 10)
topLight.castShadow = true

const pointLight = new THREE.PointLight(0xFF8845, 4000, 400)

const cursorLight = new THREE.PointLight(0x38A3A5, 1200, 0)
cursorLight.position.setZ(4)
scene.add(topLight, pointLight, cursorLight)

// const lightHelper = new THREE.PointLightHelper(cursorLight)
// scene.add(lightHelper)


let forward = true
let yRot = 0
let xRot = 0

function animate() {
  requestAnimationFrame(animate)
  cube.rotation.z += 0.006
  yRot -= 0.0015
  cube.rotation.y -= 0.0015
  document.onmousemove = (e) => {
    let x = e.clientX - window.innerWidth / 2
    let y = e.clientY - window.innerHeight / 2

    // pointLight.position.setX(x / -25)
    // pointLight.position.setY(5 + Math.abs(y / -25))
    pointLight.position.x = THREE.MathUtils.lerp(pointLight.position.x, x / -25, 0.03)
    pointLight.position.y = THREE.MathUtils.lerp(pointLight.position.y, 5 + Math.abs(y / -25), 0.03)
    cursorLight.position.x = x / 16
    cursorLight.position.y = y / -16
    let q = 0.0015
    x = x * q
    y = y * q

    // cube.rotation.x = y
    cube.rotation.x = THREE.MathUtils.lerp(cube.rotation.x, y + xRot, 0.05)
    cube.rotation.y = THREE.MathUtils.lerp(cube.rotation.y, x + yRot, 0.1)
    // console.log(cube.rotation.x, cube.rotation.y)
  }

  if (forward == true) {
    pointLight.position.z += 0.04
    cube.position.y -= 0.006
    if (pointLight.position.z > 12)
      forward = false
  }
  else {
    pointLight.position.z -= 0.04
    cube.position.y += 0.006
    if (pointLight.position.z <= 3)
      forward = true
  }
  renderer.render(scene, camera)
}

function moveCube() {
  const t = document.body.getBoundingClientRect().top
  // console.log(cube.position.x)
  cube.rotation.x = t * -0.0042
  xRot = t * -0.0042
  if (t > -725) {
    cube.position.x = t * 0.05
    cube.position.y = 14 + t * 0.02
  }
  else if (t > -1450) {
    cube.position.x = -72.2 - t * 0.05
    // cube.position.y = 14 + t * 0.02
  }
  else {
    // console.log(t * 0.04)
    cube.position.x = 0
    cube.position.y = -58 - t * 0.04
  }
  // console.log(t)
}
document.body.onscroll = moveCube

const ambientLight = new THREE.AmbientLight({ color: 0xFFFFFF }, 3)
ambientLight.position.set(0, -30, 10)
scene.add(ambientLight)
const planeGeometry = new THREE.PlaneGeometry(150, 500, 32, 32)
const planeMaterial = new THREE.MeshPhysicalMaterial({ color: 0x282C3C })
// const planeMaterial = new THREE.ShadowMaterial({ color: 0x282C3C })
planeMaterial.dithering = true
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -1.3
plane.rotation.z = 1.55
plane.position.set(0, -35, 0)
plane.receiveShadow = true
scene.add(plane)

animate()
// document.addEventListener("mousemove", animate)
