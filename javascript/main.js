particlesJS.load('particles-js', 'javascript/particles.json')

let hiddenBranches = 1
let soundElement = document.getElementById('audio')

Array.from(document.querySelectorAll('.branches')).forEach(element => {
  element.onclick = e => {
    if (hiddenBranches % 2 === 0) {
      soundElement.play();
    }
    hiddenBranches += 1
    e.target.style.display = 'none'
    if (hiddenBranches === 8) {
      document.getElementById('text').style.display = 'block';
    }
  }
})

document.getElementById('text').onclick = e => {
  e.target.style.display = 'none';
  document.getElementById('text_2').style.display = 'block';
  // document.getElementById('text_2').style.color = '#9954AB';
}

document.getElementById('text_2').onclick = e => {
  e.target.style.display = 'none';
  document.getElementById('text_3').style.display = 'block';
}

document.getElementById('text_3').onclick = e => {
  e.target.style.display = 'none';
  document.getElementById('text_4').style.display = 'block';
}

document.getElementById('text_4').onclick = e => {
  e.target.style.display = 'none';
  document.getElementById('text_5').style.display = 'block';
}

document.getElementById('text_5').onclick = e => {
  e.target.style.display = 'none';
  document.getElementById('text_6').style.display = 'block';
}

document.getElementById('text_6').onclick = e => {
  e.target.style.display = 'none';
  document.getElementById('text_7').style.display = 'block';
}

document.getElementById('text_7').onclick = e => {
  e.target.style.display = 'none';
  document.getElementById('text_8').style.display = 'block';
}

document.getElementById('text_8').onclick = e => {
  e.target.style.display = 'none';
  document.getElementById('text').style.display = 'block';
}
//
document.querySelector('body').onclick = function () {
  document.getElementById('particles-js').style.color = '#79B9F5';
}