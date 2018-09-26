$(document).ready(function (){
	
	$('.design__slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: '.slider__right',
        prevArrow: '.slider__left'
	});

	$('.way__slider-box').slick({
		dots: true,
		nextArrow: '.way__slider-right',
        prevArrow: '.way__slider-left'
	});

	$(".way__slider-box").on('afterChange', function(event, slick, currentSlide){
	    $(".way__slider-count-number").text(currentSlide + 1);
	});

	$('.work__sliderBox').slick({
		dots: true,
		centerMode: true,
		centerPadding: '400px',
		slidesToShow: 1,
		nextArrow: '.work__slider-right',
        prevArrow: '.work__slider-left',
        responsive: [
        	{
		      breakpoint: 1600,
		      settings: {
		        centerMode: true,
		        centerPadding: '280px',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 1200,
		      settings: {
		        centerMode: true,
		        centerPadding: '140px',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 1200,
		      settings: {
		        centerMode: true,
		        centerPadding: '0px',
		        slidesToShow: 1
		      }
		    }
        ]
	});

	$(window).scroll(function () {                              //управление фоном header
		if ($(this).scrollTop() > 0) {
			$('.header').css("background", "#000"); 
		} else {
			$('.header').css("background", "transparent");
		}
	});

	$('.map__info-close').on('click', function(){
		var left = $('.map__info').width() + 50;
		$('.map__popup').css('display', 'none');
		$('.map__info').css('left', '-' + left + 'px');
	});

	ymaps.ready(init); 

	function init(ymaps){
		var myMap = new ymaps.Map("map", {
            center: [55.80803093, 37.63597469],
            zoom: 17,
            controls: ["zoomControl"],
            behaviors: ["drag"]
        });

        var placemark = new ymaps.Placemark([55.80803093, 37.63597469],{
        	hintContent: 'Мы находимся здесь'
        });

        myMap.geoObjects.add(placemark);


        placemark.events.add('click', function(e){
        	if ($(window).width() > 576) {
        		var step = $(window).width() * 0.2;
        	} else {
        		var step = $(window).width() * 0.02;
        	}        	
			$('.map__popup').css('display', 'block');
			$('.map__info').css('left', step);
		});
	}


		
});