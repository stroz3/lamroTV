const swiperIndexCatalogConfig = {
	slidesPerView: 5,
	lazy: {
	  loadOnTransitionStart: true,
	},
	navigation: {
	  nextEl: ".slick-next", 
	  prevEl: ".slick-prev",
	},
	loop: true,
	freeMode: true,
	breakpoints: {
	  1600: { slidesPerView: 6 },
	  1430: { slidesPerView: 5 },
	  1200: { slidesPerView: 4 },
	  992: { slidesPerView: 3 },
	  768: { slidesPerView: 2 },
	  320: { slidesPerView: 1 },
	},
  };
  
  // Функция для инициализации слайдеров
  function initializeSliders() {
	$('.index-catalog-block').each(function () {
	  const block = $(this);
	  const sliderWrapper = block.find('.slider-wrapp');
	  const nextEl = block.find('.slick-next');
	  const prevEl = block.find('.slick-prev');
	  const slider = block;
  
	  // Копируем базовую конфигурацию
	  let config = { ...swiperIndexCatalogConfig };
  
	  // Если кнопок навигации нет, отключаем их в конфигурации
	  if (nextEl.length === 0 || prevEl.length === 0) {
		config.navigation = false;
	  } else {
		config.navigation = {
		  nextEl: nextEl[0], // Передаем DOM-элемент
		  prevEl: prevEl[0],
		};
	  }
  
	  // Инициализируем слайдер
	  let swiperInstance = new Swiper(sliderWrapper[0], config);
  
	  // Логика переключения между слайдером и сеткой
	  if (slider.hasClass('grid-view')) {
		swiperInstance.destroy(true, true);
		sliderWrapper.find('.swiper-next, .swiper-prev').css('display', 'none');
		sliderWrapper.addClass('wrap');
	  } else {
		sliderWrapper.find('.swiper-next, .swiper-prev').css('display', 'block');
		sliderWrapper.removeClass('wrap');
	  }
  
	  // Сохраняем экземпляр слайдера в data-атрибуте
	  slider.data('swiper', swiperInstance);
	});
  }


$(document).on('mouseup', function (e){
    var div = $(".login-page .content form .field .countries .select");
    if (!div.is(e.target) 
         && div.has(e.target).length === 0 
         && !$(e.target).is('.login-page .content form .field .countries .link'))
    {
        div.hide();
    }
});

jQuery(function($){
	$(document).mouseup( function(e){
		var div = $( ".new-header nav form" );
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
			div.fadeOut();
		}
	});
});

$(function () {
	var tabContainers = $('div.tabs > div');
	tabContainers.hide().filter(':first').show();		
	$('div.tabs ul.tabNavigation a').click(function () {
		tabContainers.hide();
		tabContainers.filter(this.hash).show();
		$('div.tabs ul.tabNavigation a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	}).filter(':first').click();
});

$(function () {
	var tabContainers = $('div.tabs2 > div');
	tabContainers.hide().filter(':first').show();		
	$('div.tabs2 ul.tabNavigation2 a').click(function () {
		tabContainers.hide();
		tabContainers.filter(this.hash).show();
		$('div.tabs2 ul.tabNavigation2 a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	}).filter(':first').click();
});

$(document).on('mouseup', function (e){
    var div = $(".index-slider-nav .select ul");
    if (!div.is(e.target) 
         && div.has(e.target).length === 0 
         && !$(e.target).is('.index-slider-nav .select .link'))
    {
        div.hide();
        $('.index-slider-nav .select .link').removeClass('active');
    }
});

$(document).ready();
  

  $(document).ready(function () {
    $('#list-select li').on('click', function () {
		$('#list-select li a').removeClass('active');
		$(this).find('a').addClass('active');
    });
});

$(document).ready(function () {
	const menu = $('.tv-page-menu');

	function closeTabMenu() {
		menu.addClass('hidden');
		menu.css({ pointerEvents: "none", opacity: '0', transform: 'translateX(300%)' })
		// .fadeOut()
		$('.wrap-container-list').removeClass('wideList');
		$("#nav-select").removeClass('small');
		$('.tv-page .wrap-container-list').removeClass('wideList');
		setTimeout(()=>{
			$("#list-select li p, #list-select li span").fadeIn('fast');
		},150)
	}

	initializeSliders();
	
	$(
		function () {
			$(".toggle-button").click(function () {		
				const switchSlider = $(".switch-slider");
				switchSlider.toggleClass("active");
				closeTabMenu();
				$(".toggle-switcher").fadeOut();
			  if (switchSlider.hasClass("active")) {
				$(".list").addClass("wide-list");
			  } else {
				$(".list").removeClass("wide-list");
			  }
			});
		  }
	)

		$('.tv-page .item').on('click', function (e) {
			if(!$('.list').hasClass('wide-list') && window.matchMedia("(min-width: 1200px)").matches){
				$("#list-select li p, #list-select li span").fadeOut('fast', function () {
					$("#nav-select").addClass('small');
					$('.tv-page .wrap-container-list').addClass('wideList');
					menu
					// .fadeIn()
					.css({ pointerEvents: "auto", opacity: '1', transform: 'translateX(0)' });
					setTimeout(() => {
						menu.removeClass('hidden');
						$('.toggle-switcher').fadeIn().css("display", "flex");
					}, 350);
				});
			}
			else{
				$(location).attr('href', '/tv2.html');
			}
		});

	$('.toggle-switcher').on('click', function () {
			closeTabMenu();
			$(this).fadeOut();
	});


	

	$('.date-slider').slick({
		slidesToShow: 8,
		focusOnSelect: true,
		centerMode: true,
		initialSlide: 5,
		slidesToScroll: 1,
		asNavFor: '.content-slider',
		infinite: true,
		prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.125 6.06061L8.18561 10L12.125 13.9394" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.875 6.06061L11.8144 10L7.875 13.9394" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		responsive: [
			{
			  breakpoint: 1600,
			  settings: {
				slidesToShow: 4
			  }
			}
		  ]
	});


	$('.content-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: ".date-slider",
		fade: true,
		arrows: false
	})


	let toggle = false; 

	$('.user-link').click(() => {
		if (!toggle) {
			$('.profile-block')
				.stop(true, true)
				.css({ pointerEvents: "auto" }) 
				.animate(
					{
						opacity: 1,
						top: "70px"
					},
					400
				);
		} else {
			$('.profile-block')
				.stop(true, true)
				.animate(
					{
						opacity: 0,
						top: "50px"
					},
					400,
					function () {
						$(this).css({ pointerEvents: "none" }); 
					}
				);
		}
		toggle = !toggle;
	});

});






$(function(){
	


	$('.index-catalog-block .top-button').click(function () {
		const container = $(this).closest('.index-catalog-block');
		const slider = container.find('.list')[0]; // DOM-элемент
		const wrapperSlide = container.find('.slider-wrapp');
		let swiperInstance = container.data('swiper');
		$(this).toggleClass('active');
	
		if (slider.classList.contains('grid-view')) {
			// Включаем слайдер
			slider.classList.remove('grid-view');
			wrapperSlide.removeClass('wrap');
			$('.slider-wrapp .slick-next, .slider-wrapp .slick-prev').css('display', 'block')
			swiperInstance = new Swiper(wrapperSlide[0], swiperIndexCatalogConfig);
			container.data('swiper', swiperInstance)
		} else {
			// Отключаем слайдер
			if (swiperInstance) {
				swiperInstance.destroy(true, true);
			  }
			$('.slider-wrapp .slick-next, .slider-wrapp .slick-prev').css('display', 'none')
			indexCatalogBlockSlider = null;
			slider.classList.add('grid-view');
			wrapperSlide.addClass('wrap');
		}
	});
	$('.index-slider-nav .select .link').click(function() {
		$('.index-slider-nav .select .link').toggleClass('active');
		$('.index-slider-nav .select ul').toggle();
	});
	$('.video-popup .navigation .nav2 .item ul li a').click(function() {
		$(this).parent().parent().find('li').find('a').removeClass('active');
		$(this).addClass('active');
	});
	$('.fixed-video-block .close').click(function() {
		$('.fixed-video-block').fadeOut();
	});

	function closeMobMeny(){
		$('.new-header .menu-button').removeClass('active');
		$('.menubg').fadeOut();
		$('.mobile-menu').removeClass('opened');
	}

	$('.menubg').click(function() {
		closeMobMeny();
	});
	$('#closeMobile').click(function() {
		closeMobMeny();
	})
	$('.new-header .menu-button').click(function() {
		$('.new-header .menu-button').addClass('active');
		$('.menubg').fadeIn();
		$('.mobile-menu').addClass('opened');
	});
	$('.mobile-menu ul li a').click(function() {
		$(this).next('ul').slideToggle();
	});
	$('.new-header nav .search-link').click(function() {
		$('.new-header nav form').fadeIn();
	});
	$('.login-form-popup .window .close').click(function() {
		$('.login-form-popup').fadeOut();
	});
	$('.login-page .content form .field .countries .link').click(function() {
		$('.login-page .content form .field .countries .select').toggle();
	});
	$('body').on('click', '.password-control', function(){
		if ($('#password-input').attr('type') == 'password'){
			$(this).addClass('view');
			$('#password-input').attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$('#password-input').attr('type', 'password');
		}
		return false;
	});
	$(window).scroll(function() {
		if($(this).scrollTop() > 1) {
			$('.new-header').addClass('bg');
		} else {
			$('.new-header').removeClass('bg');
		}
	});
	$('.index-page-slider').slick({
		dots: true,
		autoplay: true,
		arrows: false,
		swipe: false,
		autoplaySpeed: 5000,
		adaptiveHeight: true
	}).closest('.index-page-slider').css('opacity', '1')

	
	
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	
	$('.slider-nav').slick({
	  slidesToShow: 14,
	  slidesToScroll: 1,
	  centerMode: true,
	  asNavFor: '.slider-for',
	  focusOnSelect: true,
	  responsive: [
	      {
	        breakpoint: 1430,
	        settings: {
	          slidesToShow: 13
	        }
	      },
	      {
	        breakpoint: 1200,
	        settings: {
	          slidesToShow: 12
	        }
	      },
	      {
	        breakpoint: 992,
	        settings: {
	          slidesToShow: 9
	        }
	      },
	      {
	        breakpoint: 768,
	        settings: {
	          slidesToShow: 6
	        }
	      },
	      {
	        breakpoint: 576,
	        settings: {
	          slidesToShow: 4,
			  slidesToScroll: 4,
	          arrows: false
	        }
	      },
	      {
	        breakpoint: 425,
	        settings: {
	          slidesToShow: 3,
			  slidesToScroll: 3,
	          arrows: false
	        }
	      }
	    ]
	}).closest('.slider-nav').css('opacity', '1');
});



