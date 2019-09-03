
$(function(){
	$('.mod01 .mod-tab li').on('click',function(){
		var tindex = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active')
		$('.m1-box').find('.tab-box').eq(tindex).show().siblings('.tab-box').hide();
	});
	$('.mod03 .mod-tab li').on('click',function(){
		var tindex = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active')
		$('.mod03').find('.tab-box').eq(tindex).show().siblings('.tab-box').hide();
	});
});