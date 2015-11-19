$(function(){
	
	$(".r_btn").on("click",function(){
		console.log("进入保存函数");
		var name = $("#name input").val();
		var account = $("#account input").val();
		var phone = $("#phone input").val();

		if(name == "" || account == "" || phone == ""){
			alert('您的信息没有填全，姓名、账号、电话，缺一不可哦！');
			return false;
		} 
		//判断账号是否为中文
		var accountreg = /^[A-Za-z0-9_-]+$/;
		if(!accountreg.test(account)){
			alert('账号只支持英文&数字哦亲！');
			return false;
		}

		//判断手机号有效性
		var phonereg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		if(!phonereg.test(phone)){
			alert('这个手机号似乎不太对哦！');
			return false;
		}
		console.log("姓名:"+name+";账号:"+account+";电话:"+account);

		//传给后台
		$.post("#",
			{
				branch_name:name,
				branch_account:account,
				branch_phone:phone
			},
			function(data,status){
			    if(data == 1){//1、成功：跳转到下一页面
			    		

			    }else if(data == 2){//2、账号重复
			    	alert("不好意思，这个账号太火了，亲请换一个呗");
			    	return false;
			    }else{
			    	alert("网络不好，肿么办？换个好地方再试一下！");
			    	return false;
			    }
		})
	})
})
