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

$(document).ready(function () {
	$(".toggle-button").click(function () {		
		const switchSlider = $(".switch-slider");
		switchSlider.toggleClass("active");
		
	  if (switchSlider.hasClass("active")) {
		$(".list").addClass("wide-list");
	  } else {
		$(".list").removeClass("wide-list");
	  }
	});
  });
  

  $(document).ready(function () {
    $('#list-select li').on('click', function () {
		$('#list-select li a').removeClass('active');
		$(this).find('a').addClass('active');
    });
});

$(document).ready(function () {
	const menu = $('.tv-page-menu');

	$('.tv-page .item').on('click', function (e) {
            $("#list-select li p, #list-select li span").fadeOut('fast', function () {
				$("#nav-select").addClass('small');
                $('.tv-page .wrap-container-list').addClass('wideList');
				menu.fadeIn();
				setTimeout(() => {
					menu.removeClass('hidden');
					$('.toggle-switcher').fadeIn();
				}, 350);
            });
	});

	$('.toggle-switcher').on('click', function () {
			menu.addClass('hidden');
			menu.fadeOut()
			$('.wrap-container-list').removeClass('wideList');
			$("#nav-select").removeClass('small');
			$('.tv-page .wrap-container-list').removeClass('wideList');
			setTimeout(()=>{
				$("#list-select li p, #list-select li span").fadeIn('fast');
			},150)
			$(this).fadeOut();
	});


	generateDates(); // Генерация дат

	function generateDates() {
		const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
		const today = new Date();
		const currentMonth = today.getMonth(); 
		const currentYear = today.getFullYear(); 
		const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); 
	
		const slider = $('.date-slider');
		slider.empty(); // Очистка содержимого
	
		for (let i = 1; i <= daysInMonth; i++) {
			const date = new Date(currentYear, currentMonth, i); // Создаем дату для каждого дня
			const weekday = daysOfWeek[date.getDay()]; // Ищем день недели
			console.log(date);
			
			// Добавляем элемент в слайдер
			slider.append(
			  `<div class="date" data-date="${i}">${weekday}<br>${i}</div>`
			);
		  }
		  
	// Инициализация Slick-слайдера
	$('.date-slider').slick({
		slidesToShow: 8,
		focusOnSelect: true,
		centerMode: true,
		initialSlide: 5,
		slidesToScroll: 1,
		infinite: true,
		prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.125 6.06061L8.18561 10L12.125 13.9394" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.875 6.06061L11.8144 10L7.875 13.9394" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
	});

	

	
	}

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
			slider.slick({
				slidesToShow: 5,
				adaptiveWidth: true,
				infinite: true,
			});
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
	$('.menubg').click(function() {
		$('.new-header .menu-button').removeClass('active');
		$('.menubg').fadeOut();
		$('.mobile-menu').removeClass('opened');
	});
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
		autoplaySpeed: 5000,
		adaptiveHeight: true
	});
	$('.index-catalog-block .list').slick({
		slidesToShow: 5,
		adaptiveWidth: true,
		infinite: true,
	});
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
	          slidesToShow: 5,
			  slidesToScroll: 5,
	          arrows: false
	        }
	      }
	    ]
	});
});