// let divsNumber = 3
//
// for (let i = 0; i < divsNumber; i+=1) {
//
//   let div = document.createElement('div')
//
//   div.style.cssText = [makeCircle()][anime.random(0,1)]
//
//   div.style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
//
//   div.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh)`
//
//   div.onmouseenter = function(event) {
//
//     event.target.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh)`
//   }
//   document.body.append(div)
// }
//
// function makeCircle(element) {
//   let size = anime.random(0, 500)
//   return `
//     width: ${size}px;
//     height: ${size}px;
//     border-radius: 100%;
//   `
// }

// let fireflyFlying01 = anime({
//   targets: '.fireflies_2',
//   translateX: 500,
//   autoplay: true,
//   duration: 5000,
//   easing: 'easeInOutSine',
//   loop: true,
// })

function randomValues() {
  anime({
    targets: '.fireflies_2',
    translateX: function() {
      return anime.random(0, 1366);
    },
    translateY: function() {
      return anime.random(0, 768);
    },
    easing: 'easeInOutQuad',
    duration: 5000,
    complete: randomValues,
    scale: 3,
  })
}
randomValues()

function changeColor() {
  anime({
    targets: '.fireflies_2',
    backgroundColor: ['#BDDB96', '#9954AB'],
    duration: 10000,
    loop: true,
    easing: 'easeInOutQuad',
    direction: 'alternate',
  })
}
changeColor()

// let gettingThroughThickets = document.querySelector('branches')

// document.querySelector('.branches').onclick = function() {disappear()}
//
// function disappear() {
//   document.querySelector('.branches').style.display = 'none';
// }

document.querySelector('.branch_disappear').onclick = () =>{document.querySelector('.branch_disappear').style.display = 'none'}

document.querySelector('.branch_disappear_2').onclick = () =>{document.querySelector('.branch_disappear_2').style.display = 'none'}

document.querySelector('.branch_disappear_3').onclick = () =>{document.querySelector('.branch_disappear_3').style.display = 'none'}

document.querySelector('.branch_disappear_4').onclick = () =>{document.querySelector('.branch_disappear_4').style.display = 'none'}

document.querySelector('.branch_disappear_5').onclick = () =>{document.querySelector('.branch_disappear_5').style.display = 'none'}

document.querySelector('.branch_disappear_6').onclick = () =>{document.querySelector('.branch_disappear_6').style.display = 'none'}

document.querySelector('.branch_disappear_7').onclick = () =>{document.querySelector('.branch_disappear_7').style.display = 'none'}

document.querySelector('.branch_disappear_8').onclick = () =>{document.querySelector('.branch_disappear_8').style.display = 'none'}

// let fireflyFlying01 = document.getElementById('firefly')
//
// fireflyFlying01.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`

// var fireflyFlying01 = anime.timeline({
//   endDelay: 1000,
//   easing: 'easeInOutQuad',
//   direction: 'alternate',
//   loop: true
// })
