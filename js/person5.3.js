// JavaScript Document

$(function(){
	
	//银行卡输入框失去焦点时
	$("#bankid").blur(function(){
		bankf($(this),"0");
	});
	
	
	//点击提交订单，去支付时
	$("#recharge").click(function(){
		
		var b1=moneyf($("#moneyp"));
		var b2=$("#bankid").is(":visible")?bankf($("#bankid"),"1"):'';
		if( b1=="" && b2==""){
			window.location.href="index.html";
		}
		
	});
	
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
		
		if(mondint<0.01 ){
			massage="请输入大于0.01元的金额！";
			mond.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
		}else{
				massage="";
				
				mond.removeClass("ipt-error").parent().siblings("em").html('*充值最小金额不得小于<font color="#fe2a4d">0.01</font>元').addClass("hui");
			
		}
		return massage;
	}

})


	
