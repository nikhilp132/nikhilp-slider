console.log('hello!');

var slideWidth = $('.innerSlides').width();
var containerWidth = $('.slideContainer').width();
var sliderPos = 0;

$('.slideContainer').css('width', '1000px');
function nextSlide() {
  if (sliderPos != slideWidth - containerWidth) {
    sliderPos -= slideWidth;
  }
  console.log(sliderPos);

  $('.slideContainer').animate({ left: sliderPos });
}

function prevSlide() {
  if (sliderPos != 0) {
    sliderPos += slideWidth;
  }

  console.log(sliderPos);

  $('.slideContainer').animate({ left: sliderPos });
}
