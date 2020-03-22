document.getElementById('branch').onclick = e => {
  e.target.style.display = 'none'
}

// document.getElementById('branch_2').onclick = e => {
//   e.target.style.display = 'none'
// }

document.getElementById('branch_3').onclick = e => {
  e.target.style.display = 'none'
}

document.getElementById('branch_4').onclick = e => {
  e.target.style.display = 'none'
}

// document.getElementById('branch_5').onclick = e => {
//   e.target.style.display = 'none'
// }

document.getElementById('branch_6').onclick = e => {
  e.target.style.display = 'none'
}

document.getElementById('branch_7').onclick = e => {
  e.target.style.display = 'none'
}

// document.getElementById('branch_8').onclick = e => {
//   e.target.style.display = 'none'
// }

particlesJS.load('particles-js', 'javascript/particles.json', function () {
  console.log('callback - particles.js config loaded');
});

let soundElement = document.getElementById('audio')
let rustlingBranch_8 = document.getElementById('branch_8')
rustlingBranch_8.onclick = function() {
  soundElement.play();
  rustlingBranch_8.style.display = 'none';
}

let rustlingBranch_5 = document.getElementById('branch_5')
rustlingBranch_5.onclick = function() {
  soundElement.play();
  rustlingBranch_5.style.display = 'none';
}

let rustlingBranch_2 = document.getElementById('branch_2')
rustlingBranch_2.onclick = function() {
  soundElement.play();
  rustlingBranch_2.style.display = 'none';
}

if (document.getElementById('branch').style.display === 'none') {
  document.getElementById('text').style.display = 'block';
}

// while (document.getElementById('branch').style.display === 'none') {
//   document.getElementById('text').style.display = 'block';
// }