const indexCatalogBlockSlider = {
	slidesToShow: 5,
	infinite: true,
	responsive: [
		{
		breakpoint: 1430,
		settings: {
			slidesToShow: 5
		}
		},
		{
			breakpoint: 1200,
			settings: {
			slidesToShow: 4
			}
		},
		{
		breakpoint: 992,
		settings: {
			centerMode: true,
			slidesToShow: 3
		}
		},
		{
		breakpoint: 768,
		settings: {
			centerMode: true,
			slidesToShow: 2
		}
		},
		{
		breakpoint: 576,
		settings: {
			centerMode: true,
			slidesToShow: 1
		}
		}
	]
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
			  breakpoint: 1430,
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
	$('.index-catalog-block .top-button').click(function() {
		var container = $(this).closest(".index-catalog-block"); // Найти родительский контейнер
    	var slider = container.find(".list"); // Найти слайдер внутри контейнера
    	var wrapperSlide = container.find('.slider-wrapp'); // Найти слайдер внутри контейнера		
		$(this).toggleClass('active');
		if (slider.hasClass("slick-initialized")) {
			// Отключаем слайдер и показываем все слайды
			slider.slick('unslick'); // выключаем slick
			slider.addClass('grid-view'); // добавляем класс для сетки
			wrapperSlide.addClass('wrap'); // добавляем класс для сетки
		  } else {
			slider.removeClass('grid-view');
			wrapperSlide.removeClass('wrap')
			slider.slick(indexCatalogBlockSlider);
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
	});
	$('.index-catalog-block .list').slick(indexCatalogBlockSlider);
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
	});
});
