document.writeln("<style type=\"text/css\">");
document.writeln("#footTool img {");
document.writeln("    max-width: 100%;");
document.writeln("    vertical-align: middle;");
document.writeln("}");
document.writeln(".cf:before,.cf:after{display: table;content:\"\"}.cf:after{clear:both}.cf{zoom:1}");
document.writeln(".float_container1 {z-index:9999999991; display: none; position: fixed; width: 100%; left:0; bottom:0; background-image: -moz-linear-gradient(#abe5ef, #deceb7); background-image: -webkit-linear-gradient(#abe5ef, #deceb7); background-image: -o-linear-gradient(#abe5ef, #deceb7); background-image: linear-gradient(#abe5ef, #deceb7); }");
document.writeln(".db { display: block}");
document.writeln(".float_container1 .title_talk { background:#13a4db; background-size: 40px; height:40px; line-height:40px;font-size:20px; color:#fff; text-align: center; letter-spacing: -1px; }");
document.writeln(".float_container1 dl { display: none; transiton:all .3s linear 0s}");
document.writeln(".float_container1 dt { display: inline-block; width: 14%; float: left; margin: 24px 0 0 8px; text-align: center}");
document.writeln(".float_container1 dd {margin:0; display: inline-block; position: relative; width: 68%; float: left; margin-top: 5px; }");
document.writeln(".float_container1 .time { font-size: 12px; line-height: 1.6; color:#6c6761; text-align: center; }");
document.writeln(".float_container1 .box { color:#000;position: relative; margin-left: 5%; padding:10px; border:1px solid #7ebbe4; border-top-color: #b2daf0; border-radius: 12px; box-shadow: 0 3px 0 #3ea0dd, inset 0 1px 1px #fff; background-image: -moz-linear-gradient(#c6e5fa, #a6d7f7); background-image: -webkit-linear-gradient(#c6e5fa, #a6d7f7); background-image: -o-linear-gradient(#c6e5fa, #a6d7f7); background-image: linear-gradient(#c6e5fa, #a6d7f7); letter-spacing: -1px; }");
document.writeln(".float_container1 .box img { width: 22px; vertical-align: bottom}");
document.writeln(".float_container1 .box:before,");
document.writeln(".float_container1 .box:after { position: absolute; content: \"\"}");
document.writeln(".float_container1 .box:before { width: 18px; height: 13px; top:-1px; left:-9px; background:url(/swt/images/wave.png) 0 0 no-repeat; background-size: 18px; }");
document.writeln(".float_container1 .box:after { width: 40px; height: 26px; bottom:-4px; right:-7px; background:url(/swt/images/wave.png) 0 0 no-repeat; background-size: 40px; }");
document.writeln(".float_container1 .btn_cf {z-index:9999999; margin-top: 15px; padding:10px 0; border-top:1px solid #c7c7c0; border-bottom:1px solid #979185; background-color: #eaebed; overflow:hidden;}");
document.writeln(".float_container1 .btn_cf a { display: inline-block; width: 39%; height: 2em; float:left; margin:0 5%;border-radius: 12px; background-color: #F9CA74; box-shadow: 0 2px 2px #d1d1d3; font-size: 16px; color:#2C1703; line-height: 2; text-align: center; text-decoration: none; transition:all .3s linear 0s; }");
document.writeln(".float_container1 .btn_cf a p{ display: inline-block; width: 100%; height: 2em; float:left; margin:0 5%;font-size: 16px; color:#2C1703; line-height: 2; text-align: center; text-decoration: none; }");
document.writeln(".float_container1 .btn_cf a:hover {border-color:#959490;background-color: #f7f7f7}");
document.writeln("");
document.writeln("@media screen and (max-width: 320px) {");
document.writeln("	.float_container1 .title_talk {font-size: 18px; background-size: 32px}");
document.writeln("	.float_container1 dd {width: 73%}");
document.writeln("	.float_container1 .box {");
document.writeln("		font-size: 13px");
document.writeln("	}");
document.writeln("	.float_container1 .btn_cf a {");
document.writeln("		border-radius: 10px;");
document.writeln("		font-size: 15px");
document.writeln("	}");
document.writeln("}");
document.writeln("</style>");
var _fSwtHtm = '<div id="toopl" class="shadow"></div>' +
'<div id="footTool" class="float_container1 cf">' +
'<div id="title_talk" class="title_talk">重庆太医堂在线咨询<a href="tel:02367528686" style="display: block;width: 40px;margin-top: -45px;margin-left: 2%;position: relative;"><img src="images/tel.png" style="max-width:100%"></a><span onclick="toolclose();" style=" cursor: pointer;display: block;width: 27px;margin-top: -41px;margin-left: 90%;position: relative;"><img src="images/gb.png" style="max-width:100%"></span></div>' +
'<dl id="tools211" class="cf">' +
'<dt><img id="doc1" src="images/header_fk.png"></dt>' +
'<dd>' +
'<div id="now1" class="time">11:14:20</div>' +
'<div class="box" style=" font-size:16px">  <a href="javascript:void(0);" onClick="LR_HideInvite();openZoosUrl();return false;"><img src="images/smile.gif" alt="smile">您好，这里是重庆太医堂皮肤病医院预约中心，请问有什么可以帮到您？</a></div>' +
'</dd>' +
'</dl>' +
'<dl id="tools3" class="cf">' +
'<dt><img id="doc2" src="images/header_fk.png"></dt>' +
'<dd>' +
'<div id="now2" class="time">11:14:20</div>' +
'<div class="box" style=" font-size:16px"><a href="tel:02367528686">如果您的网络不稳定，我们建议您通过电话<span style="color:#f00;">023-67528686</span>进行预约咨询</a></div>' +
'</dd>' +
'</dl>' +
'<div class="btn_cf">' +
'<a href="tel:02367528686">拨打电话</a>' +'<a href="/swt/?dibutanchuang" >立即回复</a>' +
'</div>' +
'</div>';
//document.write('<p id="actext">立即回复</p>');
document.write(_fSwtHtm);


/*获取当前时间*/
	var now = new Date();
	var hh = now.getHours(); 
	var mm = now.getMinutes();
	var ss = now.getSeconds();
	var date1 = document.getElementById("now1");
	var date2 = document.getElementById("now2");
	function getDateWeek(obj) {if (obj < 10) return "0" + obj; else return obj;}
	date1.innerHTML = getDateWeek(hh) + ":" + getDateWeek(mm) + ":" + getDateWeek(ss);
	date2.innerHTML = getDateWeek(hh) + ":" + getDateWeek(mm) + ":" + getDateWeek(ss+2);

	var footTool = document.getElementById("footTool");
	var toopl = document.getElementById("toopl");
	var tools211 = document.getElementById("tools211");
	var tools3 = document.getElementById("tools3");
	
	
	setTimeout("myInterval()",30000);//1000为1秒钟 第一块
	
    function myInterval()
    {
        $('#footTool').css('display','block');
		/*$('.float_container1 dl').css('display','block');*/
		
		 $('#tools211').css('display','block');
	 setTimeout("myInterval2()",2000);//1000为1秒钟 第二块
     }
	  function myInterval2()
    {
       
		$('#tools3').css('display','block');
     }
		/*自己写的*/
		function toolclose(){$('.float_container1').css('display','none');
		$('#tools3').css('display','none');
		setTimeout("myInterval()",20000);//1000为1秒钟 第二次
		}


/*文字掀动
*/

var gzi = 0;

function getColor(){
	gzi++;
	switch(gzi){ 
		case 1:
			return "#2c1703";
		case 2:
			return "#2c1703";
		default:
			return "black";
	}
}

function colorful(){
	var o =document.getElementById('actext');
	o.style.color=getColor();
	if(gzi==2){
		o.style.position="relative";
		o.style.top="2px";
		o.style.left="2px";
		gzi=0;
	}else{
		o.style.position="relative";
		o.style.top="0px";
		o.style.left="0px";
	};
	setTimeout('colorful()',2000);

}
colorful();