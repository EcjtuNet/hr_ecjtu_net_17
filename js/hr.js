var t,m,p,q;
$(document).ready(function(){
	                var dialog_box_2=document.getElementById("dialog_box_2").getElementsByTagName("img");
	                var programmer_2=document.getElementById("page2").getElementsByClassName("programmer");
					var dialog_box_3=document.getElementById("dialog_box_3").getElementsByTagName("img");
	                var programmer_3=document.getElementById("page3").getElementsByClassName("programmer");
	                var dialog_box_4=document.getElementById("dialog_box_4").getElementsByTagName("img");
	                var programmer_4=document.getElementById("page4").getElementsByClassName("programmer");
					function talk_2(){
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
	                                	$('#dialog_box_2').typetype('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',{
									    	e: 0,  //error rate. (use e=0 for perfect typing)
									    	//t: 100,  interval between keypresses
									    	callback:function(){
									    		$('.cover').hide();
									    		$('#dialog_box_2').hide();
									    		$.fn.fullpage.setAllowScrolling(true);
									    	}
									    });
									break;
									case 1:
									    $('#dialog_box_2').typetype('1开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',{
									    	e: 0,  //error rate. (use e=0 for perfect typing)
									    	//t: 100,  interval between keypresses
									    	callback:function(){
									    		$('.cover').hide();
									    		$('#dialog_box_2').hide();
									    		$.fn.fullpage.setAllowScrolling(true);
									    	}
									    });
									break;
									case 2:
									    $('#dialog_box_2').typetype('2开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',{
									    	e: 0,  //error rate. (use e=0 for perfect typing)
									    	//t: 100,  interval between keypresses
									    	callback:function(){
									    		$('.cover').hide();
									    		$('#dialog_box_2').hide();
									    		$.fn.fullpage.setAllowScrolling(true);
									    	}
									    });
									break;
									case 3:
									    $('#dialog_box_2').typetype('3开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',{
									    	e: 0,  //error rate. (use e=0 for perfect typing)
									    	//t: 100,  interval between keypresses
									    	callback:function(){
									    		$('.cover').hide();
									    		$('#dialog_box_2').hide();
									    		$.fn.fullpage.setAllowScrolling(true);
									    	}
									    });
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
	                                	$('#dialog_box_3').typetype('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',{
									    	e: 0,  //error rate. (use e=0 for perfect typing)
									    	//t: 100,  interval between keypresses
									    	callback:function(){
									    		$('.cover').hide();
									    		$('#dialog_box_3').hide();
									    		$.fn.fullpage.setAllowScrolling(true);
									    	}
									    });
									break;
									case 1:
									    $('#dialog_box_3').typetype('1开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',{
									    	e: 0,  //error rate. (use e=0 for perfect typing)
									    	//t: 100,  interval between keypresses
									    	callback:function(){
									    		$('.cover').hide();
									    		$('#dialog_box_3').hide();
									    		$.fn.fullpage.setAllowScrolling(true);
									    	}
									    });
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
	                                	$('#dialog_box_4').typetype('0开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',{
									    	e: 0,  //error rate. (use e=0 for perfect typing)
									    	//t: 100,  interval between keypresses
									    	callback:function(){
									    		$('.cover').hide();
									    		$('#dialog_box_4').hide();
									    		$.fn.fullpage.setAllowScrolling(true);
									    	}
									    });
									break;
									case 1:
									    $('#dialog_box_4').typetype('1开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',{
									    	e: 0,  //error rate. (use e=0 for perfect typing)
									    	//t: 100,  interval between keypresses
									    	callback:function(){
									    		$('.cover').hide();
									    		$('#dialog_box_4').hide();
									    		$.fn.fullpage.setAllowScrolling(true);
									    	}
									    });
									break;
									case 2:
									    $('#dialog_box_4').typetype('2开发及全校师生的电脑维护等工作。UED部门全面负责所有面向用户的开发和设计',{
									    	e: 0,  //error rate. (use e=0 for perfect typing)
									    	//t: 100,  interval between keypresses
									    	callback:function(){
									    		$('.cover').hide();
									    		$('#dialog_box_4').hide();
									    		$.fn.fullpage.setAllowScrolling(true);
									    	}
									    });
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
					$.fn.fullpage.setAllowScrolling(false);
				})//报名表打开
				$(".close").click(function(){
					$(".cover").hide();
					$(".forms").hide();
					$.fn.fullpage.setAllowScrolling(true);
				})//关闭报名表
	$('#fullpage').fullpage({
		loopBottom:true,
		verticalCentered:false,
		afterLoad:function(link,index){
			switch(index){
				case 1:
				function flowermove1(){
					$('#flower-1').hide();
					$('#flower-2').show();
					t=setTimeout(flowermove2,800)
				}
				function flowermove2(){
					$('#flower-1').show();
					$('#flower-2').hide();
					m=setTimeout(flowermove1,800);
				}
				flowermove1();//草动画
				function smoke1(){
					$('#smoke_1').animate({opacity:'0'},500);
					$('#smoke_2').animate({opacity:'1'},500);
					p=setTimeout(smoke2,400)
				}
				function smoke2(){
					$('#smoke_1').animate({opacity:'1'},500);
					$('#smoke_2').animate({opacity:'0'},500);
					q=setTimeout(smoke1,400)
				}
				smoke1();//烟动画
					$('#train').animate({left:'150px'},2000);//火车动画			       
				break;
				case 2:
				$("#more").fadeIn();
				break;
				case 3:
				$(".gai").addClass("gais");
				setTimeout(function(){
					$("#sheji").animate({top:'-64px',opacity:'1'},500);
				},500)	;			
				break;
				case 4:
				$("#s_dialog_box").animate({opacity:'1',top:'-5'},500);
				break;
				default:
				break;			}
		},
		onLeave:function(link,index){
			switch(index){
				case 1:
				clearTimeout(t);clearTimeout(m);clearTimeout(p);clearTimeout(q);
                $('#train').css("left","450px");
				break;
				case 2:
				$("#more").fadeOut();
				break;
				case 3:
				$(".gai").removeClass("gais");
                $("#sheji").animate({top:'0px',opacity:'0'},1);
				break;
				case 4:
				$("#s_dialog_box").animate({opacity:'0',top:'5'},1);
				break;
				default:
				break;			}
		},
	});
	var submit = $(".buttons");
	submit.bind("click",function(){
	    //event.preventDault 兼容ie&&ff
	    var stopDefault = function(e) { 
	        if (e && e.preventDefault) {//如果是FF下执行这个
	            e.preventDefault(e); 
	        }else{ 
	            window.event.returnValue = false;//如果是IE下执行这个
	        }
	        return false;
	    }
	    stopDefault(e);
	    var that = $(this),
	    parent = that.parent().parent().parent(),
	    sex_input = parent.find("input[name='user_sex']"),
	    name_input = parent.find("input[name='user_name']"),
	    phone_input = parent.find("input[name='user_phone']"),
	    college_input = parent.find("select[name='user_college']"),
	    grade_input = parent.find("select[name='user_grade']"),
	    major_input = parent.find("input[name='user_major']");
	    $.ajax({
	        url: '',
	        type: 'POST',
	        dataType: 'json',
	        data: { 
	        	    user_sex:sex_input.val(),
	                user_name:name_input.val(),
	                user_phone:phone_input.val(),
	                user_college:college_input.val(),
	                grade_input:grade_input.val(),
	                user_major:major_input.val(),
	            },
	    });
	 });   
});