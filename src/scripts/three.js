import "../styles/main.css"

import * as THREE from "three"
// import Math

console.log('script loaded')

const scene = new THREE.Scene()

scene.background = new THREE.Color(0x2D3142)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg")
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(45)

const geometry = new THREE.BoxGeometry(20, 20, 20)
const material = new THREE.MeshPhongMaterial({ color: 0x212532 })
const cube = new THREE.Mesh(geometry, material)
cube.position.set(0, 14, -15)
cube.castShadow = true

scene.add(cube)

const topLight = new THREE.SpotLight(0xEEEDED, 10000, 0)
topLight.position.set(0, 80, 10)
topLight.castShadow = true

const pointLight = new THREE.PointLight(0xFF8845, 4000, 500)
// pointLight.position.set(16, 15, 25)
// pointLight.castShadow = true
scene.add(topLight, pointLight)

// const lightHelper = new THREE.PointLightHelper(pointLight)
// scene.add(lightHelper)


let forward = true

function animate() {
  requestAnimationFrame(animate)
  document.onmousemove = (e) => {
    let x = e.clientX - window.innerWidth / 2
    let y = e.clientY - window.innerHeight / 2
    pointLight.position.setX(x / -25)
    pointLight.position.setY(10 + (y / -25))
    let q = 0.0015
    x = x * q
    y = y * q
    cube.rotation.x = y
    cube.rotation.y = x
    // cube.rotation.z += .001
  }
  cube.rotation.z += 0.003

  // console.log(forward)
  if (forward == true) {
    pointLight.position.z += 0.02
    if (pointLight.position.z > 12)
      forward = false
  }
  else {
    pointLight.position.z -= 0.02
    if (pointLight.position.z <= 5)
      forward = true
  }
  renderer.render(scene, camera)
}

const ambientLight = new THREE.AmbientLight({ color: 0xFFFFFF }, 3)
ambientLight.position.set(0, -30, 10)
scene.add(ambientLight)
const planeGeometry = new THREE.PlaneGeometry(150, 500, 32, 32)
const planeMaterial = new THREE.MeshPhongMaterial({ color: 0x282C3C })
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -1.3
plane.rotation.z = 1.55
plane.position.set(0, -35, 0)
plane.receiveShadow = true
scene.add(plane)

animate()
// document.addEventListener("mousemove", animate)
