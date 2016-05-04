jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
			offset = 0.8;
			clicked = 0;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	// $(window).on('scroll', function(){
	// 	(!window.requestAnimationFrame)
	// 		? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
	// 		: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	// });

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks) {
		($(blocks[clicked]).find('.cd-timeline-img').hasClass('is-hidden') ) && $(blocks[clicked]).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		// blocks.each(function(){
		// 	var block = this;
		// 	setTimeout(function(){ ( $(block).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(block).find('.cd-timeline-img').hasClass('is-hidden') ) && $(block).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in') }, wait);
		// 	wait +=200;
		// });
	}
	$('.cd-timeline-content').click(function(){
		var content = this;
		var ptag = $(this).find('p');
		if(!ptag.is(":visible")){
			var newHeight = $(this).height()+ptag.height()+$(this).parent().height() +$(this).find('.cd-date').height() ;
			// var newHeight =  $(this).height()+ptag.height()+$(this).parent().height() ;
			$(this).animate({height: newHeight+'px'},function(){
				ptag.fadeIn('slow',function(){setTimeout(showBlocks(timelineBlocks),400)});
			});
			clicked++;
		}
	}
)
	window.requestAnimationFrame(function(){ showBlocks(timelineBlocks); });

});
