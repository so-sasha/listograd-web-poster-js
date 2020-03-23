document.getElementById('branch').onclick = e => {
  e.target.style.display = 'none';
  document.getElementById('text').style.display = 'block';
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

document.getElementById('text').onclick = e => {
  e.target.style.display = 'none';
  document.getElementById('text_2').style.display = 'block';
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
  document.getElementById('text').style.display = 'block';
}

// Сколько создавать карт
const CARDS_NUMBER = 10
// Название файлов с картами
let cards = [
  'img/1_card.svg',
  'img/2_card.svg',
  'img/3_card.svg',
  'img/4_card.svg',
  'img/5_card.svg',
  'img/6_card.svg',
  'img/7_card.svg',
  'img/8_card.svg',
  'img/9_card.svg',
  'img/10_card.svg',
  'img/11_card.svg',
  'img/12_card.svg',
  'img/13_card.svg'
]
// Функция, которая перемешивает массив с названиямии
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// Применяем функцию перемешивания
cards = shuffle(cards)

// Находим контейнер для карт
// Он нам нужен, чтобы в ЦСС все выровнять
let cardsContainer = document.getElementById('third__cards-container')
// При помощи цикла создаем карты и вставляем внутрь контейнера
for (let i = 0; i < CARDS_NUMBER; i++) {
  let newCard = document.createElement('img')
  newCard.src = `img/${cards[i]}`
  newCard.classList.add('card')
  newCard.onclick = function() {

  }
  cardsContainer.append(newCard)
}