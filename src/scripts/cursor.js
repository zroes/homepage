const coords = { x: 0, y: 0 }
const circles = document.querySelectorAll(".circle")

const colors = [
  "#38a3a5",
  "#3ba4a7",
  "#3ea5a9",
  "#42a6ab",
  "#45a7ad",
  "#48a7af",
  "#4ba8b1",
  "#4fa9b2",
  "#52aab4",
  "#55abb6",
  "#58acb8",
  "#5cadba",
  "#5faebc",
  "#62afbe",
  "#65b0c0",
  "#68b0c2",
  "#6cb1c4",
  "#6fb2c6",
  "#72b3c8",
  "#75b4ca",
  "#79b5cb",
  "#7cb6cd",
  "#7fb7cf",
  "#82b8d1",
  "#86b9d3",
  "#89b9d5",
  "#8cbad7",
  "#8fbbd9",
  "#92bcdb",
  "#96bddd",
  "#99bedf",
  "#9cbfe1",
  "#9fc0e3",
  "#a3c1e4",
  "#a6c2e6",
  "#a9c2e8",
  "#acc3ea",
  "#b0c4ec",
  "#b3c5ee",
  "#b6c6f0",


]

const orangeColors = [
  "ff8845",
  "#fd8a49",
  "#fb8b4e",
  "#f98d52",
  "#f88e57",
  "#f6905b",
  "#f4925f",
  "#f29364",
  "#f09568",
  "#ee966c",
  "#ec9871",
  "#ea9975",
  "#e99b7a",
  "#e79d7e",
  "#e59e82",
  "#e3a087",
  "#e1a18b",
  "#dfa390",
  "#dda594",
  "#dba698",
  "#daa89d",
  "#d8a9a1",
  "#d6aba5",
  "#d4adaa",
  "#d2aeae",
  "#d0b0b3",
  "#ceb1b7",
  "#ccb3bb",
  "#cbb5c0",
  "#c9b6c4",
  "#c7b8c9",
  "#c5b9cd",
  "#c3bbd1",
  "#c1bcd6",
  "#bfbeda",
  "#bdc0de",
  "#bcc1e3",
  "#bac3e7",
  "#b8c4ec",
  "#b6c6f0",

]

circles.forEach(function (circle, index) {
  circle.x = 0
  circle.y = 0
})


window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX
  coords.y = e.clientY

})

const cards = document.getElementsByClassName("app-card")
Array.from(cards).forEach((card) => {
  card.addEventListener(
    "mouseover",
    () => {
      circleOrange()
    }
  )
  card.addEventListener(
    "mouseout",
    () => {
      circleNormal()
    }
  )
})


function circleOrange() {
  circles.forEach(function (circle, index) {
    circle.style.background = orangeColors[Math.floor((index - 1) / 2)]
    console.log(index, circle.style.background)
    circle.style.transform = "scale(3.0)"
    circle.style.opacity = 0.003 * (index + 15)
    if (index <= 3) {
      circle.style.opacity = 0.03
      circle.style.background = '#282C3C'
    }
  })
}

function circleNormal() {
  circles.forEach(function (circle, index) {
    circle.style.background = colors[Math.floor((index - 1) / 2)]
    circle.style.transform = "scale(1.0)"
    circle.style.opacity = 0.0013 * (index + 15)
    if (index <= 3) {
      circle.style.opacity = 0
    }
  })
}

function animateCircles() {

  let x = coords.x
  let y = coords.y

  circles.forEach(function (circle, index) {
    circle.style.left = x - 16 + "px"
    circle.style.top = y - 16 + "px"

    circle.style.scale = (circles.length - index) / circles.length

    circle.x = x
    circle.y = y

    const nextCircle = circles[index + 1] || circles[0]
    x += (nextCircle.x - x) * 0.18
    y += (nextCircle.y - y) * 0.18

    // if (index == 25) {
    //   circle.x = coords.x
    //   circle.y = coords.y
    // }
  })

  requestAnimationFrame(animateCircles)
}

circleNormal()
animateCircles()
