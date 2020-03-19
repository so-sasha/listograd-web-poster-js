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

// $('img.branches').each(function(){
//   var $img = $(this);
//   var imgClass = $img.attr('class');
//   var imgURL = $img.attr('src');
//   $.get(imgURL, function(data) {
//     var $svg = $(data).find('svg');
//     if(typeof imgClass !== 'undefined') {
//       $svg = $svg.attr('class', imgClass+' replaced-svg');
//     }
//     $svg = $svg.removeAttr('xmlns:a');
//     if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
//       $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
//     }
//     $img.replaceWith($svg);
//   }, 'xml');
// });


// document.getElementById('branch').onclick = () =>{document.getElementById('branch').style.backgroundColor = '#9954AB'}
//
// document.getElementById('branch_2').onclick = () =>{document.getElementById('branch_2').style.backgroundColor = '#9954AB'}
//
// document.getElementById('branch_3').onclick = () =>{document.getElementById('branch_3').style.backgroundColor = '#9954AB'}
//
// document.getElementById('branch_4').onclick = () =>{document.getElementById('branch_4').style.backgroundColor = '#9954AB'}
//
// document.getElementById('branch_5').onclick = () =>{document.getElementById('branch_5').style.backgroundColor = '#9954AB'}
//
// document.getElementById('branch_6').onclick = () =>{document.getElementById('branch_6').style.backgroundColor = '#9954AB'}
//
// document.getElementById('branch_7').onclick = () =>{document.getElementById('branch_7').style.backgroundColor = '#9954AB'}
//
// document.getElementById('branch_8').onclick = () =>{document.getElementById('branch_8').style.backgroundColor = '#9954AB'}
