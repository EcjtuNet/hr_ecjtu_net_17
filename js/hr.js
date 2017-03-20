var t,m,p,q,time;
$(document).ready(function(){
	                var dialog_box_2=document.getElementById("dialog_box_2").getElementsByTagName("img");
	                var programmer_2=document.getElementById("page2").getElementsByClassName("programmer");
					var dialog_box_3=document.getElementById("dialog_box_3").getElementsByTagName("img");
	                var programmer_3=document.getElementById("page3").getElementsByClassName("programmer");
	                var dialog_box_4=document.getElementById("dialog_box_4").getElementsByTagName("img");
	                var programmer_4=document.getElementById("page4").getElementsByClassName("programmer");
					var that=$('.buttons');
					var parent = that.parent().parent().parent();
					var sex_input = parent.find("input[name='user_sex']");
					var name_input = parent.find("input[name='user_name']");
					var phone_input = parent.find("input[name='user_phone']");
					var QQ_input = parent.find("input[name='user_QQ']");
					var college_input = parent.find("select[name='user_college']");
					var grade_input = parent.find("input[name='user_grade']");
					var major_input = parent.find("input[name='user_major']");
					var join_center = parent.find("select[name='join_center']");
					var join_title= parent.find("select[name='join_title']");
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
	                                	type('移动开发部是日新新星部门，为了适应互联网发展与方便校友，于2014年建立，主修iOS手机App及Android手机App技能，在这里能完成你所有疯狂的想法，手机不再只是你的一个工具，而是成为一个万能的神器，只需要一点创意你就能完成所有你想要的功能。',$('#dialog_box_2'));
									break;
									case 1:
									    type('产品部隶属于日新网最酷的技术中心，主要负责日新互联网产品的运营、市场推广，我们也致力交大的官网建设，不断便利交大师生的学习与生活。同时负责技术中心的行政事务，对接日常的活动和对外交流。如果你有热情，有想法，有责任，日新技术产品部欢迎你。',$('#dialog_box_2'));
									break;
									case 2:
									    type('你喜欢前端吗？前端的世界一直在变化着，在各种熟悉的语言进化中迅速的化学反应。也许你和我们一样，对前端的理解也在不断刷新。我们犹如一群站在互联网风口上的攻城狮，眼前的空间充满了未知，需要我们去开拓去开垦，需要我们逆风而上，不为别的，只为能在这虚拟与现实交错的世界里昂首飞翔！    日新数据开发部门主要是做后台数据开发及日新网服务器维护，当前端的页面做好之后，我们所需要做的就是将后台数据内容渲染到页面中，使页面有了动态的内容。在这里你可以学习到php或者是python的知识，也能学习如何操作服务器。既能学到课堂学不到的知识，又能充实自己的课余生活。',$('#dialog_box_2'));
									break;
									case 3:
									    type('UI&UX设计部是充满未知性的生物的聚集地，他们形态各异，一般决定了手机APP的风格和网站的设计，设计的经理专治技术总监，现任的经理是一只猫。',$('#dialog_box_2'));
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
	                                	type('我貌似走错地方了，你能告诉我昆卡在哪里么？',$('#dialog_box_3'));
									break;
									case 1:
									    type('新媒体办公室：华东交通大学微信公众号是华东交通大学主要对外宣传的新媒体，第一时间发布交大权威信息，展现交大校园生活，传递正能量，服务广大师生校友，该微信平台是江西省首个开通的高校微信公众平台的订阅号，至今为止已拥有30000余粉丝。',$('#dialog_box_3'));
									break;
									case 2:
									    type('欢迎加入视觉摄影产品！',$('#dialog_box_3'));
									break;
									case 3:
									    
									    type('欢迎加入日新青梅竹马！',$('#dialog_box_3'));
									    
									break;
									case 4:
									    type('欢迎加入《交大青年》杂志社！',$('#dialog_box_3'));
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
	                                	type('微博：新浪微博“华东交通大学日新网”本着服务交大师生的宗旨，日新网主页微博以发布学校通知，传递校内外重要资讯为主。做校园里的小清新，学生们的贴心人。',$('#dialog_box_4'));
									break;
									case 1:
									    type('欢迎加入行政部门！',$('#dialog_box_4'));
									break;
									case 2:
									    type('日新网新闻出版中心下设编辑部、记者团（QQ）、新媒体办公室、微博，全面负责校园内外的新闻报道工作。新闻出版中心的全体成员始终坚持以崭新的姿态和进取的精神，用更加及时、全面、深入的报道赢得新的认可和肯定。',$('#dialog_box_4'));
									break;
									case 3:
									    type('编辑部：通常由大二至大三学生组成，负责编辑日常的网站后台编辑，对记者团采写的稿件进行编发，制作web网页专题，负责图片文字的处理，协助其他部门进行工作。',$('#dialog_box_4'));
									break;
									case 4:
									    type('记者团（QQ）：负责采集学校第一手的网页信息，针对学校的各类现象进行深入挖掘报道，永远走在校园的第一现场，与各种校园达人面对面接触。',$('#dialog_box_4'));
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
					$('.tips').hide();
                       sex_input.val(""),
	    	           name_input.val(""),
	    	           phone_input.val(""),
	    	           QQ_input.val(""),
	    	           college_input.val(""),
	    	           grade_input.val(""),
	    	           major_input.val(""),
	    	           join_center.val(""),
	    	           join_title.val(""),
					$.fn.fullpage.setAllowScrolling(true);
				})//关闭报名表
				$(".cover").click(function(){
					$(".cover").hide();
					$(".forms").hide();
					$('#fp-nav ').show();
					$('.dialog_box').hide();
					$('.tips').hide();
		                sex_input.val(""),
	    	           name_input.val(""),
	    	           phone_input.val(""),
	    	           QQ_input.val(""),
	    	           college_input.val(""),
	    	           grade_input.val(""),
	    	           major_input.val(""),
	    	           join_center.val(""),
	    	           join_title.val(""),
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
    var tip1=document.getElementsByClassName("tip1");
    var tip2=document.getElementsByClassName("tip2");
    var tip3=document.getElementsByClassName("tip3");
    var username=document.getElementsByClassName("user_name");
    var userphone=document.getElementsByClassName("user_phone");
    var joincenter=document.getElementsByClassName("join_center");
    function tip(obj,tip){
       obj.onblur=function(){
       	if(obj.value==""){
       		tip.style.display="block";
       	}else{
       		tip.style.display="none";
       	}
       }
    }

    for(var i=0;i<username.length;i++){
    	tip(username[i],tip1[i]);
        tip(userphone[i],tip2[i]);
        tip(joincenter[i],tip3[i]);
    };

    


	var submit = $(".buttons");
	submit.bind("click",function(){
	    //console.log(name_input.val());
	    var that = $(this),
        parent = that.parent().parent().parent(),
		sex_input = parent.find("input[name='user_sex']"),
	    name_input = parent.find("input[name='user_name']"),
		phone_input = parent.find("input[name='user_phone']"),
		QQ_input = parent.find("input[name='user_QQ']"),
		college_input = parent.find("select[name='user_college']"),
		grade_input = parent.find("input[name='user_grade']"),
		major_input = parent.find("input[name='user_major']"),
		join_center = parent.find("select[name='join_center']"),
		join_title= parent.find("select[name='join_title']");
	    if(name_input.val()==""||phone_input.val()==""||join_center.val()==""){
	    	alert("请把信息填写完整");
	    }else{
	    	$.ajax({
	    	    url: 'http://hr.ecjtu.net/index.php/handle',
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
		        success:function(data)
		        {
		        	if(data==1){
		        		alert("提交成功");
		        		$(".forms").hide();
		        		$(".cover").hide();
		        	}
		        },
		        error:function(error)
		        {
		        	console.log(error);
		        },
	     });
	    }
	    
	 });   
});