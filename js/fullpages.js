$('#fullpage').fullpage({
		// loopBottom:true,
		verticalCentered:false,
		navigation:true,
		navigationPosition:'right',
		navigationTooltips:['loading...','技术研发','产品','记者团'],
		afterLoad:function(link,index){
			switch(index){
				case 1:
				$.fn.fullpage.setAllowScrolling(false,'down');
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
					$('#train').animate({left:'150px'},2000,function(){
						$.fn.fullpage.moveSectionDown();
					});//火车动画	
					$("#more").fadeOut();		       
				break;
				case 2:
				$.fn.fullpage.setAllowScrolling(true,'down');
				clearTimeout(t);clearTimeout(m);clearTimeout(p);clearTimeout(q);
                $('#train').css("left","450px");
				$("#more_tip").animate({top:'50px',opacity:'1'},500,function(){
					setTimeout(function(){
						$("#more_tip").addClass('more_tip');
						$("#more_tip").animate({opacity:'0'},500);
					},700)
				});
				$("#more").fadeIn();
				$.fn.fullpage.setAllowScrolling(false,'up');
				break;
				case 3:
				$(".gai").addClass("gais");
				setTimeout(function(){
				$("#sheji").animate({top:'-64px',opacity:'1'},500,function(){
					$("#p_1").animate({opacity:'1',top:'-60px'},1000,function(){
						$("#p_2").animate({opacity:'1',top:'-45px'},100);
						$('#hair').hide();
					});
				});
				},500);
				$("#s_dialog_box").animate({opacity:'0',top:'5'},1);
				$("#xingzheng").animate({top:'30%',left:'12%'},100);
				$("#boy_4").animate({top:'-145px',left:'110px'},100);
				$("#qq").animate({bottom:'18%',right:'34%'},100);
				break;
				case 4:
				$("#s_dialog_box").animate({opacity:'1',top:'-5'},100,function(){
					$("#xingzheng").animate({top:'28%',left:'10%'},100);
					$("#boy_4").animate({top:'-160px',left:'130px'},100);
					$("#qq").animate({bottom:'16%',right:'32%'},100);
				});
				break;
				default:
				break;			}
		},
		onLeave:function(link,index){
			switch(link){
				case 1:
				// $.fn.fullpage.setAllowScrolling(true,'down');
				// clearTimeout(t);clearTimeout(m);clearTimeout(p);clearTimeout(q);
    //             $('#train').css("left","450px");
				break;
				case 2:
				$.fn.fullpage.setAllowScrolling(true,'up');
				$("#more").fadeOut();
				$("#more_tip").animate({top:'-60px',opacity:'0'},1);
				$("#more_tip").removeClass("more_tip");
				break;
				case 3:
				$(".gai").removeClass("gais");
                $("#sheji").animate({top:'0px',opacity:'0'},1);
                $("#s_dialog_box").animate({opacity:'0',top:'5'},1);
                $("#p_1").animate({opacity:'0',top:'-30px'},1);
				$("#p_2").animate({opacity:'0',top:'-15px'},1);
				$('#hair').show();
				break;
				case 4:
				// $("#s_dialog_box").animate({opacity:'0',top:'5'},1);
				// $("#xingzheng").animate({top:'30%',left:'12%'},100);
				// $("#boy_4").animate({top:'-145px',left:'110px'},100);
				// $("#qq").animate({bottom:'18%',right:'34%'},100);
				break;
				default:
				break;			}
		},
	});