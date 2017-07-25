// JavaScript Document
$(function(){

	$(".fright input.ipt-input[type=text]:visible,.fright button.btn").each(function() {
          $(this).attr("disabled",true);
    });
	function disabelipt(){
	}
	//全部余额
	$("#allbalance").click(function(){
		
		var money1=rmoney($("#mony2").html());//剩余金额
		var limied=$("#limited").html()=="--"?0:rmoney($("#limited").html());//限投
		var yue=rmoney($("#yue").html());//账户余额
		var qitou=$("#qitou").html()=="--"?0:rmoney($("#qitou").html());//起投金额
		var moneyipt=0;
		var ques=0;//判断是否提示
		var _money=function(){ques=1;$("#money").addClass("ipt-error").parent().siblings("em").html("起投金额为零");};//限投提示
		if($("#jiliang").html()=="元"){
			moneyipt=Math.min(money1,limied,yue)>=qitou?Math.min(money1,limied,yue):_money;

			$("#money").val(moneyipt,2);
			$("#bay_ipt_money").val(moneyipt,2);
			
		}else{
			
			qitou=qitou/10000;
			moneyipt=Math.min(money1,limied,yue)>=qitou?Math.min(money1,limied,yue):_money;
			$("#money").val(moneyipt,4);
			$("#bay_ipt_money").val(moneyipt,4);
		}
		monyqsy(ques,$("#money"));
	});

	//最大可投
	$("#firstfinan").click(function(){
		
		var money1=rmoney($("#mony2").html());//剩余金额
		var limied=rmoney($("#limited").html());//限投
		var qitou=rmoney($("#qitou").html());//起投金额
		var moneyipt=0;
		var ques=0;//判断是否提示
		if($("#jiliang").html()=="元"){
			
			moneyipt=Math.min(money1,limied)>=qitou?Math.min(money1,limied):0;
			$("#money").val(moneyipt,2);
			$("#bay_ipt_money").val(moneyipt,2);
		}else{
			qitou=qitou/10000;
			moneyipt=Math.min(money1,limied)>=qitou?Math.min(money1,limied):0;
			$("#money").val(moneyipt,4);
			$("#bay_ipt_money").val(moneyipt,4);
		}
		monyqsy(ques,$("#money"));
	});
	
	//点击圆形小背景时
	$(".yuan1,#bay-yuan").click(function(){
		var moneymon=parseFloat($("#mony2").attr("data-money"));
		var moneymons=$("#mony2").attr("data-money");
		var mn;
		var mm;
		var moneyji=0;
		var moneyyuan="";
		var myl;
		if($(this).html()=="元"){
			
			//本期剩余金额
			moneyji=moneymon/10000;
			$("#mony2").html();
			$(".yuan1").html("万");
			//飘窗万元
			$("#bay-yuan").html("万");
			$("#jiliang").html("万");
			$("#mony2").html(moneyji);
			//限投
			$("#limited").html(rmoney($("#limited").html())/10000).next("span").html("万");
			
			//文本框
			if($("#money").val()!="" && $("#money").val()>=0 ){
				$("#money").val(parseFloat($("#money").val())/10000+"");
			}
			
			//文本框
			if($("#bay_ipt_money").val()!="" && $("#bay_ipt_money").val()>=0 ){
				$("#bay_ipt_money").val(parseFloat($("#bay_ipt_money").val())/10000+"");
			}
		}else{
			//本期剩余金额
			$(".yuan1").html("元");
			$("#bay-yuan").html("元");
			$("#jiliang").html("元");
			myl=(moneymon+"").length;
			
			for(var i=1; i<=myl ;i){
				if(myl<=3){
					mm=moneymons+"";
					moneyyuan=mm+","+moneyyuan;
					break;
				}else{
					mm=moneymons.substring(myl-3,myl);
					moneyyuan=mm+","+moneyyuan;
					moneymons=moneymons.substring(0,myl-3);
				}
				myl=myl-3;
			}
			$("#mony2").html(moneyyuan.substring(0,moneyyuan.length-1)+".00");
			
			//限投
			$("#limited").html(fmoney(parseFloat($("#limited").html())*10000,2)).next("span").html("元");
			//文本框
			if($("#money").val()!="" && $("#money").val()>=0){

				$("#money").val(Math.floor(parseFloat($("#money").val())*10000)+"");
			}
			if($("#bay_ipt_money").val()!="" && $("#bay_ipt_money").val()>=0){

				$("#bay_ipt_money").val(Math.floor(parseFloat($("#bay_ipt_money").val())*10000)+"");
			}
		}
	});
	
	function getShowCFQ(toubim){
		
		var massage="<img src='../images/fdetail/dingpai.png' style='vertical-align:middle; margin-right:7px'/>";
		if(toubim<5000){
			massage+="单笔投标实际支付金额满5000元，奖5元财富券";
		}else if(toubim>=5000 && toubim<10000){
			massage+="单笔投标实际支付金额满10000元，奖10元财富券";
			
		}else if(toubim>=10000 && toubim<20000){
			massage+="单笔投标实际支付金额满20000元，奖20元财富券";
			
		}else if(toubim>=20000 && toubim<50000){
			massage+="单笔投标实际支付金额满50000元，奖50元财富券";
			
		}else if(toubim>=50000){
			massage+="单笔投标实际支付金额满100000元，奖100元财富券";
			
		}
		return massage;
	}
	//输入金额时计算预期收益     预期收益={（投标金额*年化利率）/12}*借款期限
	$("#money,#bay_ipt_money").keyup(function(){
		$(this).parent().siblings("em").html(mas).removeClass("hui");
		if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test($(this).val())){
			var _thisval=0;
			if($(".yuan1")=="元"){
				_thisval=$(this).val();
			}else{
				_thisval=parseFloat($(this).val())*10000;
			}
			if(_thisval==""){
				massage="";
				$(this).removeClass("ipt-error").parent().siblings("em").html(massage);
			
			}else{
				massage="请输入正确的理财金额";
				$(this).addClass("ipt-error").parent().siblings("em").html(massage); 
			}
			$("#yqsy").html("0.00元");
			
		}else{
			$("#money").val($(this).val());
			$("#bay_ipt_money").val($(this).val());
			var ques=0;//判断是否提示
			monyqsy(ques,$(this));
			var mas=getShowCFQ($(this).val());
			$(this).removeClass("ipt-error").parent().siblings("em").html(mas).addClass("hui");
		}
		
	}).blur(function(){
		//金额输入验证
		if(!$(this).val()==""){
		
			moneyf($(this));	
		}else{
			massage="";
			$(this).removeClass("ipt-error").parent().siblings("em").html(massage);
		}
	});
	
	//计算预期收益
	function monyqsy(ques,_this){
		
		var moneyT=  parseFloat(_this.val()); //{（投标金额
		
		moneyT=moneyT+""!="NaN"? moneyT:parseFloat(0.00);
		var rate= parseFloat($(".money [data-pay]").attr("data-pay"))/100;//年化利
		var daym= parseFloat($(".money [data-term]").attr("data-term"));//封闭期
		if(ques==0){
			massage="";
			_this.removeClass("ipt-error").parent().siblings("em").html(massage);
		}
		
		if($(".yuan1").html()=="万"){
			moneyT=moneyT*10000;
		}
		
		$("#yqsy").html((Math.floor(((moneyT * rate)/12)*daym*100))/100+"元");
	} 
	
	
	//点击提交订单，去支付时
	$("#pay,#bay_pay").click(function(){
		if($(this).attr("id")=="bay_pay"){
			
			var b1=moneyf($("#bay_ipt_money"));
			
		}else{
			
			var b1=moneyf($("#money"));
		}
		var mas=getShowCFQ($("#money").val());
		$("#money").removeClass("ipt-error").parent().siblings("em").html(mas).addClass("hui");
		
		if( b1==""){
			massage='';
			$("#money").removeClass("ipt-error").parent().siblings("em").html(massage);
			$("#buymoney").html(fmoney($(".yuan1").html()=="万"?parseFloat($("#money").val())*10000:$("#money").val(),2));
			$("#expected").html($("#yqsy").html().substring(0,$("#yqsy").html().length-1));
			$("#cjd").slideDown(500);
			$(".zhezhao5").show();
		}

			
			var mas=getShowCFQ($("#money").val());
			$("#money").removeClass("ipt-error").parent().siblings("em").html(mas).addClass("hui");
		
	});
	
	//点击提交订单，去支付时
	$("#bay_pay").click(function(){
		
		if( b1==""){
			massage='';
			$("#bay_ipt_money").removeClass("ipt-error").parent().siblings("em").html(massage);
			
			$("#buymoney").html(fmoney($(".yuan1").html()=="万"?parseFloat($("#money").val())*10000:$("#bay_ipt_money").val(),2));
			$("#expected").html($("#yqsy").html().substring(0,$("#yqsy").html().length-1));
			$("#cjd").slideDown(500);
			$(".zhezhao1").show();
		}
		
	});
	
	//借款金额输入验证
	function moneyf(mond){
		mond.parent().siblings("em").removeClass("hui");
		if(!/^[0-9]+([ ]{1}[0-9]+){0,1}$/.test(mond.val())){

			massage="请输入正确的理财金额";
			mond.addClass("ipt-error").parent().siblings("em").html(massage);
			return massage;
		}
		var mondmoney=0;
		if($(".yuan1").html()=="万"){
			mondmoney=parseFloat(mond.val())*10000;
		}else{
			mondmoney=parseFloat(mond.val());
		}
		var mondint;
		if(mond.val()=="" || !/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(mond.val())){

			mondint=0;
			massage="请输入正确的理财金额";
			mond.addClass("ipt-error").parent().siblings("em").html(massage);
			return massage;
		}else{
			
			mondint=parseFloat(mond.val());
		}
		
		if(mondmoney<100 || mondmoney % 100!=0){
			massage="请输入大于100 并且是100 倍数的金额！";
			mond.addClass("ipt-error").parent().siblings("em").html(massage);
		}else{
				massage=getShowCFQ(mondmoney);
				mond.removeClass("ipt-error").parent().siblings("em").html(massage).addClass("hui");
				massage="";
			/*
			
			if(parseInt($("#yue").html())<=mondint){
				
				massage="余额不足";
				
				mond.addClass("ipt-error").parent().siblings("em").html(massage);
			}else{
				massage="";
				
				mond.removeClass("ipt-error").parent().siblings("em").html(massage);
			}
			*/
		}
		return massage;
	}
})	
	//调用不同倒计时方法
	$(document).ready(function() {
        
       timer(1,$("#pay"));
    });
	var intDiff = parseInt(1);//倒计时总秒数量
	//年月日倒计时
	function timer(intDiff,DHtml){
		
		interval=window.setInterval(function(){
		var day=0,
			hour=0,
			minute=0,
			second=0;//时间默认值
		if(intDiff > 0){
			day = Math.floor(intDiff / (60 * 60 * 24));
			hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
			minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
			second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
		}
		if(intDiff < 0){
			
			$("input.ipt-input[type=text]:visible,button.btn").each(function() {
				  $(this).attr("disabled",false);
			});
			DHtml.html('提交订单，去支付');

			clearTimeout(interval); 
			return;
		}
		if (minute <= 9) minute = '0' + minute;
		if (second <= 9) second = '0' + second;
		DHtml.html('剩余时间'+day+"天"+hour+"时"+minute+'分'+second+'秒');

		intDiff--;
		}, 1000);
	} 
$(function(){


function getCookieVal(offset){
	var endstr=document.cookie.indexOf(";",offset);
	if(endstr==-1)
		endstr=document.cookie.length;
	return unescape(document.cookie.substring(offset,endstr));
}
function GetCookie(name){
	var arg=name+"=";
	var alen=arg.length;
	var clen=document.cookie.length; 
	var i=0;
	while(i<clen){
		var j=i+alen;
		if(document.cookie.substring(i,j)==arg)
			return getCookieVal(j);
			i=document.cookie.indexOf(" ",i)+1;
			if(i==0)
				break;
	}
	return null;
}
function SetCookie(name,value){
	var argv=SetCookie.arguments;
	var argc=SetCookie.arguments.length;
	var expires=(2<argc)?argv[2]:null;
	var path=(3<argc)?argv[3]:null;
	var domain=(4<argc)?argv[4]:null;
	var secure=(5<argc)?argv[5]:false;
	document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))+((secure==true)?"; secure":"");
}
function ResetCounts(name){
	visits=0;
	SetCookie("visits",visits,expdate,"/",null,false);
	location.reload();
}


	var expdate=new Date();
	var visits;//以下设置COOKIES时间为1年,自己随便设置该时间..

	expdate.setTime(expdate.getTime()+(24*60*60*1000*365));

	if(!(visits=GetCookie("visits")))

	visits=0;
	visits++;
	SetCookie("visits",visits,expdate,"/",null,false);//以下信息显示可以使用标准的HTML语法,自己随便设置。

	if(visits==1){
		//$("#toopInfo").show();
		//$(".zhezhao").show();
	$(".finimg3,.finimg4,.finimg5,.finimg6,.finimg,.finimg2,.finimg7,.finimg8,.btnbai").css({"z-index":"9999"});
	$(".zhezhao").show();
	}
	
	getCaiState();
	$(".caicion").click(function(){
		
		getCaiState();
	});
	$("#closeCFQ").click(function(){
		getCloseCFQTips();
	});
	//打开财富券提示
	function getCFQTips(){
		
		$("#toopInfo").show();
		$(".zhezhao").show();
	}
	//关闭财富券提示
	function getCloseCFQTips(){
		
		$("#toopInfo").hide();
		$(".zhezhao").hide();
	}
	/*
	
	$(".btnbai").click(function(){
		
		$(".finimg3,.finimg4,.finimg5,.finimg6,.finimg,.finimg2,.finimg7,.finimg8,.btnbai").css({"z-index":"auto","display":"none"});
		$(".zhezhao").hide();
	});
	$(".finimg3,.finimg4,.finimg5,.finimg6,.finimg,.finimg2,.finimg7,.finimg8,.btnbai").css({"z-index":"9999","display":"block"});
	$(".zhezhao").show();
	*/

	//点击我知道了
	function getIKnowOne(){
		
	}
	//隐藏显示财富券
	function getCaiState(){
		var cai=$(".caicion");
		if(cai.hasClass("caitop")){
			cai.removeClass("caitop").addClass("caibottom");
			$(".pailie").slideDown(500);
			cai.find("img").attr("src","../images/fdetail/cfq_03.jpg");

		}else{
			
			cai.removeClass("caibottom").addClass("caitop");
			$(".pailie").slideUp(500);
			cai.find("img").attr("src","../images/fdetail/cfq_04.jpg");
		}
	}
	
	var nnt1=1;
	var nnt2=1;
	$(".finleft").hide();
	$(".finright").hide();
	$(".fin-djq h2").click(function(){
		
		if(nnt1==1){
			nnt1=0;
			
			$(".findinone").slideDown(500);
			$(this).parent().css({"border-bottom-left-radius":"0px","border-bottom-right-radius":"0px"});
			$(this).css("background","url(../images/index_new/icon3.png) right -20px top -358px no-repeat");
			$(this).siblings(".finleft").show();
			$(this).siblings(".finright").show();
			
		}else{
			$(".findinone").slideUp(500);
			$(this).parent().css({"border-bottom-left-radius":"5px","border-bottom-right-radius":"5px"});
			$(this).css("background","url(../images/index_new/icon3.png) right -20px top -328px no-repeat");
			$(this).siblings(".finleft").hide();
			$(this).siblings(".finright").hide();
			nnt1=1;
		}
	});
})