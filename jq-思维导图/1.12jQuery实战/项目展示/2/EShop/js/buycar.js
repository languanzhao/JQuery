$(function(){
			var sum;
			var price;
			var num;
			var total = 0;
			var check;		
			//全选功能
			$("#checkAll").click(function(){
				if($(this).prop("checked")==true){
					$("input[id^=box_]").each(function(){
						$(this).prop("checked",true);
					})
				}
				Total();
			})
						
			
			//单选取消全选功能
			$("input[id^=box_]").click(function(){
				if($(this).prop("checked")==false){
					$("#checkAll").prop("checked",false)
				}
				Total()
			})
			
			
			//反选功能
			$("#uncheck").click(function(){
				$("input[id^=box_]").each(function(){
					if($(this).prop("checked")==true){
						$(this).prop("checked",false);
					}else{
						$(this).prop("checked",true);
					}
				})
				$("#checkAll").prop("checked",false);
				Total()
			})
			
			
//			小计功能
			$("input[id^=num]").each(function(){
				$(this).blur(function(){

					price = Number($(this).parents("td").prev().find("span[id^='price']").html());
					
					sum = $(this).parents("td").next().find("span[id^='total']");
					
					if($(this).val()>=1){
						num = $(this).val();
						sum.html(num * price)
					}else{
						$(this).val(1);
						num = $(this).val();
						sum.html(num * price)
					}
					check = $(this).parents("tr").find("input[id^=box_]");
					if(check.prop("checked")==true){
						total = 0;
						total+=Number(sum.html());
						$("#total_price").html("¥"+total+"元")
					}
				})
			})
			
//			总计功能
//			$("input[id^=box_]").each(function(){
//				$(this).click(function(){
//					if($(this).prop("checked")==true){
//						sum = Number($(this).parents("tr").find("span[id^=total]").html());
//						total+=sum;
//						$("#total_price").html("¥"+total+"元")
//					}
//				})
//			})
			
			function Total(){
				sum  = 0;
				$("input[id^=box_]").each(function(){
					if($(this).prop("checked")==true){
						sum = Number($(this).parents("tr").find("span[id^='total']").html());
						total+=sum;
						$("#total_price").html("¥"+total+"元")
					}
				})	
			}

			
})
