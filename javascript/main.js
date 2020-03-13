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
      return anime.random(0, 1680);
    },
    translateY: function() {
      return anime.random(0, 1680);
    },
    easing: 'easeInOutQuad',
    duration: 5000,
    complete: randomValues,
  })
}

randomValues()

// let fireflyFlying01 = document.getElementById('firefly')
//
// fireflyFlying01.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`

// var fireflyFlying01 = anime.timeline({
//   endDelay: 1000,
//   easing: 'easeInOutQuad',
//   direction: 'alternate',
//   loop: true
// })
// .add({ targets: '.fireflies_2',  background: '#8FB75B' }, 0)
