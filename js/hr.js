var t,m,p,q,time;
$(document).ready(function(){
	                var dialog_box_2=document.getElementById("dialog_box_2").getElementsByTagName("img");
	                var programmer_2=document.getElementById("page2").getElementsByClassName("programmer");
					var dialog_box_3=document.getElementById("dialog_box_3").getElementsByTagName("img");
	                var programmer_3=document.getElementById("page3").getElementsByClassName("programmer");
	                var dialog_box_4=document.getElementById("dialog_box_4").getElementsByTagName("img");
	                var programmer_4=document.getElementById("page4").getElementsByClassName("programmer");
					var num=0;
					function type(s,obj){	  
					    time=setInterval(function(){
					    obj.append(s.charAt(num));
					    if(num === s.length){
					    clearInterval(time);
					    num = 0;
					    }
					    num++;
					  },50);
					};
					function talk_2(){
						$('#fp-nav ').hide();
						$(".cover").show();
						$('#dialog_box_2').show();
						$.fn.fullpage.setAllowScrolling(false);
						for (var i = 0; i<programmer_2.length; i++) {
							programmer_2[i].setAttribute("index", i);
						}
						for(var j=0;j<dialog_box_2.length;j++){
							dialog_box_2[j].style.display="none";
						}
						for(var j=0;j<dialog_box_2.length;j++){
							if(parseInt(this.getAttribute("index"))==j){
								dialog_box_2[j].style.display="block";
								var img=$('#dialog_box_2').children();
								$("#dialog_box_2").empty().append(img);
								switch(j){
									case 0:
	                                	type('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',$('#dialog_box_2'));
									break;
									case 1:
									    type('产品部隶属于日新网最酷的技术中心，主要负责日新互联网产品的运营、市场推广，我们也致力交大的官网建设，不断便利交大师生的学习与生活。同时负责技术中心的行政事务，对接日常的活动和对外交流。如果你有热情，有想法，有责任，日新技术产品部欢迎你。',$('#dialog_box_2'));
									break;
									case 2:
									    type('你喜欢前端吗？前端的世界一直在变化着，在各种熟悉的语言进化中迅速的化学反应。也许你和我们一样，对前端的理解也在不断刷新。我们犹如一群站在互联网风口上的攻城狮，眼前的空间充满了未知，需要我们去开拓去开垦，需要我们逆风而上，不为别的，只为能在这虚拟与现实交错的世界里昂首飞翔！    日新数据开发部门主要是做后台数据开发及日新网服务器维护，当前端的页面做好之后，我们所需要做的就是将后台数据内容渲染到页面中，使页面有了动态的内容。在这里你可以学习到php或者是python的知识，也能学习如何操作服务器。既能学到课堂学不到的知识，又能充实自己的课余生活。',$('#dialog_box_2'));
									break;
									case 3:
									    type('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',$('#dialog_box_2'));
									break;
									default:
									break;
								}
							}
						}
					}
					function talk_3(){
						$(".cover").show();
						$('#dialog_box_3').show();
						$.fn.fullpage.setAllowScrolling(false);
						for (var i = 0; i<programmer_3.length; i++) {
							programmer_3[i].setAttribute("index", i);
						}
						for(var j=0;j<dialog_box_3.length;j++){
							dialog_box_3[j].style.display="none";
						}
						for(var j=0;j<dialog_box_3.length;j++){
							if(parseInt(this.getAttribute("index"))==j){
								dialog_box_3[j].style.display="block";
								var img=$('#dialog_box_3').children();
								$("#dialog_box_3").empty().append(img);
								switch(j){
									case 0:
	                                	type('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',$('#dialog_box_3'));
									break;
									case 1:
									    type('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',$('#dialog_box_3'));
									break;
									case 2:
									    type('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',$('#dialog_box_3'));
									break;
									case 3:
									    
									    type('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',$('#dialog_box_3'));
									    
									break;
									case 4:
									    type('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',$('#dialog_box_3'));
									break;
									default:
									break;
								}
							}
						}
					}
						function talk_4(){
						$(".cover").show();
						$('#dialog_box_4').show();
						$.fn.fullpage.setAllowScrolling(false);
						for (var i = 0; i<programmer_4.length; i++) {
							programmer_4[i].setAttribute("index", i);
						}
						for(var j=0;j<dialog_box_4.length;j++){
							dialog_box_4[j].style.display="none";
						}
						for(var j=0;j<dialog_box_4.length;j++){
							if(parseInt(this.getAttribute("index"))==j){
								dialog_box_4[j].style.display="block";
								var img=$('#dialog_box_4').children();
								$("#dialog_box_4").empty().append(img);
								switch(j){
									case 0:
	                                	type('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',$('#dialog_box_4'));
									break;
									case 1:
									    type('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',$('#dialog_box_4'));
									break;
									case 2:
									    type('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',$('#dialog_box_4'));
									break;
									case 3:
									    type('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',$('#dialog_box_4'));
									break;
									case 4:
									    type('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',$('#dialog_box_4'));
									break;
									default:
									break;
								}
						}
					}
				}
					for(var i = 0; i<programmer_2.length; i++){
						programmer_2[i].addEventListener('click',talk_2);
					}
					for(var i = 0; i<programmer_3.length; i++){
						programmer_3[i].addEventListener('click',talk_3);
					}
					for(var i = 0; i<programmer_4.length; i++){
						programmer_4[i].addEventListener('click',talk_4);
					}
				$(".menu").click(function(){
					$(".cover").show();
					$(".forms").show();
					$('#fp-nav ').hide();
					$.fn.fullpage.setAllowScrolling(false);
				})//报名表打开
				$(".close").click(function(){
					$(".cover").hide();
					$(".forms").hide();
					$('#fp-nav ').show();
					$.fn.fullpage.setAllowScrolling(true);
				})//关闭报名表
				$(".cover").click(function(){
					$(".cover").hide();
					$(".forms").hide();
					$('#fp-nav ').show();
					$('.dialog_box').hide();
					clearInterval(time);
					num=0;
					$.fn.fullpage.setAllowScrolling(true);
				})//点击遮罩层关闭对话框
	var firstli=document.getElementById("fp-nav").getElementsByTagName("ul");
    firstli[0].firstChild.style.display='none';//消除首个导航
    function  addoption(center,title){
    	center.change(function(){
    		title.empty();
    	if(center.val()=="新闻出版中心"){
    		title.append("<option value='编辑部'>编辑部</option><option value='记者团'>记者团</option>");
    	}else if (center.val()=="技术研发中心") {
            title.append("<option value='网建部'>网建部</option><option value='移动开发部'>移动开发部</option><option value='产品部'>产品部</option><option value='设计部'>设计部</option>");
    	}else if (center.val()=="行政管理中心") {
            title.append("<option value='办公室'>办公室</option><option value='外联部'>外联部</option>");
    	}else if (center.val()=="产品运营中心") {
            title.append("<option value='日新微博'>日新微博</option><option value='日新影视工作室'>日新影视工作室</option><option value='视觉摄影产品'>视觉摄影产品</option><option value='日新青梅竹马'>日新青梅竹马</option><option value='《交大青年》杂志社'>《交大青年》杂志社</option>");
        }
    	});
    }
    addEventListener('load',addoption($("#join_center1"),$("#join_title1")));
    addEventListener('load',addoption($("#join_center2"),$("#join_title2")));
    addEventListener('load',addoption($("#join_center3"),$("#join_title3")));



	var submit = $(".buttons");
	submit.bind("click",function(){
	    // //event.preventDault 兼容ie&&ff
	    // var stopDefault = function(e) { 
	    //     if (e && e.preventDefault) {//如果是FF下执行这个
	    //         e.preventDefault(e); 
	    //     }else{ 
	    //         window.event.returnValue = false;//如果是IE下执行这个
	    //     }
	    //     return false;
	    // }
	    // stopDefault(e);
	    var that = $(this),
	    parent = that.parent().parent().parent(),
	    sex_input = parent.find("input[name='user_sex']"),
	    name_input = parent.find("input[name='user_name']"),
	    phone_input = parent.find("input[name='user_phone']"),
	    QQ_input = parent.find("input[name='user_QQ']"),
	    college_input = parent.find("select[name='user_college']"),
	    grade_input = parent.find("input[name='user_grade']"),
	    major_input = parent.find("input[name='user_major']");
	    join_center = parent.find("select[name='join_center']"),
	    join_title= parent.find("select[name='join_title']"),
	    $.ajax({
	        url: '',
	        type: 'POST',
	        dataType: 'json',
	        data: { 
	        	    user_sex:sex_input.val(),
	                user_name:name_input.val(),
	                user_phone:phone_input.val(),
	                user_QQ:QQ_input.val(),
	                user_college:college_input.val(),
	                grade_input:grade_input.val(),
	                user_major:major_input.val(),
	                join_center:join_center.val(),
	                join_title:join_title.val(),
	            },
	    });
	 });   
});