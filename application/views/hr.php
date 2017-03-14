<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>
	<title>日新招新啦</title>
	<link rel="stylesheet" href="https://cdn.bootcss.com/fullPage.js/2.8.2/jquery.fullPage.min.css"/>
	<link rel="stylesheet" href="css/css reset.css"/>
	<link rel="stylesheet" href="css/shake.css"/>
	<link rel="stylesheet" href="css/style.css"/>
</head>
<body>

<div id="fullpage">
<!---section1-->
	<section class="section" id="page1">
		<div id="bg_1">
		    <img src="images/jinru/bg1.png" id="bg1">
			<div id="flower">
				<img src="images/jinru/flower-1.png" id="flower-1">
				<img src="images/jinru/flower-2.png" id="flower-2">
			</div>
			<div id="train">
			    <img src="images/jinru/smoke1.png" id="smoke_1">
			    <img src="images/jinru/smoke2.png" id="smoke_2">
				<img src="images/jinru/train.png" id="train_1">
			</div>
		</div>
		<img src="images/jinru/girl.png" id="girl_1">
		<img src="images/jinru/Loading.png" id="Loading" class="shake">
	</section>
<!---section2-->
	<section class="section" id="page2">
	    <div id="more_tip">
	    	<h2>点击人物，获取跟多信息</h2>
	    </div>
	    <div class="cover">
	    </div>
<!-- 报名表 -->
        <div class="forms">
            <div class="close">
            	<img src="images/jishu/return.png">
            </div>
        	<form method="post" accept-charset="UTF-8" action="">
        		<p style="margin-top: 40px">
        			<label id="female">
        				<img src="images/jishu/girl.png">
        				<input type="radio" name="user_sex" value="female" checked>
        			</label>
        			<label id="male">
        				<img src="images/jishu/boy.png">
        				<input type="radio" name="user_sex" value="male">
        			</label>
        		</p>
        		<p style="margin-top: 10px">
        			<label class="text_input">
        			    <span>姓名</span><input type="text" name="user_name" >
        			</label>
        		</p>
        		<p class="tips"></p>
        		<p>
        			<label class="text_input">
        			    <span>电话号码</span><input type="text" name="user_phone" onkeyup="value=value.replace(/[^\d]/g,'') " />
        			</label>
        		</p>
                <p>
                    <label class="text_input">
                        <span>QQ</span><input type="text" name="user_QQ" onkeyup="value=value.replace(/[^\d]/g,'') " />
                    </label>
                </p>
        		<p>
        			<label class="text_input">
                        <span>学院</span>
        			    <select name="user_college">
                                    <option value="0"></option>
                                    <option value="土木建筑学院">土木建筑学院</option>
                                    <option value="电气与自动化工程学院">电气与自动化工程学院</option>
                                    <option value="机电与车辆工程学院">机电与车辆工程学院</option>
                                    <option value="经济管理学院">经济管理学院</option>
                                    <option value="外国语学院">外国语学院</option>
                                    <option value="信息工程学院">信息工程学院</option>
                                    <option value="交通运输与物流学院">交通运输与物流学院</option>
                                    <option value="理学院">理学院</option>
                                    <option value="人文学院">人文学院</option>
                                    <option value="国际学院">国际学院</option>
                                    <option value="软件学院">软件学院</option>
                                    <option value="体育学院">体育学院</option>
                                    <option value="艺术学院">艺术学院</option>
                                    <option value="材料科学与工程学院">材料科学与工程学院</option>
                                </select>
        			</label>
        		</p>
        		<p>
        			<label class="text_input">
        			    <span>年级</span><input type="text" name="user_grade" >
        			</label>
        		</p>
        		<p>
        			<label class="text_input">
        			    <span>专业</span><input type="text" name="user_major" >
        			</label>
        		</p>
                <h2>报名方向</h2>
                <p style="margin-top: 0;">
                    <label class="text_input">
                        <span>中心</span>
                        <select name="join_center" id="join_center1">
                                    <option value=""></option>
                                    <option value="新闻出版中心">新闻出版中心</option>
                                    <option value="技术研发中心">技术研发中心</option>
                                    <option value="行政管理中心">行政管理中心</option>
                                    <option value="产品运营中心">产品运营中心</option>
                                </select>
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>部门</span>
                        <select name="join_title" id="join_title1">
                        </select>
                    </label>
                </p>
        		<p><input type="button" name="提交" value="提&nbsp;&nbsp;交" class="buttons"></p>
        	</form>
        </div>
		<div class="dialog_box" id="dialog_box_2">
			<div class="pic">
				<img src="images/jishu/yidong_pic.png">
				<img src="images/jishu/houduan_pic.png">
				<img src="images/jishu/qianduan_pic.png">
				<img src="images/jishu/sheji_pic.png">
			</div>
		</div>
		<img src="images/jishu/menu.png" class="menu shake">
		<img src="images/jishu/yidong.png" id="mobiler" class="programmer">
		<div id="programmers">
			<img src="images/jishu/houduan.png" id="hou" class="programmer">
			<img src="images/jishu/qianduan.png" id="qian" class="programmer">
			<img src="images/jishu/sheji.png" id="cat" class="programmer">
			<img src="images/jishu/more.png" id="more" class="shake">
		</div>
	</section>
<!---section3-->
	<section class="section" id="page3">
	    <div class="cover">
	    </div>
	    <!-- 报名表 -->
        <div class="forms">
            <div class="close">
                <img src="images/jishu/return.png">
            </div>
            <form method="post" accept-charset="UTF-8" action="">
                <p style="margin-top: 40px">
                    <label id="female">
                        <img src="images/jishu/girl.png">
                        <input type="radio" name="user_sex" value="female" checked>
                    </label>
                    <label id="male">
                        <img src="images/jishu/boy.png">
                        <input type="radio" name="user_sex" value="male">
                    </label>
                </p>
                <p style="margin-top: 10px">
                    <label class="text_input">
                        <span>姓名</span><input type="text" name="user_name" >
                    </label>
                </p>
                <p class="tips"></p>
                <p>
                    <label class="text_input">
                        <span>电话号码</span><input type="text" name="user_phone" onkeyup="value=value.replace(/[^\d]/g,'') " />
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>QQ</span><input type="text" name="user_QQ" onkeyup="value=value.replace(/[^\d]/g,'') " />
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>学院</span>
                        <select name="user_college">
                                    <option value="0"></option>
                                    <option value="土木建筑学院">土木建筑学院</option>
                                    <option value="电气与自动化工程学院">电气与自动化工程学院</option>
                                    <option value="机电与车辆工程学院">机电与车辆工程学院</option>
                                    <option value="经济管理学院">经济管理学院</option>
                                    <option value="外国语学院">外国语学院</option>
                                    <option value="信息工程学院">信息工程学院</option>
                                    <option value="交通运输与物流学院">交通运输与物流学院</option>
                                    <option value="理学院">理学院</option>
                                    <option value="人文学院">人文学院</option>
                                    <option value="国际学院">国际学院</option>
                                    <option value="软件学院">软件学院</option>
                                    <option value="体育学院">体育学院</option>
                                    <option value="艺术学院">艺术学院</option>
                                    <option value="材料科学与工程学院">材料科学与工程学院</option>
                                </select>
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>年级</span><input type="text" name="user_grade" >
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>专业</span><input type="text" name="user_major" >
                    </label>
                </p>
                <h2>报名方向</h2>
                <p style="margin-top: 0;">
                    <label class="text_input">
                        <span>中心</span>
                        <select name="join_center" id="join_center2">
                                    <option value=""></option>
                                    <option value="新闻出版中心">新闻出版中心</option>
                                    <option value="技术研发中心">技术研发中心</option>
                                    <option value="行政管理中心">行政管理中心</option>
                                    <option value="产品运营中心">产品运营中心</option>
                                </select>
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>部门</span>
                        <select name="join_title" id="join_title2">
                        </select>
                    </label>
                </p>
                <p><input type="button" name="提交" value="提&nbsp;&nbsp;交" class="buttons"></p>
            </form>
        </div>
		<div class="dialog_box" id="dialog_box_3">
			<div class="pic">
				<img src="images/chanpin/chaoxi_pic.png">
                <img src="images/chanpin/sheji_pic.png">
				<img src="images/chanpin/shijue_pic.png">
                <img src="images/chanpin/yingshi_pic.png">
                <img src="images/chanpin/hujian_pic.png">
			</div>
		</div>
		<img src="images/jishu/menu.png" class="menu shake">
		<img src="images/chanpin/chaoxi.png" id="greener" class="programmer">
		<div id="tunnel">
			<img src="images/chanpin/gai.png" class="gai">
            <div style="overflow: hidden;display: inline-block;width: 113px;height: 98px;">
			    <img src="images/chanpin/hole.png">
			    <img src="images/chanpin/sheji.png" id="sheji" class="programmer">
			</div>
		</div>
		<div id="persons">
		    <div style="display: inline-block;margin-right: 57px;">
			    <img src="images/chanpin/shijue.png" id="ss" class="programmer">
			    <img src="images/chanpin/camera.png" id="camera">
			</div>
			<div style="display: inline-block;">
                <div id="hd">
                    <img src="images/chanpin/yingshi.png" class="programmer">
			        <img src="images/chanpin/hair.png" id="hair">
                    <p id="p_1">老大我手上可能有个活要你。。。</p>
                </div>
                <div id="hj">
			        <img src="images/chanpin/hujian.png" class="programmer">
                    <p id="p_2">滚</p>
                </div>
			</div>
		</div>
	</section>
<!---section4-->
	<section class="section" id="page4">
	    <div class="cover">
	    </div>
	    <!-- 报名表 -->
        <div class="forms">
            <div class="close">
                <img src="images/jishu/return.png">
            </div>
            <form method="post" accept-charset="UTF-8" action="">
                <p style="margin-top: 40px">
                    <label id="female">
                        <img src="images/jishu/girl.png">
                        <input type="radio" name="user_sex" value="female" checked>
                    </label>
                    <label id="male">
                        <img src="images/jishu/boy.png">
                        <input type="radio" name="user_sex" value="male">
                    </label>
                </p>
                <p style="margin-top: 10px">
                    <label class="text_input">
                        <span>姓名</span><input type="text" name="user_name" >
                    </label>
                </p>
                <p class="tips"></p>
                <p>
                    <label class="text_input">
                        <span>电话号码</span><input type="text" name="user_phone" onkeyup="value=value.replace(/[^\d]/g,'') " />
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>QQ</span><input type="text" name="user_QQ" onkeyup="value=value.replace(/[^\d]/g,'') " />
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>学院</span>
                        <select name="user_college">
                                    <option value="0"></option>
                                    <option value="土木建筑学院">土木建筑学院</option>
                                    <option value="电气与自动化工程学院">电气与自动化工程学院</option>
                                    <option value="机电与车辆工程学院">机电与车辆工程学院</option>
                                    <option value="经济管理学院">经济管理学院</option>
                                    <option value="外国语学院">外国语学院</option>
                                    <option value="信息工程学院">信息工程学院</option>
                                    <option value="交通运输与物流学院">交通运输与物流学院</option>
                                    <option value="理学院">理学院</option>
                                    <option value="人文学院">人文学院</option>
                                    <option value="国际学院">国际学院</option>
                                    <option value="软件学院">软件学院</option>
                                    <option value="体育学院">体育学院</option>
                                    <option value="艺术学院">艺术学院</option>
                                    <option value="材料科学与工程学院">材料科学与工程学院</option>
                                </select>
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>年级</span><input type="text" name="user_grade" >
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>专业</span><input type="text" name="user_major" >
                    </label>
                </p>
                <h2>报名方向</h2>
                <p style="margin-top: 0;">
                    <label class="text_input">
                        <span>中心</span>
                        <select name="join_center" id="join_center3">
                                    <option value=""></option>
                                    <option value="新闻出版中心">新闻出版中心</option>
                                    <option value="技术研发中心">技术研发中心</option>
                                    <option value="行政管理中心">行政管理中心</option>
                                    <option value="产品运营中心">产品运营中心</option>
                                </select>
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>部门</span>
                        <select name="join_title" id="join_title3">
                        </select>
                    </label>
                </p>
                <p><input type="button" name="提交" value="提&nbsp;&nbsp;交" class="buttons"></p>
            </form>
        </div>
		<div class="dialog_box" id="dialog_box_4">
			<div class="pic">
                <img src="images/jizhetuan/weixin_pic.png">
				<img src="images/jizhetuan/xingzheng_pic.png">
				<img src="images/jizhetuan/jizhetuan_pic.png">
				<img src="images/jizhetuan/bianjizu_pic.png">
                <img src="images/jizhetuan/QQ_pic.png">
			</div>
		</div>
		<img src="images/jishu/menu.png" class="menu shake">
		<div id="xingzheng">
			<img src="images/jizhetuan/weixin.png" class="programmer">
			<img src="images/jizhetuan/xingzheng.png" class="programmer" style="position: relative;top:-10px;left: -15px;">
		</div>
		<div id="lady">
			<div id="s_dialog_box">
				<p>滚去写新闻</p>
			</div>
			<img src="images/jizhetuan/jizhetuan.png" class="programmer">
			<img src="images/jizhetuan/bianjizu.png" id="boy_4" class="programmer">
		</div>
		    <img src="images/jizhetuan/qq.png" id="qq" class="programmer">
	</section>
</div>
<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.3/jquery.fullpage.min.js"></script>
<script type="text/javascript" src="js/fullpages.js"></script>
<script type="text/javascript" src="js/hr.js"></script>
</body>
</html>