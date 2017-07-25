// JavaScript Document
$(function(){

	//点击提交订单，去支付时
	$("#wdbtn").click(function(){
		
		var b1=moneyf($("#moneyp"));
		var b2=$("#rankm").is(":visible")?passwordf($("#rankm"),"1"):'';
		var b4=validf($("#valid"));
		console.log("b1="+b1+",b2="+b2);
		if( b1=="" && b2=="" && b4==""){
			window.location.href="index.html";
		}
	});
	//点击提交订单，去支付时(连连支付绑卡提交)
	$("#wdbtn_lianlian").click(function(){
		
		var b1=moneyf($("#moneyp"));
		var b2=$("#rankm").is(":visible")?passwordf($("#rankm"),"1"):'';

		if( b1=="" && b2==""){
			window.location.href="index.html";
		}
	});
	
	//判断交易密码
	$("#rankm").blur(function(){
		passwordf($(this),"0");
	});
	
	$("#check").attr("checked",false);
	$(".labelwidth,#check").click(function(){

		if($("#check").is(":checked")){
			$(".labelwidth").addClass("checked");
			$("#shouyufei").css("text-decoration","line-through");
			getUseCFQ();
		}else{
			
			$(".labelwidth").removeClass("checked");
			$("#shouyufei").css("text-decoration","none");
			getNotUseCFQ();
		}	
	});
	
	function getUseCFQ(){
		var vaba=parseFloat($("#moneyp").val())>0?parseFloat($("#moneyp").val()):0;
		$("#bamoney").html(vaba);
		
	}
	function getNotUseCFQ(){
		var vaba=parseFloat($("#moneyp").val())>0?parseFloat($("#moneyp").val()):0;
		//rate=vaba*parseFloat($("#barate").val())
		$("#bamoney").html(vaba-3);
		
	}
	//计算打卡金额
	$("#moneyp").keyup(function(){
		$("#bamoney").html(fmoney(bamoneyf($(this)),2));
	});
	function bamoneyf(bamoval){
		var vaba=parseFloat(bamoval.val())>0?parseFloat(bamoval.val()):0;
		var rate;
		if($("#check").is(":checked")){
			rate=0;
		}else{
			rate=3;
			
		}
		
		return vaba-rate;
	}
	//金额输入验证
	$("#moneyp").blur(function(){
		if(!$(this).val()==""){
			moneyf($(this));	
			
		}else{
			massage="";
			$(this).removeClass("ipt-error").parent().siblings("em").html('*每日提现次数上限 <font color="#fe2a4d">5</font> 次，提现金额上限 <font color="#fe2a4d" id="sxmon">200,000.00</font> 元（贰拾万元）').addClass("hui");;
		}
	});
	var b4=0;
	//验证码输入验证
	$("#valid").blur(function(){
		b4=1;
		validf($(this));
	});
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
	
			timer($(this));
		
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
	function moneyf(mond){
		
		var mondint;
		if(mond.val()==""|| !/^([0-9.]+)$/.test(mond.val())){
			mondint=0;
			massage="请输入正确的提现金额";
			mond.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			console.log("mond.val()");
			return massage;
		}else{
			mondint=parseFloat(mond.val());
		}
		
		
		if(mondint<50 ){
			
			massage="请输入大于50元的金额！";
			mond.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
		}else{
			
			if(rmoney($("#usemoney").html())<mondint){

				massage="提现金额不能大于可提现金额";
				mond.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
				
			}else{
				
				if(rmoney($("#sxmon").val())<mondint){
					
					massage="不能超过提现金额上限";
					mond.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
				}else{
					
					massage="";
					mond.removeClass("ipt-error").parent().siblings("em").html('*每日提现次数上限 <font color="#fe2a4d">5</font> 次，提现金额上限 <font color="#fe2a4d" id="sxmon">200,000.00</font> 元（贰拾万元）').addClass("hui");
				
				}
			}
		}
		return massage;
	}
	
	

})