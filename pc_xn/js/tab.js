$(document).ready(function(){
	// 新闻资讯
	$('.new-tab ul li').hover(function(){
		var newIndex = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		$('.news').find('.new-box').eq(newIndex).show().siblings('.new-box').hide();
	});

	// 诊疗项目
	$('.item-tab li').hover(function(){
		var itemIndex = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		$(this).closest('.item-box').find('.item-cont').eq(itemIndex).show().siblings('.item-cont').hide();
	});

	// 医院环境
	$('.fac-tab ul li').hover(function(){
		var facIndex = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		$('.fac-list ul').eq(facIndex).show().siblings('ul').hide();
	});
});