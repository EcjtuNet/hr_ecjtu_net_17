var t,m,p,q,time;
$(document).ready(function(){
	                var dialog_box_2=document.getElementById("dialog_box_2").getElementsByClassName("pic");
	                var programmer_2=document.getElementById("page2").getElementsByClassName("programmer");
					var dialog_box_3=document.getElementById("dialog_box_3").getElementsByClassName("pic");
	                var programmer_3=document.getElementById("page3").getElementsByClassName("programmer");
	                var dialog_box_4=document.getElementById("dialog_box_4").getElementsByClassName("pic");
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
					function hide_tip(){
						$(".cover").click()
					}
					function oriChange(){
						if(window.orientation!=undefined){
							if(window.orientation==0){
                              $('.cover').show();                              
                              setTimeout(hide_tip,2000);
							}

						}else if(window.innerWidth <window.innerHeight){
                           $('.cover').show();
                           setTimeout(hide_tip,2000);
					}
				}
					$(function(){
						oriChange();
					});
					$(window).bind("orientationchange",oriChange);
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
	                                	type('移動開發部是日新新星部門，為了適應互聯網發展與方便校友，于2014年建立，主修iOS手機App及Android手機App技能，在這裏能完成你所有瘋狂的想法，手機不再只是你的一個工具，而是成為一個萬能的神器，只需要一點創意你就能完成所有你想要的功能。',$('#dialog_box_2'));
									break;
									case 1:
									    type('産品部隸屬于日新網最酷的技術中心，主要負責日新互聯網産品的運營、市場推廣，我們也致力交大的官網建設，不斷便利交大師生的學習與生活。同時負責技術中心的行政事務，對接日常的活動和對外交流。如果你有熱情，有想法，有責任，日新技術産品部歡迎你。',$('#dialog_box_2'));
									break;
									case 2:
									    type('網建部：你喜歡網站建設嗎？在網站的建設中前端的世界一直在變化著，在各種熟悉的語言進化中迅速的化學反應。也許你和我們一樣，對前端的理解也在不斷刷新。我們猶如一群站在互聯網風口上的攻城獅，眼前的空間充滿了未知，需要我們去開拓去開墾，需要我們逆風而上，不為別的，只為能在這虛擬與現實交錯的世界裏昂首飛翔！除此以外，在這裏你可以學習到php和python的知識，還能學習如何操作服務器。不但get學到課堂學不到的知識技能，又能充實自己的課余生活。別猶豫了，快來與我們一起守護校園網站的安全吧！',$('#dialog_box_2'));
									break;
									case 3:
									    type('UI&UX設計部是充滿未知性的生物的聚集地，他們形態各異，一般決定了手機APP的風格和網站的設計，設計的經理專治技術總監，現任的經理是一只貓。',$('#dialog_box_2'));
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
	                                	type('我貌似走錯地方了，你能告訴我昆卡在哪裏麽？',$('#dialog_box_3'));
									break;
									case 1:
									    type('新媒體辦公室：華東交通大學微信公衆號是華東交通大學主要對外宣傳的新媒體，第一時間發布交大權威信息，展現交大校園生活，傳遞正能量，服務廣大師生校友，該微信平台是江西省首個開通的高校微信公衆平台的訂閱號，至今為止已擁有30000余粉絲。',$('#dialog_box_3'));
									break;
									case 2:
									    type('視覺攝影部門：最精美的校園圖集，最優質的宣傳素材，校園的優秀圖集都被我承包了，我們是美圖制造者，來這裏，讓你相機裏的每一幀圖幅都是精美絕倫，讓華東交通大學在你的鏡頭裏永遠閃閃發光。',$('#dialog_box_3'));
									break;
									case 3:
									    
									    type('影視工作室：我們拍感情至深的微電影，也做脍炙人口的小視頻。能溫情能催淚，有歡笑有發人深省。我們的微電影《織夢》曾獲交大微電影大賽“最佳影片”及“最佳女主角”，更入圍了全國大學生微電影大賽。從台前到幕後，從策劃到拍攝到後期制作，親身經曆，讓我們一起感受影視的魅力吧。',$('#dialog_box_3'));
									    
									break;
									case 4:
									    type('創意設計部：你手中的手繪交大地圖，鍾意的花椒明信片，紀念版暗藏校園風景的鑰匙扣，限量版的華東交通大學45周年可樂...我們只設計制作最具校園文化特色的周邊産品，心靈手巧的你趕快加入我們吧。',$('#dialog_box_3'));
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
	                                	type('微博運營團隊：想成為擁有上萬粉絲的“網紅達人”嗎？快來與微博運營團一起玩轉微博，發現校園新鮮事，變身“網紅段子手”。在這裏你不僅是校園熱點的搬運工，更是時事熱點的創造者!',$('#dialog_box_4'));
									break;
									case 1:
									    type('行政管理中心：掌控日新運營中樞，引領日新前進方向，統管日新人事合理配置。在這裏，你就是日新的大腦，由你來續寫日新今後的輝煌',$('#dialog_box_4'));
									break;
									case 2:
									    type('記者團：在這裏，你可以是大牌記者，第一時間與校園熱點“面對面”，接觸不一樣的新鮮活動，撰寫最具逼格的稿件文章。',$('#dialog_box_4'));
									break;
									case 3:
									    type('編輯部：通常由大二至大三學生組成，負責編輯日常的網站後台編輯，對記者團采寫的稿件進行編發，制作web網頁專題，負責圖片文字的處理，協助其他部門進行工作。',$('#dialog_box_4'));
									break;
									case 4:
									    type('QQ運營團隊：想與粉絲親切交談，熱情聊天嗎？你與“QQ網紅”只差一個日小新！在QQ 運營裏，我們是趣事和新聞的傳播者，聊天、鬥圖我們樣樣在行！',$('#dialog_box_4'));
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
		var sex_val;
		sex_input.each(function(){
			if(this.checked){
				sex_val=this.value;
			}
		})
	    if(name_input.val()==""||phone_input.val()==""||join_center.val()==""){
	    	alert("请把信息填写完整");
	    }else{
	    	$.ajax({
	    	    url: 'http://hr.ecjtu.net/index.php/handle',
	    	    type: 'POST',
	    	    dataType: 'json',
	    	    data: { 
	    	    	    user_sex:sex_val,
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
		        		$(".close").click();
		        		$(".cover").click();
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
