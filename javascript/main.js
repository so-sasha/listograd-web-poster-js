document.getElementById('branch').onclick = e => {
  e.target.style.display = 'none'
}

document.getElementById('branch_2').onclick = e => {
  e.target.style.display = 'none'
}

document.getElementById('branch_3').onclick = e => {
  e.target.style.display = 'none'
}

document.getElementById('branch_4').onclick = e => {
  e.target.style.display = 'none'
}

document.getElementById('branch_5').onclick = e => {
  e.target.style.display = 'none'
}

document.getElementById('branch_6').onclick = e => {
  e.target.style.display = 'none'
}

document.getElementById('branch_7').onclick = e => {
  e.target.style.display = 'none'
}

document.getElementById('branch_8').onclick = e => {
  e.target.style.display = 'none'
}

particlesJS.load('particles-js', 'javascript/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// if (document.getElementById('branch').style.display === 'none') {
//   document.getElementById('text').style.display = 'block'
// }

// while (document.getElementById('branch').style.display === 'none') {
//   document.getElementById('text').style.display = 'block'
// }
//
// while (document.getElementById('branch_8').style.display === 'none') {
//   document.getElementById('text').style.display = 'block'
// }

// do {
//   document.getElementById('text').style.display = 'block'
// } while (document.getElementById('branch_8').style.display === 'none')
//
// do {
//   document.getElementById('text').style.display = 'block'
// } while (document.getElementById('branch').style.display === 'none')

let soundElement = document.getElementById('audio')
let elementFromHTML = document.getElementById('branch_8')
elementFromHTML.onclick = function() {
  soundElement.play()
}
