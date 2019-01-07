$(function(){
	var form = $(".fr-re");
	var userId = $("#userId");
	var userId_tip = $("#userId_tip");
	var pwd = $("#pwd");
	var pwd_tip = $("#pwd_tip");
	var okPwd = $("#okPwd");
	var okPwd_tip = $("#okPwd_tip");
	
	
	form.submit(function(){
		if(userId.val() == ""){
			userId.focus();
			userId_tip.show();
			return false;
		}else if(pwd.val() == ""){
			pwd.focus();
			pwd_tip.show();
			return false;
		}else if(okPwd.val() == ""){
			okPwd.focus();
			okPwd_tip.show();
			return false;
		}else if(pwd.val() !== okPwd.val()){
			okPwd.focus();
			okPwd_tip.html("确认密码与密码不一致");
			okPwd_tip.show();
			return false;
		}else{
			return true;
		}
	})
})

