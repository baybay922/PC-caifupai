// JavaScript Document
$(function(){

	$("input").val();
	//用户名输入验证
	
	$("#phone").change(function(){
			if (/^([0-9.]+)$/.test($(this).val())) {
				
				massage="";
				$(this).removeClass("ipt-error").parent().siblings("em").html(massage).html(massage).addClass("hui");
			} else {
				//massage="手机号码应为 11 位数字";
				$(this).addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}
			
	});
	$("#valid").change(function(){
			if (/^([0-9.]+)$/.test($(this).val())) {
				
				massage="";
				$(this).removeClass("ipt-error").parent().siblings("em").html(massage).html(massage);
			} else {
				massage="<img src='../images/new_icon/icon_01.png' />验证码应为 6 位数字";
				$(this).addClass("ipt-error").parent().siblings("em").html(massage);
			}
	});
	
	$("#email").change(function(){
			if (/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test($(this).val())) 
			{
				massage="";
				$(this).removeClass("ipt-error").parent().siblings("em").html(massage).html(massage);
			} else {
				massage="邮箱格式不正确";
				$(this).addClass("ipt-error").parent().siblings("em").html(massage);
			}
	});
	//手机号码输入验证
	$("#phone").blur(function(){
		phonef($(this),1); 
	});
	//验证码输入验证
	$("#valid").blur(function(){
		validf($(this),1);
	});
	//点击下一步时执行
	$("#submit-register").click(function(){

		var t4=phonef($("#phone"),0);
		var t5=validf($("#valid"),0);
		if( t4=="" && t5==""){
			window.location.href="re_password2.html";
		}
		
	});
	
	//手机验证
	function phonef(phone,ph){
		if(phone.val()=="" )
		{
			if(ph==0){
			massage="<img src='../images/new_icon/icon_01.png' />请输入手机号";
			phone.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}else{
				massage="";
				phone.removeClass("ipt-error").parent().siblings("em").html("").addClass("hui");
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
						user.removeClass("ipt-error").parent().siblings("em").html(massage);
					}else{
						
						massage="手机号已存在";
						user.removeClass("ipt-error").parent().siblings("em").html(massage);
					}
				}
			});
			*/
				massage="";
				phone.removeClass("ipt-error").parent().siblings("em").html(massage).html("");
			} else {
				massage="<img src='../images/new_icon/icon_01.png' />手机格式错误";
				phone.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}
			
		}
		return massage;
	}
	
	//用户验证码
	function usernamef(user,us){
		if(user.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(us==0){

				massage="<img src='../images/new_icon/icon_01.png' />请您输入用户名";
				user.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}else{
				massage="";
				user.removeClass("ipt-error").parent().siblings("em").html('请输入4 - 20位字符，支持汉字、字母、数字及"-"、"_"组合').addClass("hui");
				
			}
		}else{
			
			/*判断用户名是否存在
			$.ajax({
				url:"",
				type:"post",
				success:function(data){
				    if(data=="1"){
						
						massage="";
						user.removeClass("ipt-error").parent().siblings("em").html(massage);
					}else{
						
						massage="用户名已存在";
						user.removeClass("ipt-error").parent().siblings("em").html(massage);
					}
				}
			});
			*/
			
			if(user.val().length>=4 && user.val().length<=20 && !/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\_\-]/.test(user.val())){
				if(/(^1[3|5|7|8][0-9]{9}$)/.test(user.val())){
					massage="<img src='../images/new_icon/icon_01.png' /> 手机号不可作为用户名使用";
					user.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
					
				}else{
					massage="";
					user.removeClass("ipt-error").parent().siblings("em").html('请输入4~20位字符，支持汉字、字母、数字及"-"、"_"组合').addClass("hui");
						
				}
			}else{
				
				massage="<img src='../images/new_icon/icon_01.png' />请输入4 - 20位字符，支持汉字、字母、数字及 '-'、'_'组合";
				user.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}
		}
		return massage;
	}
	
	
	//验证码
	function validf(vali,va){
		if(vali.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(va==0){
				massage="<img src='../images/new_icon/icon_01.png' />请您输入验证码";
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
				
				massage="<img src='../images/new_icon/icon_01.png' />验证码6位数字";
				vali.addClass("ipt-error").parent().siblings("em").html(massage);
			}
		}
		return massage;
	}
	//点击验证码时的倒计时
	$("#getvalid").click(function(){
        if(phonef($("#phone"),0)==""){
            timer($(this),1);
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

})//function end



