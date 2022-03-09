



$('.carrousel__items').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    // {
    //   breakpoint: 768,
    //   settings: {
    //     arrows: false,
    //     centerPadding: '40px',
    //     slidesToShow: 3
    //   }
    // },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    }
  ]
});


$('.sliders__items').slick({
  infinite:true,
  slidesToShow: 1,
  autoplay: true,
  centerPadding: '40px',
  arrows:true,
  autoplaySpeed: 2000
});
		

var myCarousel = document.querySelector('#carouselExampleDark')
var carousel = new bootstrap.Carousel(myCarousel)

