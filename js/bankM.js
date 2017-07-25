// JavaScript Document

$(function(){

	var ifIep=$("#ieshowpay");
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
	(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
	(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
	(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
	(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
	
	//以下进行测试
	if (Sys.ie ){
		if(parseInt(Sys.ie.substring(0, 2))>=8){
			
			ifIep.hide();
		}else{
			
			ifIep.show();
		}
			
	}else if (Sys.firefox){
		ifIep.show();
	}else if (Sys.chrome){
		ifIep.show();
	}else if (Sys.opera){
		ifIep.show();
	}else if (Sys.safari){
		ifIep.show();
	}else{
		ifIep.show();
	}

	
	//点击提交订单，去支付时
	$("#recharge").click(function(){
		
		var b1=moneyf($("#moneyp"));
		var b2=$("#bankid").is(":visible")?bankf($("#bankid"),"1"):'';
		var b3=phonef($("#phone"));
		var b4=validf($("#valid"));
		var b4=passwordf($("#rankm"));
		
		if( b1=="" && b2=="" && b3=="" && b4=="" && b5==""){
			
			window.location.href="index.html";
		}
		
	});
	
	//点击提交订单，去支付时(连连支付  绑定)
	$("#wdbtn_lianlian").click(function(){
		
		var b1=moneyf($("#moneyp"));
		
		if( b1=="" ){
			
			$(".zhezhao").show();
			$("#interdvi").slideDown(500);
		}
		
	});
	
	//点击提交订单，去支付时(连连支付  未绑定)
	$("#b_lianlian_WBD").click(function(){
	
		var b1=moneyf($("#moneyp"));
		var b2=$("#bankid").is(":visible")?bankf($("#bankid"),"1"):'';
		
		if( b1=="" && b2==""){
			
			$(".zhezhao").show();
			$("#interdvi").slideDown(500);
		}
		
	});
	//判断交易密码
	$("#rankm").blur(function(){
		passwordf($(this),"0");
	});
	//判断交易密码
	function passwordf(passval1,pa){
		if(passval1.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(pa=="0"){
				massage="";
				passval1.removeClass("ipt-error").parent().siblings("em").html(massage).addClass("hui");
				
			}else{
				massage="请您输入交易密码！";
				passval1.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
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
				passval1.removeClass("ipt-error").parent().siblings("em").html(massage).addClass("hui");
			}else{
				
				massage="交易密码错误";
				passval1.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}
			
		}
		return massage;
	}
	
	//判断银行卡号是否正确
	function bankf(bankv,pa){
		
		if(bankv.val()=="" )//
		{
			if(pa=="0"){
				massage="";
				bankv.removeClass("ipt-error").parent().siblings("em").html('*仅支持<font color="#fe2a4d">张**</font>的银行卡进行充值').addClass("hui");
				$("#bankshow").hide();
				
			}else{
				massage="请您输入银行卡号！";
				bankv.removeClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
				
				$("#bankshow").hide();
			}
				
		}else{
	
			if(bankv.val().replace(/\s/g, "").length<=19 && bankv.val().replace(/\s/g, "").length>=15){
				massage="";
				bankv.removeClass("ipt-error").parent().siblings("em").html('*仅支持<font color="#fe2a4d">张**</font>的银行卡进行充值').addClass("hui");
				$("#bankshow").show();
			}else{
				massage="银行卡号格式错误！";
				bankv.removeClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
				
				$("#bankshow").hide();
			}
			 
		}
		return massage;
	}
	
	//金额输入验证
	$("#moneyp").blur(function(){
		if(!$(this).val()==""){
			moneyf($(this));	
			
		}else{
			massage="";
			$(this).removeClass("ipt-error").parent().siblings("em").html('*充值最小金额不得小于<font color="#fe2a4d">50</font>元').addClass("hui");;
		}
	});
	
		//借款金额输入验证
	function moneyf(mond){
		
		var mondint;
		if(mond.val()==""|| !/^([0-9.]+)$/.test(mond.val())){
			mondint=0;
			massage="请输入正确的充值金额";
			mond.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			
			return massage;
		}else{
			
			mondint=parseInt(mond.val());
		}
		
		if(mondint<50 ){
			massage="请输入大于50元的金额！";
			mond.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
		}else{
				massage="";
				
				mond.removeClass("ipt-error").parent().siblings("em").html('*充值最小金额不得小于<font color="#fe2a4d">50</font>元').addClass("hui");
			
		}
		return massage;
	}
		
	$("#phone").change(function(){
		if (/^([0-9.]+)$/.test($(this).val())) {
				
			massage="";
			$(this).removeClass("ipt-error").parent().siblings("em").html(massage).html(massage);
		} else {
			massage="手机号码应为 11 位数字";
			$(this).addClass("ipt-error").parent().siblings("em").html(massage);
		}
	});
	$("#valid").change(function(){
		if (/^([0-9.]+)$/.test($(this).val())){
				
			massage="";
			$(this).removeClass("ipt-error").parent().siblings("em").html(massage).html(massage);
		} else {
			massage="验证码应为 6 位数字";
			$(this).addClass("ipt-error").parent().siblings("em").html(massage);
		}
	});
	var b3=0;
	var b4=0;
	//手机号码输入验证
	$("#phone").blur(function(){
		b3=1;
		phonef($(this)); 
	});
	//验证码输入验证
	$("#valid").blur(function(){
		b4=1;
		validf($(this));
	});
	//手机验证
	function phonef(phone){
		
		if(phone.val()=="" )
		{
			if(b3==0){
			massage="手机号码格式错误";
			phone.addClass("ipt-error").parent().siblings("em").html(massage);
			}else{
				
				massage="";
				phone.removeClass("ipt-error").parent().siblings("em").html(message);
			}
		}else
		{
			if (/(^1[3|5|7|8][0-9]{9}$)/.test(phone.val())) {
				
			/*判断手机号是否存在
			$.ajax({
				url:"",
				type:"post",
				success:function(data){
				    if(data=="1"){
						
						massage="";
						user.removeClass("ipt-error").parent().siblings("em").html(massage).html("该手机号将用于手机号登录和找回密码").addClass("hui");
					}else{
						
						massage="手机号已存在";
						user.removeClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
					}
				}
			});
			*/
				massage="";
				phone.removeClass("ipt-error").parent().siblings("em").html(massage).html(massage);
			} else {
				
				massage="手机格式错误";
				phone.addClass("ipt-error").parent().siblings("em").html(massage);
			}
			
		}
		return massage;
	}
	//验证码
	function validf(vali){
		if(vali.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(b4==0){
				massage="请您输入验证码";
				vali.addClass("ipt-error").parent().siblings("em").html(massage);
			}else{
				
				massage="";
				vali.removeClass("ipt-error").parent().siblings("em").html(massage);
			}
		}else{
			
			if(vali.val().length==6 && /^([0-9.]+)$/.test(vali.val())){
				/*
				var djs=0;
				djs=1;
				if(djs==1){
						
					$("#getvalid").attr("disabled",false);
					$("#getvalid").addClass("btn-blue").removeClass("btn-gray");
					$("#getvalid").html('重新获取');
					clearTimeout(interval); 
				}
				
				*/
				
				massage="";
				vali.removeClass("ipt-error").parent().siblings("em").html(massage);
				
			}else{
				
				massage="验证码6位数字";
				vali.addClass("ipt-error").parent().siblings("em").html(massage);
			}
		}
		return massage;
	}
	
	//倒计时
	$("#getvalid").click(function(){
		b3=0;
		if(phonef($("#phone"))==""){
			timer($(this));
		}
	});
	var intDiff = parseInt(59);//倒计时总秒数量
	function timer(timeval){
		
		timeval.attr("disabled",true);
		timeval.html('60s后重新获取');
		$("#getvalid").addClass("btn-gray").removeClass("btn-blue");
		intDiff=59;
		interval=window.setInterval(function(){
		timeval.html(intDiff+'s后重新获取');
		if(intDiff<=0){
			timeval.attr("disabled",false);
			$("#getvalid").addClass("btn-blue").removeClass("btn-gray");
			timeval.html('重新获取');
			clearTimeout(interval); 
			return;
		}
		intDiff--;
		}, 1000);
	}

})


	
