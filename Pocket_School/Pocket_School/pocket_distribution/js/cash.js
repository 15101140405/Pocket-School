$(function(){

	$.session.set('account', 'shoupihou');
	$.session.set('name', '瘦皮猴的逆袭');

	var branch_cash = 936.13;
	var sessionName = $.session.get('name');
	var sessionAccount = $.session.get('account');
	init();

	function init(){
		
		$(".cash_instruction_content_name").html(sessionName);

		/* 加入后台后，使用此代码
		$.get("#",
			{
				branch_account:sessionAccount
			},
			function(data,status){
				branch_cash = parseFloat(data);//转化为小数
				var html = "当前余额" + data + "元";
				$(".cash_input input").attr("placeholder",html);
			}
		)
*/

		//-----临时给金额付个数,此2行之后删
		var html = "当前余额" + branch_cash + "元";
		$(".cash_input input").attr("placeholder",html);
	}


	//判断输入是否为数字，是否小于账户余额
	$(".cash_input input").on("blur",function(){
		var input_cash =$(this).val(); 
		if(isNaN(input_cash)){//如果不是数字，返回ture
			alert("您输的我读不太懂，要输入阿拉伯数字哦！");
			$(this).val("");
			return false;
		}
		else if(input_cash > branch_cash){
			alert("您的钱袋还没有那么鼓！不要桑心，钱是慢慢挣的！");
			$(this).val("");
			return false;
		}
	});
	//点击提现按钮操作
	$(".cash_bottom_btn").on("click",function(){

		var input_cash =$(".cash_input input").val();

		//传给后台
		$.post("#",
			{
				branch_account:account,
				branch_getCash:input_cash
			},
			function(data,status){
			    if(data == 1){//1、成功
			    	//跳转到下一页面，并告知用户已成功，以及剩余金额0.00元

			    }else if(data == 2){//2、账号重复
			    	alert("保险箱密码没打开，再试一次？");
			    	return false;
			    }
		})
	});

})