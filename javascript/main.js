let divsNumber = 10

for (let i = 0; i < divsNumber; i+=1) {

  let div = document.createElement('div')

  div.style.cssText = [makeCircle()][anime.random(0,1)]

  div.style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`

  div.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh)`

  div.onmouseenter = function(event) {

    event.target.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh)`
  }
  document.body.append(div)
}

function makeCircle(element) {
  let size = anime.random(0, 500)
  return `
    width: ${size}px;
    height: ${size}px;
    border-radius: 100%;
  `
}
