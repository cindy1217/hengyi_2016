$(document).ready(function(){
	// tabPublic
	function tabPublic(tabContAll,tabCont,self){
		var tabIndex = $(self).index();
		$(self).addClass('active').siblings('li').removeClass('active');
		$(tabContAll).eq(tabIndex).show().siblings(tabCont).hide();
	}
	// 新闻资讯
	$('.new-tab ul li').hover(function(){
		tabPublic('.news .new-box','.new-box',this);
	});

	// 科研成果
	$('.result-tab ul li').hover(function(){
		tabPublic('.result-cont .result-box','.result-box',this);
	});

	// 案例
	$('.case-tab ul li').hover(function(){
		tabPublic('.case-list ul','ul',this);
	});

	// 医院环境
	$('.item-tab ul li').hover(function(){
		tabPublic('.item-box','.item-box',this);
	});

});