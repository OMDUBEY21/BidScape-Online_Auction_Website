/* Custom General jQuery
/*--------------------------------------------------------------------------------------------------------------------------------------*/
;(function($, window, document, undefined) {
	//Genaral Global variables
	var $win = $(window),
		$doc = $(document),
		$winW = function(){ return $(window).width() },
		$winH = function(){ return $(window).height() },
		$mainmenu = $('#mainmenu'),
		$screensize = function(element){  
			$(element).width($winW()).height($winH());
		};
		
		var screencheck = function(mediasize){
			if (typeof window.matchMedia !== "undefined"){
				var screensize = window.matchMedia("(max-width:"+ mediasize+"px)");
				if( screensize.matches ) {
					return true;
				}else {
					return false;
				}
			} else { // for IE9 and lower browser
				if( $winW() <=  mediasize ) {
					return true;
				}else {
					return false;
				}
			}
		};

	$doc.ready(function() {
/*--------------------------------------------------------------------------------------------------------------------------------------*/		
		// Remove No-js Class
		$("html").removeClass('no-js').addClass('js');
		
		// First and last Hacks
		$("#mainmenu li:first").addClass('first');
		
		// Get Screen size
		$win.load(function(){
			$win.on('resize', function(){
				$screensize('your selector');	
			}).resize();	
		});
		
		//Menu ICon Append prepend for responsive
		$(window).on('resize', function(){
			if (screencheck(767)) {
				if(!$('#menu').length){
					$('#mainmenu .wrap').prepend('<a href="#" id="menu" class="menulines-button"><span class="menulines"></span> <em>Menu</em></a>');
				}
				
				if(!$('#login-trigger').length){
					$('.user-login').prepend('<a href="#" id="login-trigger" class="menulines-button"><span class="menulines"></span> <em>Login</em></a>');
				}
				if(!$('#account-trigger').length){
					$('.account-bar').prepend('<a href="#" id="account-trigger" class="menulines-button"><span class="menulines"></span> <em>My Account</em></a>');
				}
			} else {
				$("#menu").remove();
				$("#login-trigger").remove();
			}
		}).resize();
		
		
			$(document).on('click tap',"#login-trigger",function () {
				if (screencheck(767)) {
					$(this).next('form').slideToggle(300);
					$(this).toggleClass('menuopen');
				}
				return false;
			});
			
			$(document).on('click tap',"#menu",function () {
				if(screencheck(767))
				{
					if( $("#mainmenu ul").is(':visible') ){
						$("#mainmenu ul").slideUp("normal");
					}
					if($(this).next("ul:first").is(':hidden')){
						$(this).addClass('menuopen');
						$(this).nextAll("ul:hidden").slideDown('normal');
						
					}else{
						$(this).removeClass('menuopen')
						$(this).nextAll("ul:visible").slideUp('normal');
					}
					return false;
				}
				if($('.account-bar ul').is(':visible')){
				$('#account-trigger').removeClass('menuopen');
				$('.account-bar ul').slideUp(300, function(){
					$this.next('#mainmenu ul').slideDown('normal');
				});
			} 
			});
			
	
		$(".account-bar > ul > li.my-account").hover( function(){
			if($winW() > 1024 ){
				$(this).addClass('hovered');	
				$(this).find('ul:first').not(':animated').slideDown(300);
			}
		}, function(){
			if($winW() > 1024 ){
				$(this).removeClass('hovered');	
				$(this).find('ul:first').fadeOut('fast');
			}
		});
		
		$(".account-bar > ul > li.my-account").click( function(){
		   if(screencheck(1024)) {
				$(this).toggleClass('hovered'); 
				$(this).find('ul:first').slideToggle(); 
		   }
		 });
		

		// This adds placeholder support to browsers that wouldn't otherwise support it. 
		if(!Modernizr.input.placeholder){
			var active = document.activeElement;
			$(':text').focus(function () {
				if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
					$(this).val('').removeClass('hasPlaceholder');
				}
			}).blur(function () {
				if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
					$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
				}
			});
			$(':text').blur();
			$(active).focus();
			$('form:eq(0)').submit(function () {
				$(':text.hasPlaceholder').val('');
			});
		}
		
		
		
		/* Tab Content box 
		---------------------------------------------------------------------*/
		var tabBlockElement = $('.tab-data');
			$(tabBlockElement).each(function(index, element) {
				var $this = $(this),
					tabTrigger = $this.find(".tabnav li"),
					tabContent = $this.find(".tabcontent");
					var textval = new Array();
					tabTrigger.each(function() {
						textval.push( $(this).text() );
					});	
				$this.find(tabTrigger).first().addClass("active");
				$this.find(tabContent).first().show();

				
				$(tabTrigger).on('click',function () {
					$(tabTrigger).removeClass("active");
					$(this).addClass("active");
					$(tabContent).hide().removeClass('visible');
					var activeTab = $(this).find("a").attr("data-rel");
					$this.find('#' + activeTab).fadeIn('normal').addClass('visible');
								
					return false;
				});
			
				var responsivetabActive =  function(){
				if (screencheck(479)){
					if( !$('.tabMobiletrigger').length ){
						$(tabContent).each(function(index, element) {
							$(this).before("<h2 class='tabMobiletrigger'>"+textval[index]+"</h2>");	
							$this.find('.tabMobiletrigger:first').addClass("rotate");
						});
						$('.tabMobiletrigger').click('click', function(){
							var tabAcoordianData = $(this).next('.tabcontent');
							if($(tabAcoordianData).is(':visible') ){
								$(this).removeClass('rotate');
								$(tabAcoordianData).slideUp('normal');
								//return false;
							} else {
								$this.find('.tabMobiletrigger').removeClass('rotate');
								$(tabContent).slideUp('normal');
								$(this).addClass('rotate');
								$(tabAcoordianData).not(':animated').slideToggle('normal');
							}
							return false;
						})
					}
						
				}
				if ( $winW() > 479 ){
					$('.tabMobiletrigger').remove();
					$this.find(tabTrigger).removeClass("active").first().addClass('active');
					$this.find(tabContent).hide().first().show();		
				}
			}
			$(window).on('resize', function(){
				if(!$this.hasClass('only-tab')){
					responsivetabActive();
				}
			}).resize();
		});	
		
		/* Accordion box JS
		---------------------------------------------------------------------*/
		$('.accordion-databox').each(function(index, element) {
			var $accordion = $(this),
				$accordionTrigger = $accordion.find('.accordion-trigger'),
				$accordionDatabox = $accordion.find('.accordion-data');
				
				$accordionTrigger.first().addClass('open');
				$accordionDatabox.first().show();
				
				$accordionTrigger.on('click',function (e) {
					var $this = $(this);
					var $accordionData = $this.next('.accordion-data');
					if( $accordionData.is($accordionDatabox) &&  $accordionData.is(':visible') ){
						$this.removeClass('open');
						$accordionData.slideUp(400);
						e.preventDefault();
					} else {
						$accordionTrigger.removeClass('open');
						$this.addClass('open');
						$accordionDatabox.slideUp(400);
						$accordionData.slideDown(400);
					}
				})
		});	
		
		// Custom Radio and Checkbox
		if($('input[type="checkbox"], input[type="radio"]').length){
			$('input[type="checkbox"], input[type="radio"]:not(.star-rate)').ezMark();
		}
		
		/*Lightbox
	-------------------------------------------------------------------------*/
	
		if($('.venoboxvid').length){
			 $('.venoboxvid').venobox({
				bgcolor: '#000'			});
		}
		
		
	
	//$('.product-img-box .bid-credit').appendTo('.zoomWrapper');
	
	/*Responsive Equal Height
	-------------------------------------------------------------------------*/
	if($('.instruction-box .col h5').length){
		$('.instruction-box .col h5').matchHeight();
	}
	if($('.instruction-box .col').length){
		$('.instruction-box .col').matchHeight();
	}
	if($('.auction-block h4').length){
		$('.auction-block h4').matchHeight();
	}
	if($('.auction-section .col').length){
		$('.auction-section .col').matchHeight();
	}
	
	$(window).on('resize', function(){
		if (screencheck(767)) {
			$('.service-box h4').insertBefore('.product');
			$('.account-bar').insertBefore('#mainmenu');
		}
		else {
			$('.service-box h4').insertAfter('.product');
			$('.account-bar').insertAfter('#logo');
		}
		
		if (screencheck(567)) {
			$('.product-img-box .bid-credit').insertAfter('#gal1');
		}
		else {
			$('.product-img-box .bid-credit').insertBefore('.slick-list');
		}
		
	}).resize();
	
		$(document).on('click tap', '#account-trigger', function () {
			$this = $(this);
			if($('#mainmenu ul').is(':visible')){
				$('#menu').removeClass('menuopen');
				$('#mainmenu ul').slideUp(300, function(){
					$this.addClass('menuopen');
					$this.next('ul').slideDown('normal');
				});
			} else {
				$(this).toggleClass('menuopen');
				$(this).next('ul').slideToggle('normal');
				$('ul.user-box').slideUp('normal');
			}
		return false;	
		});
		
		/*Mobile menu click
		---------------------------------------------------------------------*/
		$(document).on('click',"#menu", function(){
			$this = $(this);
			if($('.account-bar ul').is(':visible')){
				$('#account-trigger').removeClass('menuopen');
				$('.account-bar ul').slideUp(300, function(){
					$this.next('#mainmenu ul').slideDown('normal');
				});
			} else {
			}
			return false;
		});
		
		/*Preview image zoom 
		---------------------------------------------------------------------*/
		if($("#zoom-01").length){
			if ($(window).width() >= 600){
			$("#zoom-01").elevateZoom({
				zoomType: screencheck(1024) ? "inner" : "window",
				gallery:'gal1', 
				cursor: 'pointer', 
				galleryActiveClass: 'active', 
				imageCrossfade: true, 
			});
			
			
			$("#zoom-01").bind("click", function(e) {
				 var ez = $('#zoom-01').data('elevateZoom');	
				 $.fancybox(ez.getGalleryList()); 
				 return false; 
			});
			
			$('#gal1').slick({
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  infinite: false
			});
		}
		}
		
		$('.bidding-history ul li:odd').addClass('odd');

/*--------------------------------------------------------------------------------------------------------------------------------------*/		
	});	
/*--------------------------------------------------------------------------------------------------------------------------------------*/
})(jQuery, window, document);