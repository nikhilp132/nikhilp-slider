console.log('hello!');

function nextSlide() {
  var slideWidth = $('.slide1').width();

  $('.slideContainer').animate({ left: '-200px' });
}
