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

document.getElementById('#branch').onclick = () =>{document.getElementById('#branch').style.display = 'none'}

document.getElementById('#branch_2').onclick = () =>{document.getElementById('#branch_2').style.display = 'none'}

document.getElementById('#branch_3').onclick = () =>{document.getElementById('#branch_3').style.display = 'none'}

document.getElementById('#branch_4').onclick = () =>{document.getElementById('#branch_4').style.display = 'none'}

document.getElementById('#branch_5').onclick = () =>{document.getElementById('#branch_5').style.display = 'none'}

document.getElementById('#branch_6').onclick = () =>{document.getElementById('#branch_6').style.display = 'none'}

document.getElementById('#branch_7').onclick = () =>{document.getElementById('#branch_7').style.display = 'none'}

document.getElementById('#branch_8').onclick = () =>{document.getElementById('#branch_8').style.display = 'none'}

// let fireflyFlying01 = document.getElementById('firefly')
//
// fireflyFlying01.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`

// var fireflyFlying01 = anime.timeline({
//   endDelay: 1000,
//   easing: 'easeInOutQuad',
//   direction: 'alternate',
//   loop: true
// })
