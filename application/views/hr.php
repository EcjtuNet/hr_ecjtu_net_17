<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>
    <title>日新招新啦</title>
    <link rel="stylesheet" href="https://cdn.bootcss.com/fullPage.js/2.8.2/jquery.fullPage.min.css"/>
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="stylesheet" href="css/css_reset.css"/>
    <link rel="stylesheet" href="css/shake.css"/>
    <link rel="stylesheet" href="css/jquery.mCustomScrollbar.css"/>
    <link rel="stylesheet" href="css/style.css"/>
    <style>
        @media screen and (max-width: 800px){
            .forms{
                overflow:scroll;
                width:100%;
                height: 100%;
                top:0;
                left: 0;
                margin:0;
            }
        }
        @media screen and (max-width: 420px){
            #persons{
                width:250px;
                margin-left: -125px;
            }
            #cameras{
                margin-right: 0px;
            }
        }
    </style>
</head>
<body>

<div id="fullpage">
<!---section1-->
    <section class="section" id="page1">
        <div class="cover">
            <div id="ori_tip">
                <h2>建议横屏&全屏浏览</h2>
            </div>
        </div>
        <div id="bg_1">
            <img data-src="images/jinru/bg1.png" id="bg1">
            <div id="flower">
                <img data-src="images/jinru/flower-1.png" id="flower-1">
                <img data-src="images/jinru/flower-2.png" id="flower-2">
            </div>
            <div id="train">
                <img data-src="images/jinru/smoke1.png" id="smoke_1">
                <img data-src="images/jinru/smoke2.png" id="smoke_2">
                <img data-src="images/jinru/train.png" id="train_1">
            </div>
        </div>
        <img data-src="images/jinru/girl.png" id="girl_1">
        <img data-src="images/jinru/Loading.png" id="Loading" class="shake">
    </section>
<!---section2-->
    <section class="section" id="page2">
        <div id="more_tip">
            <h2>點擊人物，獲取跟多信息</h2>
        </div>
        <div class="cover">
        </div>
<!-- 报名表 -->
        <div class="forms">
            <div class="close">
                <img data-src="images/jishu/return.png">
            </div>
            <form method="post" accept-charset="UTF-8" action="">
                <p style="margin-top: 40px">
                    <label id="female">
                        <img data-src="images/jishu/girl.png">
                        <input type="radio" name="user_sex" value="女" checked="true">
                    </label>
                    <label id="male">
                        <img data-src="images/jishu/boy.png">
                        <input type="radio" name="user_sex" value="男">
                    </label>
                </p>
                <p style="margin-top: 10px">
                    <label class="text_input">
                        <span>姓名</span><input type="text" name="user_name" class="user_name">
                    </label>
                </p>
                <p class="tips tip1" style="display: none;">請填寫姓名！！！</p>
                <p>
                    <label class="text_input">
                        <span>電話號碼</span><input type="text" name="user_phone" class="user_phone" onkeyup="value=value.replace(/[^\d]/g,'') " />
                    </label>
                </p>
                <p class="tips tip2" style="display:none;">請填寫聯系電話！！！</p>
                <p>
                    <label class="text_input">
                        <span>QQ</span><input type="text" name="user_QQ" onkeyup="value=value.replace(/[^\d]/g,'') " />
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>學院</span>
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
                        <span>年級</span><input type="text" name="user_grade" >
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>專業</span><input type="text" name="user_major" >
                    </label>
                </p>
                <h2>報名方向</h2>
                <p style="margin-top: 0;">
                    <label class="text_input">
                        <span>中心</span>
                        <select name="join_center" id="join_center1" class="join_center">
                                    <option value=""></option>
                                    <option value="新闻出版中心">新闻出版中心</option>
                                    <option value="技术研发中心">技术研发中心</option>
                                    <option value="行政管理中心">行政管理中心</option>
                                    <option value="产品运营中心">产品运营中心</option>
                                </select>
                    </label>
                </p>
                <p class="tips tip3" style="display:none;">請選擇中心！！！</p>
                <p>
                    <label class="text_input">
                        <span>部門</span>
                        <select name="join_title" id="join_title1">
                        </select>
                    </label>
                </p>
                <p style="margin-bottom: 15px"><input type="button" name="提交" value="提&nbsp;&nbsp;交" class="buttons"></p>
            </form>
        </div>
        <div class="dialog_box" id="dialog_box_2">
            <div class="pic"><div id="img1"></div><p>移動端</p></div>
            <div class="pic"><div id="img2"></div><p>産品部</p></div>
            <div class="pic"><div id="img3"></div><p>網建部</p></div>
            <div class="pic"><div id="img4"></div><p>設計部</p></div>
        </div>
        <img data-src="images/jishu/menu.png" class="menu shake">
        <img data-src="images/jishu/yidong.png" id="mobiler" class="programmer">
        <div id="programmers">
            <img data-src="images/jishu/houduan.png" id="hou" class="programmer">
            <img data-src="images/jishu/qianduan.png" id="qian" class="programmer">
            <img data-src="images/jishu/sheji.png" id="cat" class="programmer">
            <img data-src="images/jishu/more.png" id="more" class="shake">
        </div>
    </section>
<!---section3-->
    <section class="section" id="page3">
        <div class="cover">
        </div>
        <!-- 报名表 -->
        <div class="forms">
            <div class="close">
                <img data-src="images/jishu/return.png">
            </div>
            <form method="post" accept-charset="UTF-8" action="">
                <p style="margin-top: 40px">
                    <label id="female">
                        <img data-src="images/jishu/girl.png">
                        <input type="radio" name="user_sex" value="女" checked="true">
                    </label>
                    <label id="male">
                        <img data-src="images/jishu/boy.png">
                        <input type="radio" name="user_sex" value="男">
                    </label>
                </p>
                <p style="margin-top: 10px">
                    <label class="text_input">
                        <span>姓名</span><input type="text" name="user_name" class="user_name">
                    </label>
                </p>
                <p class="tips tip1"  style="display: none;">請填寫姓名！！！</p>
                <p>
                    <label class="text_input">
                        <span>電話號碼</span><input type="text" name="user_phone" class="user_phone"onkeyup="value=value.replace(/[^\d]/g,'') " />
                    </label>
                </p>
                <p class="tips tip2" style="display:none;">請填寫聯系電話！！！</p>
                <p>
                    <label class="text_input">
                        <span>QQ</span><input type="text" name="user_QQ" onkeyup="value=value.replace(/[^\d]/g,'') " />
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>學院</span>
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
                        <span>年級</span><input type="text" name="user_grade" >
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>專業</span><input type="text" name="user_major" >
                    </label>
                </p>
                <h2>報名方向</h2>
                <p style="margin-top: 0;">
                    <label class="text_input">
                        <span>中心</span>
                        <select name="join_center" id="join_center2" class="join_center">
                                    <option value=""></option>
                                    <option value="新闻出版中心">新闻出版中心</option>
                                    <option value="技术研发中心">技术研发中心</option>
                                    <option value="行政管理中心">行政管理中心</option>
                                    <option value="产品运营中心">产品运营中心</option>
                                </select>
                    </label>
                </p>
                <p class="tips tip3" style="display:none;">請選擇中心！！！</p>
                <p>
                    <label class="text_input">
                        <span>部門</span>
                        <select name="join_title" id="join_title2">
                        </select>
                    </label>
                </p>
                <p style="margin-bottom: 15px"><input type="button" name="提交" value="提&nbsp;&nbsp;交" class="buttons"></p>
            </form>
        </div>
        <div class="dialog_box" id="dialog_box_3">
            <div class="pic">
                <div id="img5"></div>
                <p>潮汐獵人</p>
            </div>
            <div class="pic">
                <div id="img6"></div>
                <p>新媒體辦公室</p>
            </div>
            <div class="pic">
                <div id="img7"></div>
                <p>視覺攝影</p>
            </div>
            <div class="pic">
                <div id="img8"></div>
                <p>影視工作室</p>
            </div>
            <div class="pic">
                <div id="img9"></div>
                <p>創意設計部</p>
            </div>
        </div>
        <img data-src="images/jishu/menu.png" class="menu shake">
        <img data-src="images/chanpin/chaoxi.png" id="greener" class="programmer">
        <div id="tunnel">
            <img data-src="images/chanpin/gai.png" class="gai">
            <div style="overflow: hidden;display: inline-block;width: 113px;height: 98px;">
                <img data-src="images/chanpin/hole.png">
                <img data-src="images/chanpin/sheji.png" id="sheji" class="programmer">
            </div>
        </div>
        <div id="persons">
            <div id="cameras">
                <img data-src="images/chanpin/shijue.png" id="ss" class="programmer">
                <img data-src="images/chanpin/camera.png" id="camera">
            </div>
            <div style="display: inline-block;">
                <div id="hd">
                    <img data-src="images/chanpin/yingshi.png" class="programmer">
                    <img data-src="images/chanpin/hair.png" id="hair">
                    <p id="p_1">老大我手上可能有個活要你。。。</p>
                </div>
                <div id="hj">
                    <img data-src="images/chanpin/hujian.png" class="programmer">
                    <p id="p_2">滾</p>
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
                <img data-src="images/jishu/return.png">
            </div>
            <form method="post" accept-charset="UTF-8" action="">
                <p style="margin-top: 40px">
                    <label id="female">
                        <img data-src="images/jishu/girl.png">
                        <input type="radio" name="user_sex" value="女" checked="true">
                    </label>
                    <label id="male">
                        <img data-src="images/jishu/boy.png">
                        <input type="radio" name="user_sex" value="男">
                    </label>
                </p>
                <p style="margin-top: 10px">
                    <label class="text_input">
                        <span>姓名</span><input type="text" name="user_name" class="user_name">
                    </label>
                </p>
                <p class="tips tip1" style="display: none;">請填寫姓名！！！</p>
                <p>
                    <label class="text_input">
                        <span>電話號碼</span><input type="text" name="user_phone" class="user_phone"onkeyup="value=value.replace(/[^\d]/g,'') " />
                    </label>
                </p>
                <p class="tips tip2" style="display:none;">請填寫聯系電話！！！</p>
                <p>
                    <label class="text_input">
                        <span>QQ</span><input type="text" name="user_QQ" onkeyup="value=value.replace(/[^\d]/g,'') " />
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>學院</span>
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
                        <span>年級</span><input type="text" name="user_grade" >
                    </label>
                </p>
                <p>
                    <label class="text_input">
                        <span>專業</span><input type="text" name="user_major" >
                    </label>
                </p>
                <h2>報名方向</h2>
                <p style="margin-top: 0;">
                    <label class="text_input">
                        <span>中心</span>
                        <select name="join_center" id="join_center3" class="join_center">
                                    <option value=""></option>
                                    <option value="新闻出版中心">新闻出版中心</option>
                                    <option value="技术研发中心">技术研发中心</option>
                                    <option value="行政管理中心">行政管理中心</option>
                                    <option value="产品运营中心">产品运营中心</option>
                                </select>
                    </label>
                </p>
                <p class="tips tip3" style="display:none;">請選擇中心！！！</p>
                <p>
                    <label class="text_input">
                        <span>部門</span>
                        <select name="join_title" id="join_title3">
                        </select>
                    </label>
                </p>
                <p style="margin-bottom: 15px"><input type="button" name="提交" value="提&nbsp;&nbsp;交" class="buttons"></p>
            </form>
        </div>
        <div class="dialog_box" id="dialog_box_4">
            <div class="pic">
                <div id="img10"></div>
                <p>微博</p>
            </div>
            <div class="pic">
                <div id="img11"></div>
                <p>行政</p>
            </div>
            <div class="pic">
                <div id="img12"></div>
                <p>記者團</p>
            </div>
            <div class="pic">
                <div  id="img13"></div>
                <p>編輯部</p>
            </div>
            <div class="pic">
                <div  id="img14"></div>
                <p>QQ</p>
            </div>
        </div>
        <img data-src="images/jishu/menu.png" class="menu shake">
        <div id="xingzheng">
            <img data-src="images/jizhetuan/weixin.png" class="programmer">
            <img data-src="images/jizhetuan/xingzheng.png" class="programmer" style="position: relative;top:-10px;left: -15px;">
        </div>
        <div id="lady">
            <div id="s_dialog_box">
                <p>滾去寫新聞</p>
            </div>
            <img data-src="images/jizhetuan/jizhetuan.png" class="programmer">
            <img data-src="images/jizhetuan/bianjizu.png" id="boy_4" class="programmer">
        </div>
            <img data-src="images/jizhetuan/QQ.png" id="qq" class="programmer">
    </section>
</div>
<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.3/jquery.fullpage.min.js"></script>
<script type="text/javascript" src="js/fullpages.js"></script>
<script src="js/jquery-ui-1.10.4.min.js"></script>
<script src="js/jquery.mousewheel-3.0.6.min.js"></script>
<script src="js/jquery.mCustomScrollbar.min.js"></script>
<script type="text/javascript" src="js/hr.js"></script>
<!-- 自定义滚动条 -->
<script type='text/javascript'>
    (function($){
            $(".forms").mCustomScrollbar({
              theme:"rounded-dark",
              scrollInertia:550,
              mouseWheelPixels:300     
            });
    })(jQuery);
</script>
</body>
</html>