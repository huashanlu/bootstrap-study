$(function(){
	$("[data-toggle='tooltip']").tooltip();
	//鼠标悬停下划线动态出现
	$('#navbar-collapse-1 ul li').hover(function(){
		// $('.anispan',this).css('height','2px');
		$('.anispan',this).animate({
			left:'0',
			width:'100%',
			right:'100%'
		},300);
	},function(){
		$('.anispan',this).stop().animate({
			left:'0',
			width:'0'
		},300);
	});
	//定时轮播
	$('.carousel').carousel({
  		interval: 3000
	});
});
