$(function(){
	var indexdata={
		photo : "",
		m_name : "",
		y_income : "",
		t_income : "",
		balance : ""
	}
//定义需要从后端调取的全部数据的jason

	function getIndex(){//后端接上之后，需在上一行运行一下getIndex()；
		$.get("#.php",function(data){
			indexdata.photo = data[1];
			indexdata.m_name = data[2];
			indexdata.y_income = data[3];
			indexdata.t_income = data[4];
			indexdata.balance = data[5];

			//init();
		});
	}

	function tempIndex(){
		//临时给数组赋一个值
		indexdata.photo = "images/1.jpeg";
		indexdata.m_name = "小斯";
		indexdata.y_income = "1.00";
		indexdata.t_income = "2.00";
		indexdata.balance = "3.00";
	}

	init();
	function init(){
		tempIndex();//后端写完后，把这个函数去掉
		$("img").attr("src",indexdata.photo);
		$(".profile_name").html(indexdata.m_name);
		$("#y_income").html(indexdata.y_income);
		$("#t_income").html(indexdata.t_income);
		$("#balance").html(indexdata.balance);
	}



})
