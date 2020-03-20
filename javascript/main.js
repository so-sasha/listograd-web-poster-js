// function changeFirefliesColor() {
//   anime({
//     targets: '.fireflies',
//     backgroundColor: ['#BDDB96', '#9954AB'],
//     duration: 10000,
//     loop: true,
//     easing: 'easeInOutQuad',
//     direction: 'alternate',
//   })
// }
// changeFirefliesColor()

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

document.getElementById('branch_9').onclick = e => {
  e.target.style.display = 'none'
}

particlesJS.load('particles-js', 'javascript/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
