$(function(){
	var img = $(".banner ul li");
	var btn = $(".banner ol li");
	var btn_next = $(".banner .btn_next");
	var btn_prev = $(".banner .btn_prev");
	var temwrap = $(".banner .temwrap");
	var time;
	var delay = 1000;
	var i = 0;
	
	
	function move(buttons){
//		buttons.attr("class","on").siblings().removeAttr("class");
//		img.eq(i).attr("class","on").siblings().removeAttr("class");
		buttons.attr("class","on").siblings().removeAttr("class");
		img.eq(i).fadeIn().siblings().fadeOut();
	}
	btn.mouseover(function(){
		i = $(this).index();
		move($(this))
	})

	btn_next.click(function(){
		if(i>=2){
			i=0;
		}else{
			i++;
		}
		move(btn.eq(i));
	})
	
	btn_prev.click(function(){
		if(i<=0){
			i=2;
		}else{
			i--;
		}
		move(btn.eq(i));
	})
	
	function init(){
		time = setInterval(function(){
			btn_next.trigger("click");
		},delay)
	}	

	temwrap.hover(function(){
		clearInterval(time);
	},function(){
		init();
	})
	
	init();
})
