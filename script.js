console.log('hello!');

function nextSlide() {
  var slideWidth = $('.slide1').width();

  $('.slideContainer').animate({ left: '-200px' });
}

function prevSlide() {
  var slideWidth = $('.slide1').width();

  $('.slideContainer').animate({ left: '0px' });
}
