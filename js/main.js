	$(document).ready(function () {

		$('.overlay').hide();

		var $page01_panel;
		var $slideSpeed = 500;
		$('.container01').hover(function () {
			$('.overlay').toggle($slideSpeed );
			$('.container01 img').toggleClass('opace_0_5');
			if ($page01_panel) {
				$('.page01_content_center_text').slideUp();
				$('.owner').slideUp();

			}
		})

		$('.page01_content_center a').on('click', function (e) {
			e.preventDefault();
			$('.page01_content_center_text').slideToggle($slideSpeed , function () {
				setTimeout(function () {

					$('.owner').slideDown($slideSpeed );
				}, 2500)
			});
			$page01_panel = true;

		})
		// ##################################################################################################
		// Section02-		Rooms
		// ##################################################################################################
		$('img[src*="room"').on('click', function(){
			$(this).hide();
			$(this).next().show();
		})
		$('img[src*="room"').on('mouseenter', function(){
			$(this).hide();
			$(this).next().show();
		})

		$('.room_detail').on('mouseleave', function(){
			var $elem = $(this);
			var $pre = $(this).prev();
			console.log('leave');
			setTimeout(function(){
			console.log('set');
				$elem.hide();
				$pre.show();}, 1000);
			
		})
		$('.room_offer').on('click', function(e){
			e.preventDefault();
			$('.room_setup').toggle();
		})
		// ##################################################################################################
		// Section03-      2*4 Card Grid
		// ##################################################################################################
		var $actualBox;
		$('.grid_box').on('click', function(){
			$(this).children('.details_back').toggle().addClass('visible_grid_box');
			$(this).children('.details_front').toggle();
			$actualBox = $(this);
		})
		$('.grid_box').on('mouseleave', function(){
			if($(this).find($('.visible_grid_box'))){

			$(this).find($('.visible_grid_box')).hide();
			$(this).find($('.details_front')).show();
			}
		})
		$('.grid_box a').on('click', function(e){
			e.preventDefault();
		})

		

	});