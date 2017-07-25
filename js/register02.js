// JavaScript Document

$(function(){

  	//上下箭头
	$("#viste_i_zc").click(function(){
		if($(this).hasClass("viste_zc_top")){
			
			$(this).removeClass("viste_zc_top").addClass("viste_zc_bottom");	
			$("#visate").slideUp(500);
		}else{
				
			$(this).removeClass("viste_zc_bottom").addClass("viste_zc_top");
			$("#visate").slideDown(500);	
		}
	});
	
	//邀请码
	$("#visate").blur(function(){
		visatef($(this),1)
	});
	
	//邀请码
	function visatef(vali,va1){
		if(vali.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(va1==0){
				massage="请您输入邀请码";
				vali.addClass("ipt-error").parent().siblings("em").html(massage);
			}else{
				
				massage="";
				vali.removeClass("ipt-error").parent().siblings("em").html(massage);
			}
		}else{
			
			if(vali.val().length==6 && /^([0-9.]+)$/.test(vali.val())){
				
				massage="";
				vali.removeClass("ipt-error").parent().siblings("em").html(massage);
				
			}else{
				
				massage="邀请码6位数字";
				vali.addClass("ipt-error").parent().siblings("em").html(massage);
			}
		}
		return massage;
	}
	
	
	//确定是否可以禁用
	if($("#regitxt").attr("data-val")=='2'){
		
		$("#getvalid").attr("disabled",false);
	}
	
	//用户名输入验证
	$("#username").blur(function(){
		
		usernamef($(this),1);
	});
	$("#username").change(function(){
		
		if (/[^a-zA-Z0-9\u4E00-\u9FA5\_-]/.test($(this).val())) {
			massage='请输入4 - 20位字符，支持汉字、字母、数字及 "-"、"_"组合';
			$(this).addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
		} else {
			massage="";
			$(this).removeClass("ipt-error").parent().siblings("em").html(massage).html('请输入4 - 20位字符，支持汉字、字母、数字及 "-"、"_"组合').addClass("hui");
		}
		
	});
	
	$("#phone").change(function(){
		if (/^([0-9.]+)$/.test($(this).val())) {
			
			massage="该手机号将用于手机号登录和找回密码";
			$(this).removeClass("ipt-error").parent().siblings("em").html(massage).html(massage).addClass("hui");
		} else {
			massage="手机号码应为 11 位数字";
			$(this).addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
		}
			
	});
	$("#valid").change(function(){
		if (/^([0-9.]+)$/.test($(this).val())) {
				
			massage="";
			$(this).removeClass("ipt-error").parent().siblings("em").html(massage).html(massage);
		} else {
			massage="验证码应为 6 位数字";
			$(this).addClass("ipt-error").parent().siblings("em").html(massage);
		}
	});
	$("#password").change(function(){
		
		if (/^[0-9a-zA-Z]+$/.test($(this).val())) {
				
			massage="密码为6 -16 位字符，支持字母及数字,字母区分大小写";
			$(this).removeClass("ipt-error").parent().siblings("em").html(massage).html(massage).addClass("hui");
		} else {
			massage="密码为6 -16 位字符，支持字母及数字,字母区分大小写";
			$(this).addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
		}
			
	});
	
	//密码输入验证
	$("#password").blur(function(){

		passwordf($(this),1);
	});
	//手机号码输入验证
	$("#phone").blur(function(){

		phonef($(this),1); 
	});
	//验证码输入验证
	$("#valid").blur(function(){

		validf($(this),1);
	});
	
/*---------------------------------------------------------- 注册 02 -------------------------------------------------------------------------*/
	//点击注册保存时
	$("#submit-register").click(function(){

		var t2=usernamef($("#username"),0);
		var t3=passwordf($("#password"),0);
		var t4=phonef($("#phone"),0);
		var t5=validf($("#valid"),0);
		var t6= $("#visate").val()==""? t6="" : visatef($("#visate"),0);
		if( t2=="" && t3=="" && t4=="" && t5==""){
			//$("form").submit();
			//window.location.href="register_success.html";
			$(".zhezhao1").show();
			$("#phonemask").slideDown(500);
			noneipt();
			nonecishu();
			$("#valid3").val("");	
			timer($("#getvalids"));
		}
		
	});
	function noneipt(){
	
		$("#piptime").val("");
		$("#piptime2").val("");
		$("#piptime3").val("");
		$("#piptime4").val("");
		$("#piptime5").val("");
		$("#piptime6").val("");
		
		$(".imgre").html('');
		$(".zhuan").html('');
		
	}
	function nonecishu(){
		
	   
	   vlnum=0;
		}
	$("#phclose,#phclose2").click(function(){
		
		clearTimeout(interval); 
		$(this).parents(".masklayer").hide();
		$(".zhezhao1").hide();
	});
	var hidden=0;//次数
	var vlnum=0;
	//倒计时
	$("#getvalids").click(function(){
			timer($(this));
	});
	//文本框禁用
	function iptdisno(){
		$("#piptime").attr("disabled",true).css("cursor","no-drop");
		$("#piptime2").attr("disabled",true).css("cursor","no-drop");
		$("#piptime3").attr("disabled",true).css("cursor","no-drop");
		$("#piptime4").attr("disabled",true).css("cursor","no-drop");
		$("#piptime5").attr("disabled",true).css("cursor","no-drop");
		$("#piptime6").attr("disabled",true).css("cursor","no-drop");
		$("#getvalids").attr("disabled",true).css("cursor","no-drop").css({"cursor":"no-drop","background-color:":"#f1f1f1"});
	}
	//文本框启用
	function iptdisyes(){
		
		$("#piptime").attr("disabled",false).css("cursor","auto");
		$("#piptime2").attr("disabled",false).css("cursor","auto");
		$("#piptime3").attr("disabled",false).css("cursor","auto");
		$("#piptime4").attr("disabled",false).css("cursor","auto");
		$("#piptime5").attr("disabled",false).css("cursor","auto");
		$("#piptime6").attr("disabled",false).css("cursor","auto");
		$("#getvalids").attr("disabled",false).css({"cursor":"auto","background-color:":"#fff"});
	}
	$("#getvalids").attr("disabled",true);
	
	$("#piptime2").focus(function(){
		
	});
	//手机密码验证
	$("#piptime").keyup(function(){

		if (/^([a-z]|[A-Z]|[0-9])$/.test($(this).val())) {
			$("#piptime2").focus();
			tijiao();
		}
		
		
	});
	$("#piptime2").keyup(function(e){
		
		if (/^([a-z]|[A-Z]|[0-9])$/.test($(this).val())) {
			$("#piptime3").focus();
			tijiao();
		}
	　 if(e.keyCode == 8){
		
			$("#piptime").focus();
	   }
	});
	$("#piptime3").keyup(function(e){

		if (/^([a-z]|[A-Z]|[0-9])$/.test($(this).val())) {
			$("#piptime4").focus();
			tijiao();
		}
	　 if(e.keyCode == 8){
		
			$("#piptime2").focus();
	   }
	});
	$("#piptime4").keyup(function(e){

		if (/^([a-z]|[A-Z]|[0-9])$/.test($(this).val())) {
			$("#piptime5").focus();
			tijiao();
		}
		
	　 if(e.keyCode == 8){
		
			$("#piptime3").focus();
	   }
	});
	$("#piptime5").keyup(function(e){

		if (/^([a-z]|[A-Z]|[0-9])$/.test($(this).val())) {
			$("#piptime6").focus();
			tijiao();
		}
	　 if(e.keyCode == 8){
		
			$("#piptime4").focus();
	   }
	});
	$("#piptime6").keyup(function(e){

	　 if(e.keyCode == 8){
		
			$("#piptime5").focus();
	   }
	});
	function keyfocus(pict){
		pict.prevAll("input").each(function() {
            if($(this).val()!=""){
				
			}
			
        });;
	}
	$("#piptime6").keyup(function(){
		if(/^([a-z]|[A-Z]|[0-9])$/.test($(this).val())){
			tijiao();
		}else{
			$(".imgre").html('');
		}
	});
	//提交验证码
	function tijiao(){
			var i1=$("#piptime").val();
			var i2=$("#piptime2").val();
			var i3=$("#piptime3").val();
			var i4=$("#piptime4").val();
			var i5=$("#piptime5").val();
			var i6=$("#piptime6").val();
			if( i1!="" &&  i2!="" &&  i3!="" &&  i4!="" &&  i5!="" && i6!=""  ){
				
				$(".imgre").html('<img src="../images/loading220.gif">');
			}
			/*$(this).blur();
			//触发手机密码验证
			$(".imgre").html('<img src="../images/pay_04.png">');
			if($(".dhidden").is(":visible")){
				
			}
			*/
	}
	
	//验证码
	$("#valid3").keyup(function(){
		if($(this).val().length==4){


				//触发验证事件
				$("#valid3").val("");	
				//$(".zhuan").html('<img src="../images/pay_04.png">');
				$(".dhidden").slideUp(500);

			$(".zhuan").html('<img src="../images/pay_04.png">');
			iptdisyes();
			timer($("#getvalids"));
			$("#pcolor").html('短信验证码已发送，请注意查收');
		}
	});
	var intDiff = parseInt(59);//倒计时总秒数量
	function timer(timeval){
		noneipt();
		if(hidden>=1){
			if(vlnum==0){
				iptdisno();
				$(".dhidden").slideDown(500);
				vlnum=1;
				return
			}else{
				iptdisyes();
				vlnum=0;
			}
		}
		if(hidden==2){
			$("#title").html("验证码发送过于频繁，请输入图形验证码再次获取短信");
		}
		$(".pcolor").html('短信验证码已发送，请注意查收');
		
		timeval.attr("disabled",true);
		timeval.html('60 秒后重新获取验证');
		intDiff=3;
		interval=window.setInterval(function(){
		timeval.html(intDiff+' 秒后重新获取验证');
		if(intDiff<=0){
			hidden=hidden+1;
			timeval.attr("disabled",false);
			timeval.html('重新获取');
			$(".pcolor").html('&nbsp;');
			clearTimeout(interval); 
			return;
		}
		intDiff--;
		}, 1000);
	}
	
})//function end
/*---------------------------------------------------------- 注册 02 -------------------------------------------------------------------------*/
	
	//手机验证
	function phonef(phone,ph1){
		
		if(phone.val()=="" )
		{
			if(ph1==0){
			massage="<img src='../images/new_icon/icon_01.png' />请输入手机号码";
			phone.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}else{
				
				massage="";
				phone.removeClass("ipt-error").parent().siblings("em").html("该手机号将用于手机号登录和找回密码").addClass("hui");
			}
		}else
		{
			if (/(^1[3|5|4|7|8][0-9]{9}$)/.test(phone.val())) {
				
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
				phone.removeClass("ipt-error").parent().siblings("em").html(massage).html("该手机号将用于手机号登录和找回密码").addClass("hui");
			} else {
				
				massage="<img src='../images/new_icon/icon_01.png' />手机格式错误";
				phone.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}
			
		}
		return massage;
	}
	
	//用户验证码
	function usernamef(user,us1){
		if(user.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(us1==0){
				
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
						user.removeClass("ipt-error").parent().siblings("em").html('请输入4~20位字符，支持汉字、字母、数字及"-"、"_组合"').addClass("hui");
					}else{
						
						massage="用户名已存在";
						user.removeClass("ipt-error").parent().siblings("em").removeClass("hui");
					}
				}
			});
			*/
			
			if(user.val().length>=4 && user.val().length<=20 && !/[^a-zA-Z0-9\u4E00-\u9FA5\_-]/.test(user.val())){
				if(/(^1[3|5|7|8][0-9]{9}$)/.test(user.val())){
					massage="<img src='../images/new_icon/icon_01.png' />手机号不可作为用户名使用";
					user.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
				}else{
					massage="";
					user.removeClass("ipt-error").parent().siblings("em").html('请输入4~20位字符，支持汉字、字母、数字及"-"、"_"组合').addClass("hui");
				}
			}else{
				massage='<img src="../images/new_icon/icon_01.png" />请输入4 - 20位字符，支持汉字、字母、数字及 "-"、"_"组合';
				user.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}
		}
		return massage;
	}

	function passwordf(passval1,pa1){
		if(passval1.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(pa1==0){
			massage="<img src='../images/new_icon/icon_01.png' />请您输入密码";
			passval1.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}else{
				massage="";
				passval1.removeClass("ipt-error").parent().siblings("em").html('请输入6~16位字符，字母加数字组合，字母区分大小写').addClass("hui");
			}
		}else{
			
			if(passval1.val().length>=6 && passval1.val().length<=16 && /^[0-9a-zA-Z]+$/.test(passval1.val())){
				massage="";
				passval1.removeClass("ipt-error").parent().siblings("em").html(massage).html('请输入6~16位字符，字母加数字组合，字母区分大小写').addClass("hui");
			}else{
				
				massage="<img src='../images/new_icon/icon_01.png' />密码为6 -16 位字符，支持字母及数字,字母区分大小写";
				passval1.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}
			
		}
		return massage;
	}
	//验证码
	function validf(vali,va1){
		if(vali.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(va1==0){
				massage="<img src='../images/new_icon/icon_01.png' />请您输入验证码";
				vali.addClass("ipt-error").parent().siblings("em").html(massage);
			}else{
				
				massage="";
				vali.removeClass("ipt-error").parent().siblings("em").html(massage);
			}
		}else{
			
			if(vali.val().length==4 ){
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
				
				massage="<img src='../images/new_icon/icon_01.png' />验证码4位数字";
				vali.addClass("ipt-error").parent().siblings("em").html(massage);
			}
		}
		return massage;
	}
	


function CheckIntensity(pwd){ 
  var Mcolor,Wcolor,Scolor,Color_Html; 
  var m=0; 
  var Modes=0; 
  for(i=0; i<pwd.length; i++){ 
    var charType=0; 
    var t=pwd.charCodeAt(i); 
    if(t>=48 && t <=57){charType=1;} 
    else if(t>=65 && t <=90){charType=2;} 
    else if(t>=97 && t <=122){charType=4;} 
    else{charType=4;} 
    Modes |= charType; 
  } 
  for(i=0;i<4;i++){ 
  if(Modes & 1){m++;} 
      Modes>>>=1;
  } 
  if(pwd.length<=4){m=1;} 
  if(pwd.length<=0){m=0;} 
 switch(m){ 
    case 1 : 
      Color_Html="低"; 
	  document.getElementById('rejc').style.backgroundColor = "#F43A3B"; 
	  document.getElementById('rejc').style.border = "1px solid #F43A3B"; 
    break; 
    case 2 : 
      Color_Html="中"; 
	  document.getElementById('rejc').style.backgroundColor = "#FFB50C"; 
	  document.getElementById('rejc').style.border = "1px solid #FFB50C"; 
    break; 
    case 3 : 
      Color_Html="高"; 
	  document.getElementById('rejc').style.backgroundColor = "#1FD567"; 
	  document.getElementById('rejc').style.border = "1px solid #1FD567"; 
    break; 
    default : 
      Color_Html="无"; 
	  document.getElementById('rejc').style.backgroundColor = "#aaaaaa"; 
	  document.getElementById('rejc').style.border = "1px solid #868686"; 
    break; 
  } 
  document.getElementById('rejc').innerHTML=Color_Html; 
}
