// JavaScript Document
$(function(){
	
	$(".fdheng .fdif .select_new dd ul li a").click(function(){
		$(this).addClass("daction").parent("li").siblings().children("a").removeClass("daction");
		$(this).parents("dd").siblings("dt").removeClass("daction");
	});
	$(".fdheng .fdif .select_new dt").click(function(){
		$(this).addClass("daction").siblings("dd").find("a").removeClass("daction");
	});
	/*出借列表鼠标移动效果
	$(".flcontext2").hover(function(){
		$(this).addClass("flcontext2action").siblings(".flcontext2").removeClass("flcontext2action")
	},function(){
		
		$(this).children("button").addClass("btn-blue");
		$(this).removeClass("flcontext2action");
	});*/
	//出借列表第一个
	//$(".flcontext2action").children("button").addClass("btn-error").removeClass("btn-blue");
	
	$(".flcontext").hover(function(){
		$(this).addClass("flcontexthover").siblings(".flcontext").removeClass("flcontexthover");
	},function () {

		$(this).removeClass("flcontexthover");
		
		$(".flcontext").eq(0).addClass("flcontexthover");
	});
	
	$(".uldiv").hover(function(){
		$(this).children("ul").show();
	},function(){
		
		$(this).children("ul").hide();
	});
	
	$(".uldiv .la li").click(function(){
		$(this).addClass("action").siblings().removeClass("action");
		$(this).parent().hide().siblings().html($(this).children().html());
		
	});
	
	//金额输入验证
	$(document).on('blur',".flright .ipt-input",function(){
	//$(".flright .ipt-input").blur(function(){
		
		moneyf($(this),"0");
	});
	
	function moneyipt(element){
		console.log(element);
		moneyf(moneyipt,"0");
	}
	//yumoney保存余额
	//点击注册保存时
	$(document).on("click",".flbtn",function(){
	
	//$(".flbtn").click(function(){
		var b1=moneyf($(this).parent().siblings("div").children().children("input"),"1");
		var flm=$(this).parent().siblings("div").children().children("input");
		
		//清空帐户余额
		$("#account").html("");
		//利率
		$("#expected").html("")
		//清空总金额
		$("#buymoney").html("");
		
		if( b1==""){
				massage='';
				$("#savechb").removeClass("ipt-error").parent().siblings("em").html(massage);
				//window.location.href="";
	//$(".masklayer").css("top", '200px');
	$(".masklayer").css("right",document.body.clientWidth/2-(parseInt($(".masklayer").width()))*0.5);
				$("#"+$(this).attr("data-id")).slideDown(500);
				
				//遮罩
				$(".zhezhao").show();
				
				//标题
				$("#title").html($(this).parents(".flright").siblings().find(".title").children("a").html());
				//计算金额和利率
				$("#buymoney").html(fmoney(parseFloat(flm.val()),2));
				
				//计算利率   预期收益={（投标金额*年化利率）/12}*借款期限
				var liximoney=(parseFloat(flm.val()) * parseFloat($(this).parents(".flright").siblings().find(".lilv").html())/100);
				//*parseFloat($(this).parent().siblings().find(".borrowday").attr("data-value")
				
				var money8=parseFloat(liximoney)/12;
				var tmyk9=money8 * parseFloat($(this).parents(".flright").siblings(".flleft").find(".feng").children("label").children("i").html());
				//Math.floor()向上取整
				//Math.ceil(20.36)向下取整
				$("#expected").html(Math.floor(tmyk9*100)/100);
				//$(this).parents(".flright").siblings().find("#lilv");
				
				//帐户余额
				$("#account").html(fmoney(parseFloat($("#hidem").attr("data-value")),2));
		}
	});
	/*
	
	//调用不同倒计时方法
	$(document).on("click",".timebtn",function() {
       timer(132500,$(this));
    });
	var intDiff = parseInt(132500);//倒计时总秒数量
	//年月日倒计时
	function timer(intDiff,DHtml){
		
		window.setInterval(function(){
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
		if (minute <= 9) minute = '0' + minute;
		if (second <= 9) second = '0' + second;
		DHtml.html(day+"天"+hour+"时"+minute+'分'+second+'秒');
		/*
		$('#day_show').html(day+"天");
		$('#hour_show').html('<s id="h"></s>'+hour+'时');
		$('#minute_show').html('<s></s>'+minute+'分');
		$('#second_show').html('<s></s>'+second+'秒');
		intDiff--;
		}, 1000);
	} 
	*/
	
	//格式化金额
	function _Money(money){
		
		var moneyindex;//小数点后几位
		if((money+"").indexOf(".")=="-1"){
			moneyindex=".00";
		}else{
			moneyindex="."+((money+"").split(".")[1]);
		}
			
		var moneylength=((money+"").split(".")[0]).length;//金额长度
		var mLocal="";//临时存储金额
		var moneyStr="";//最后金额
			
		for(var i=1; i<=moneylength ;i){
			if(moneylength<=3){
				mLocal=money+"";
				moneyStr=mLocal+","+moneyStr;
				break;
			}else{
				mLocal=(money+"").substring(parseFloat(moneylength)-3,parseFloat(moneylength));
				moneyStr=mLocal+","+moneyStr;
				money=(money+"").substring(0,moneylength-3);
					
			}
			moneylength=moneylength-3;
		}
			
		return moneyStr.substring(0,moneyStr.length-1)+moneyindex;
	}
	
	//点击确认支付
	$("#repay").click(function(){
		var b1=passwordf($("#jypassword"),"1");
		
		if( b1==""){
			
			if($("#checkBox").is(':checked')){
				massage='';
				$("#checkBox").parent().next("em").html(massage);
				 window.location.href="index.html";
			}else{
				
				massage='请勾选购买协议前复选框！';
				$("#checkBox").parent().next("em").html(massage);
			}
		}
		
	});
	
	/*点击确认支付
	$("#payrepay").click(function(){
		var b1=passwordf($("#jypassword"),"1");
		
		if( b1==""){
			window.location.href="index.html";
		}
		
	});
	*/
	//判断交易密码
	$("#jypassword").blur(function(){
		passwordf($(this),"0");
	});
	
	//判断交易密码
	function passwordf(passval1,pa){
		if(passval1.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(pa=="0"){
				massage="";
				passval1.removeClass("ipt-error").parent().siblings("em").html(massage);
				
			}else{
				massage="请您输入交易密码！";
				passval1.addClass("ipt-error").parent().siblings("em").html(massage);
				
			}
		}else{
			
			if(passval1.val().length>=6 && passval1.val().length<=16 && /^[0-9a-zA-Z]+$/.test(passval1.val())){
				
					/*判断交易密码是否存在
					$.ajax({
						url:"",
						type:"post",
						success:function(data){
							if(data=="1"){
								
								massage="交易密码错误";
								passval1.removeClass("ipt-error").parent().siblings("em").html(massage);
							}else{
								
								massage="";
								passval1.removeClass("ipt-error").parent().siblings("em").html(massage);
							}
						}
					});
					*/
				massage="";
				passval1.removeClass("ipt-error").parent().siblings("em").html(massage);
			}else{
				
				massage="交易密码错误";
				passval1.addClass("ipt-error").parent().siblings("em").html(massage);
			}
			
		}
		return massage;
	}
	
	//借款金额输入验证
	function moneyf(mond,mytext){
		var mondint;
		if(mond.val()==""){
			
			if(mytext=="0"){
				mondint=0;
				massage="";
				mond.removeClass("ipt-error").parent().siblings("em").html(massage);
				return massage;
			}else{
				massage="请输入正确的理财金额";
				mond.addClass("ipt-error").parent().siblings("em").html(massage);
				return massage;
			}
			
		}else{
			mondint=parseInt(mond.val());
		}
		
		if(mondint<100 || mondint % 100!=0){
			massage="请输入大于100 并且是100 倍数的金额！";
			mond.addClass("ipt-error").parent().siblings("em").html(massage);
		}else{
			if(parseInt($("#yue").html())<=mondint){
				
				massage="余额不足";
				
				mond.addClass("ipt-error").parent().siblings("em").html(massage);
			}else{
				massage="";
				
				mond.removeClass("ipt-error").parent().siblings("em").html(massage);
			}
		}
		return massage;
	}
	
})



	