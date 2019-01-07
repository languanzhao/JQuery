$(function(){
	var place = [
		{country:"中国",cities:[
						{cityName:"广州"},
						{cityName:"上海"},
						{cityName:"北京"}
						]},
		{country:"日本",cities:[
						{cityName:"东京"},
						{cityName:"大阪"},
						{cityName:"北海道"}
						]},
		{country:"韩国",cities:[
						{cityName:"首尔"},
						{cityName:"济州岛"},
						{cityName:"釜山"}
						]},
		{country:"美国",cities:[
						{cityName:"纽约"},
						{cityName:"华盛顿"},
						{cityName:"洛杉矶"}
						]}
	]
	
	
	$.each(place,function(i){
		$("<option></option>").html(place[i].country).appendTo($("#provice"));
	})
	
//	.change()当目标元素的值发生改变时,触发的事件
	$("#provice").change(function(){
		$("#city option:gt(0)").remove();
		var val = $(this).val();
		$.each(place, function(i) {
			var country = place[i].country;
			if(val===country){
				var city = place[i].cities;
				$.each(city, function(i) {
					$("<option></option>").html(city[i].cityName).appendTo($("#city"));
				});
			}
		});
	})
	
})
