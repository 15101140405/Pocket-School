$(function(){
	var branch = new Array();//储存我下家信息的数组，每一个下家包含：名称、自己下家的个数、自己下家的名称


	function getIndex(){
		$.get("#.php",function(data){
			for(i=0;i<data.length;i++){
				branch[i].b_name = data[i].b_name;
				branch[i].b_status = data[i].b_status;
				for(j = 0;j < data[i].b_b.length; j++){
					branch[i].b_b[j].b_name = data[i].b_b[j].b_name;
				}
			}
			init();
		});
	}

	function tempIndex(){
		//临时给数组赋一个值
		branch[0] = {
			"b_name" : "黑桃",
			"b_status" : true,
			"b_b" : ["k","q","j"],
		}
		branch[1] = {
			"b_name" : "方片",
			"b_status" : false,
			"b_b":[]
		}
	}

	init();
	function init(){
		tempIndex();
		$("#b_length").html("共" + branch.length + "个下家");
		for(i = 0 ; i < branch.length ; i++){
			var html = "";
			if(branch[i].b_status){
				html = '<li class="select_ulist_item open" value="'+ i + '">' + branch[i].b_name ;
				html += '<span style="color:#00b90c;font-size: 1rem;margin-left:20px"> 共'+ branch[i].b_b.length + '个下家</span></li>';
				$("#status_ture").append(html);	
			}else{
				html = '<li class="select_ulist_item unfollow" value="'+ i + '">' + branch[i].b_name ;
				html += '<span style="color:#00b90c;font-size: 1rem;margin-left:20px">' + branch[i].b_b.length + '个下家 </span></li>';
				$("#status_false").append(html);	

			}			
		}

		$('.open').on('click',function(){
			var html="";
			if($(this).hasClass('open_opened')){
					//如果已展开
				$(this).removeClass('open_opened');
				$(this).find(".add_list").remove();
			}
			else{
				//如果没有展开
				$(this).addClass('open_opened');	
				var	fatherHtml = "";
				fatherHtml = "<ul class='add_list'></ul>";
				$(this).append(fatherHtml);	

				var html="";
				var i = $(this).attr("value");
				for(j = 0 ; j < branch[i].b_b.length ; j++ ){
					html = "<li class='add_list_item'>" + branch[i].b_b[j] + "</li>";
					$(this).find('.add_list').append(html);
				}

			}
		})
	}

})
