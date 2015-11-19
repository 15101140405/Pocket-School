$(function(){

	var bill_data = new Array();    //定义储存页面数据的数组
	var t = new Date();
	var userid;

	$.get("#.php",{userid},function(data){
		//通过userid，从后端调取页面数据
		for( i = 0 ; i < data.length ; i++ ){    //为bill_data数组赋值；
			bill_data[i] = {
				"customer"     :  data[i].customer,
				"product_name" :  data[i].product_name,
				"shopping_year":  data[i].shopping_year,
				"shopping_month" :  data[i].shopping_month,
				"shopping_day" :  data[i].shopping_day,
				"shopping_hour"  :  data[i].shopping_hour,
				"shopping_minute":  data[i].shopping_minute,
				"rebate_type"  :  data[i].rebate_type,
				"rebate"       :  data[i].rebate,
			}
		//show_data()  //把取到的数据，在页面显示出来
		}
	})

	example_data();
	function example_data(){
		bill_data[0] = {	
			"customer"     :  "红桃",
			"product_name" :  "Q",
			"shopping_year":  "2015",
			"shopping_month" :  "6",
			"shopping_day" :  "23",
			"shopping_hour"  :  "15",
			"shopping_minute":  "30",
			"rebate_type"  :  "推广返利",
			"rebate"       :  "18.00",
		} 

		bill_data[1] = {	
			"customer"     :  "黑桃",
			"product_name" :  "Q",
			"shopping_year":  "2015",
			"shopping_month" :  "3",
			"shopping_day" :  "23",
			"shopping_hour"  :  "15",
			"shopping_minute":  "30",
			"rebate_type"  :  "分销返利",
			"rebate"       :  "18.00",
		} 
		
		bill_data[2] = {	
			"customer"     :  "草花",
			"product_name" :  "K",
			"shopping_year":  "2015",
			"shopping_month" :  "3",
			"shopping_day" :  "10",
			"shopping_hour"  :  "15",
			"shopping_minute":  "30",
			"rebate_type"  :  "推广返利",
			"rebate"       :  "18.00",
		} 

		bill_data[3] = {	
			"customer"     :  "方片",
			"product_name" :  "Q",
			"shopping_year":  "2014",
			"shopping_month" :  "6",
			"shopping_day" :  "23",
			"shopping_hour"  :  "15",
			"shopping_minute":  "30",
			"rebate_type"  :  "推广返利",
			"rebate"       :  "18.00",
		} 
		show_data();
	}

	function show_data(){
	//把取到的数据，在页面显示出来
		var i=0;
		var year = parseInt(t.getFullYear());
		
		while( i < bill_data.length ){

			var html="";
			html = '<ul class="select_ulist">';
			html +=		'<li class="select_ulist_item">';
			html +=			'<div class="bill_item_container">';
			html +=				'<div class="buyer_goods">' + bill_data[i].customer + '-' + bill_data[i].product_name + '</div>';
			html +=				'<div class="shopping_time">' + bill_data[i].shopping_year + '-' + bill_data[i].shopping_month + '-' + bill_data[i].shopping_day + '  ' + bill_data[i].shopping_hour + ':' + bill_data[i].shopping_minute + '</div>';
			html +=			'</div>'
	 		html +=			'<div class="type_money">' + bill_data[i].rebate_type + '－' + '¥' + bill_data[i].rebate + '</div>';
			html +=			'<div class="clear"></div>';
			html +=		'</li>';
			html +='</ul>';


			switch(parseInt(bill_data[i].shopping_year)){
				case year :
				//如果是当年的记录
					alert(1);
					switch (parseInt(bill_data[i].shopping_month)){   //匹配对应的月份
						case 12 :
							$("#twelve").after(html).html("12月");
							break;
						case 11 :
							$("#eleven").after(html).html("11月");
							break;
						case 10 :
							$("#ten").after(html).html("10月");
							break;
						case 9  :
							$("#nine").after(html).html("9月");
							break;
						case 8  :
							$("#eight").after(html).html("8月");
							break;
						case 7  :
							$("#seven").after(html).html("7月");
							break;
						case 6  :
							alert(2);
							$("#six").after(html).html("6月");
							break;
						case 5  :
							$("#five").after(html).html("5月");
							break;
						case 4  :
							$("#four").after(html).html("4月");
							break;
						case 3  :
							$("#three").after(html).html("3月");
							break;
						case 2  :
							$("#two").after(html).html("2月");
							break;
						case 1  :
							$("#one").after(html).html("1月");
							break;
					}
					break;
				default:   
				//如果是往年的记录；
					$("#more").after(html).html("更早的记录");
					break;
			}
			i++;
		}

	}


})