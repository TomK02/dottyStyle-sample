// Download File

$('.navlink__download a').ready(function () {
  $('#downloadFile').click(function (event) {
    event.preventDefault();

    window.location.href = './File/sampleFile.txt';
  });
});

// Nav Marker

$('.slideshow__navbar').on('click', 'a', function () {
  $('.slideshow__navbar a.active').removeClass('active');
  $(this).addClass('active');
});

$('.slideshow__video-container').slick({
  dots: true,
  arrows: false,
  speed: 500,
});
