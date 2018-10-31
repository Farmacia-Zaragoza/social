$(function(){


//================================================================== 
	// random id genarator
	function makeId(){
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for(var i = 0;i < 5; i++){
			text+= possible.charAt(Math.floor(Math.random()* possible.length));
		}
		return text;
	}
	// init randon id genarator
	makeId();

//=======================================================================
/*artical dropdown menu start. "_verticalSlideUp()" function used for 
making scroll vertically up-side, when hover on down arrow... 
it will sliding up-side*/

	function _verticalSlideUp(){
		$('.artical_inner_menu_wrapper ul').each(function(){
			let id = makeId();
			$(this).attr('id',id);
			var div = $(this);
			var _verticalHeight = $('.artical_inner_menu_wrapper ul').height();
			var scrollHeight = div[0].scrollHeight;
			var remainHeight = scrollHeight - _verticalHeight;
			var scrollableHeight = remainHeight - div.scrollTop();
			var position = div.scrollTop();
			var remainingTime = (remainHeight - position) * 100 / 5 ; //speed 5
			div.stop();
			div.animate({
				scrollTop : remainHeight
			},{
				duration : remainingTime,
				easing: "linear",
			});

		});
	}

	$('.upDown').on({
		mouseenter: function(){
			_verticalSlideUp();
		},
		mouseleave: function(){
			let div = $('.artical_inner_menu_wrapper ul');
			div.stop();
		}
	});
//=======================================================================
	function _verticalSlideDown(){
		$('.artical_inner_menu_wrapper ul').each(function(){
			let id = makeId();
			$(this).attr('id',id);
			var div = $(this);
			var _verticalHeight = $('.artical_inner_menu_wrapper ul').height();
			var scrollHeight = div[0].scrollHeight;
			var remainHeight = scrollHeight - _verticalHeight;
			var scrollableHeight = remainHeight - div.scrollTop();
			var position = div.scrollTop();
			var remainingTime = (position * 100) / 5 ; //speed 5
			div.stop();
			div.animate({
				scrollTop : 0
			},{
				duration : remainingTime,
				easing: "linear",
			});

		});
	}

	$('.upArrow').on({
		mouseenter: function(){
			_verticalSlideDown();
		},
		mouseleave: function(){
			let div = $('.artical_inner_menu_wrapper ul');
			div.stop();
		}
	});





//=======================================================================
	function _verticalSlideUp2(){
		$('.artical_inner_menu_wrapper_3').each(function(){
			let id = makeId();
			$(this).attr('id',id);
			var div = $(this);
			var _verticalHeight = $('.artical_inner_menu_wrapper_3').height();
			var scrollHeight = div[0].scrollHeight;
			var remainHeight = scrollHeight - _verticalHeight;
			var scrollableHeight = remainHeight - div.scrollTop();
			var position = div.scrollTop();
			var remainingTime = (remainHeight - position) * 100 / 5 ; //speed 5
			div.stop();
			div.animate({
				scrollTop : remainHeight
			},{
				duration : remainingTime,
				easing: "linear",
			});

		});
	}

	$('.upDown').on({
		mouseenter: function(){
			_verticalSlideUp2();
		},
		mouseleave: function(){
			let div = $('.artical_inner_menu_wrapper_3');
			div.stop();
		}
	});
//=======================================================================
	function _verticalSlideDown2(){
		$('.artical_inner_menu_wrapper_3').each(function(){
			let id = makeId();
			$(this).attr('id',id);
			var div = $(this);
			var _verticalHeight = $('.artical_inner_menu_wrapper_3').height();
			var scrollHeight = div[0].scrollHeight;
			var remainHeight = scrollHeight - _verticalHeight;
			var scrollableHeight = remainHeight - div.scrollTop();
			var position = div.scrollTop();
			var remainingTime = (position * 100) / 5 ; //speed 5
			div.stop();
			div.animate({
				scrollTop : 0
			},{
				duration : remainingTime,
				easing: "linear",
			});

		});
	}

	$('.upArrow').on({
		mouseenter: function(){
			_verticalSlideDown2();
		},
		mouseleave: function(){
			let div = $('.artical_inner_menu_wrapper_3');
			div.stop();
		}
	});





// this function is used for mobile flag combo 
// it will visible only for mobile
//=======================================================================




});