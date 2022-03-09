

const triggerTabList = [].slice.call(document.querySelectorAll('#caracteristicas button'))
triggerTabList.forEach(function (triggerEl) {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})



$('.carrousel__items').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
		

$('.informacionprecio__showmore').on('click', function(e){
  e.preventDefault();

  $('.informacionprecio__ley').toggleClass('informacionprecio__ley--close');
  $('.informacionprecio__showmore').toggleClass('informacionprecio__showmore--close')
  if($('.informacionprecio__showmore').hasClass('informacionprecio__showmore--close')){
    $('.informacionprecio__showmore').text('leer más')  
  }else{
    $('.informacionprecio__showmore').text(' leer menos')  
  }
  
  

})



$(document).ready(function(){
  $('.informacionprecio--fancybox').fancybox({
    autoDimensions: false,
  })

  
});