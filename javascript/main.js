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

// document.getElementById('branch').onclick = e => {
//   e.target.style.display = 'none';
//   document.getElementById('text').style.display = 'block';
// }

// document.getElementById('branch_2').onclick = e => {
//   e.target.style.display = 'none'
// }

// document.getElementById('branch_3').onclick = e => {
//   e.target.style.display = 'none'
// }
//
// document.getElementById('branch_4').onclick = e => {
//   e.target.style.display = 'none'
// }

// document.getElementById('branch_5').onclick = e => {
//   e.target.style.display = 'none'
// }
//
// document.getElementById('branch_6').onclick = e => {
//   e.target.style.display = 'none'
// }
//
// document.getElementById('branch_7').onclick = e => {
//   e.target.style.display = 'none'
// }

// document.getElementById('branch_8').onclick = e => {
//   e.target.style.display = 'none'
// }

// particlesJS.load('particles-js', 'javascript/particles.json', function () {
//   console.log('callback - particles.js config loaded');
// });

// let soundElement = document.getElementById('audio')
// let rustlingBranch_8 = document.getElementById('branch_8')
// rustlingBranch_8.onclick = function() {
//   soundElement.play();
//   rustlingBranch_8.style.display = 'none';
// }
//
// let rustlingBranch_5 = document.getElementById('branch_5')
// rustlingBranch_5.onclick = function() {
//   soundElement.play();
//   rustlingBranch_5.style.display = 'none';
// }
//
// let rustlingBranch_2 = document.getElementById('branch_2')
// rustlingBranch_2.onclick = function() {
//   soundElement.play();
//   rustlingBranch_2.style.display = 'none';
// }
//
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

// // Сколько создавать карт
// const   TEXT_NUMBER = 7
// // Название файлов с картами
// let text = [
//   document.getElementById('text'),
//   document.getElementById('text_2'),
//   document.getElementById('text_3'),
//   document.getElementById('text_4'),
//   document.getElementById('text_5'),
//   document.getElementById('text_6'),
//   document.getElementById('text_7')
// ]
// // Функция, которая перемешивает массив с названиямии
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }
// // Применяем функцию перемешивания
// text = shuffle(text)
//
// // Находим контейнер для карт
// // Он нам нужен, чтобы в ЦСС все выровнять
// let textContainer = document.getElementById('text_container')
// // При помощи цикла создаем карты и вставляем внутрь контейнера
// for (let i = 0; i < TEXT_NUMBER; i++) {
//   let newText = document.createElement('newText')
//   newText.src = `${text[i]}`
//   newText.classList.add('card')
//   newText.onclick = function() {
//
//   }
//   textContainer.append(newText)
// }