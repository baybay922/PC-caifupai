// JavaScript Document
$(function(){
	function cleaript(){
		$(".input_box_phone input[type=password],.input_box_phone input[type=text]").each(function() {
            $(this).val("");
        });
	}
	//清除验证码获取
	function validClear(){
		
		clearTimeout(interval); 
		$("#ex_get_valid").attr("disabled",false);
		$("#ex_get_valid").css("background-color","#03004c").html('获取验证码');
	}
	
	//点击弹出修改交易密码
	$("#ed_ex_psdad").click(function(){
		//cleaript();
		//validClear();
		$(".zhezhao5").show();
		$(".zhezhao2").show();
		$("#ed_ex_psd").slideDown();
		
		$(".xiugai_phone_main").eq(0).show().siblings(".xiugai_phone_main").hide();
		$("#cjd").hide();
	});
	//点击修改交易密码
	$("#ed_ex_psda").click(function(){
		
		$(this).parents(".xiugai_phone_main").hide().siblings("#xigai1").show();

		validClear();
		$("#ed_ex_psd").hide();
		$(".zhezhao5").hide();
		
	});
	//原密码输入验证
	$("#ed_ex_psd1").blur(function(){
		
		jiaoyi_pwd($(this),1);
	});
	//新密码输入验证
	$("#ed_ex_psd2").blur(function(){
	
		jiaoyi2_pwd($(this),1);
		
	});
	
	//点击下一步时执行
	$("#next_sub2").click(function(){

		var t1=jiaoyi_pwd($("#ed_ex_psd1"),0);
		var t2=jiaoyi2_pwd($("#ed_ex_psd2"));
		var t2=jiaoyi3_pwd($("#ed_ex_psd2"));
		if( t1=="" && t2=="" ){
			
			$(this).parents(".xiugai_phone_main").hide().next(".xiugai_phone_main").show();
		}
		
	});
	//验证码输入验证
	$("#valid").blur(function(){

		validf($(this),1);
	});
	
	//点击下一步时执行
	$("#next_sub1").click(function(){

		var t1=validf($("#valid"),0);
		if( t1=="" ){
			$(this).parents(".xiugai_phone_main").hide().next(".xiugai_phone_main").show();
		}
	});
	
	//原密码验证方法
	function jiaoyi_pwd(jiaoyival1,ji){
		if(jiaoyival1.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(ji==0){
			massage="请您输入新交易密码";
			jiaoyival1.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}else{
				massage="";
				jiaoyival1.removeClass("ipt-error").parent().siblings("em").html("交易密码为6 -16 位字符，支持字母及数字,字母区分大小写").addClass("hui");
			}
		}else{
			if(jiaoyival1.val().length>=6 && jiaoyival1.val().length<=16 && /^[0-9a-zA-Z]+$/.test(jiaoyival1.val())){
				massage="";
				jiaoyival1.removeClass("ipt-error").parent().siblings("em").html("交易密码为6 -16 位字符，支持字母及数字,字母区分大小写").addClass("hui");
			}else{
				massage="密码为6 -16 位字符，支持字母及数字,字母区分大小写";
				jiaoyival1.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}
		}
		return massage;
	}
	//新密码验证方法
	function jiaoyi2_pwd(jiaoyival2){
		if(jiaoyival2.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(jiaoyival2.val()==""){
			massage="请再次输入交易密码";
			jiaoyival2.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}else{
				massage="";
				jiaoyival2.removeClass("ipt-error").parent().siblings("em");
			}
		}else{
			if(jiaoyival2.val().length>=6 && jiaoyival2.val().length<=16 && /^[0-9a-zA-Z]+$/.test(jiaoyival2.val())){
				massage="";
				jiaoyival2.removeClass("ipt-error").parent().siblings("em").html(massage);
			}else{
				massage="密码为6 -16 位字符，支持字母及数字,字母区分大小写";
				jiaoyival2.addClass("ipt-error").parent().siblings("em").html(massage);
			}
		}
		return massage;
	}
	//确认密码验证方法
	function jiaoyi3_pwd(jiaoyival3){
		if($("#ed_ex_psd1").val()!=$("#ed_ex_psd2").val())
			{
				massage="新交易密码与确认交易密码不相同";
				jiaoyival3.addClass("ipt-error").parent().siblings("em").html(massage);
			}else if(jiaoyival3.val()==""){
				
				massage="请输入确认交易密码";
				jiaoyival3.addClass("ipt-error").parent().siblings("em").html(massage);
				
			}else{
				massage="";
				jiaoyival3.removeClass("ipt-error").parent().siblings("em").html("");
			}
		return massage;
	}

	$("#valid").change(function(){
			if (/^([0-9.]+)$/.test($(this).val())) {
				
				massage="";
				$(this).removeClass("ipt-error").parent().siblings("em").html(massage).html(massage);
			} else {
				massage="验证码应为 6 位数字";
				$(this).addClass("ipt-error").parent().siblings("em").html(massage);
			}
	});
	
	//用户验证码
	function usernamef(user,us){
		if(user.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(us==0){

				massage="请您输入用户名";
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
					massage="手机号不可作为用户名使用";
					user.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
					
				}else{
					massage="";
					user.removeClass("ipt-error").parent().siblings("em").html('请输入4~20位字符，支持汉字、字母、数字及"-"、"_"组合').addClass("hui");
						
				}
			}else{
				
				massage="请输入4 - 20位字符，支持汉字、字母、数字及 '-'、'_'组合";
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
	
	//手机验证
	function ex_phonef(phone,ph){
		if(phone.val()=="" )
		{
			if(ph==0){
			massage="手机号码格式错误";
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
				massage="手机格式错误";
				phone.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}
			
		}
		return massage;
	}
	//点击验证码时的倒计时
	$("#ex_get_valid").click(function(){

		if(ex_phonef($("#ex_phone"),0)==""){

			timer($(this));
		}
	});
	var intDiff = parseInt(59);//倒计时总秒数量
	function timer(timeval){
		
		timeval.attr("disabled",true);
		timeval.html('60s后重新获取');
		$("#ex_get_valid").css("background-color","#EEEEEE");
		intDiff=59;
		interval=window.setInterval(function(){
		timeval.html(intDiff+'s后重新获取');
		if(intDiff<=0){
			timeval.attr("disabled",false);
		$("#ex_get_valid").css("background-color","#03004c");
			timeval.html('重新获取');
			clearTimeout(interval); 
			return;
		}
		intDiff--;
		}, 1000);
	}

})//function end


//密码强弱的方法
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
      Color_Html="弱"; 
	  document.getElementById('rejc').style.backgroundColor = "#fe2a4d"; 
	  document.getElementById('rejc').style.border = "1px solid #fe2a4d"; 
    break; 
    case 2 : 
      Color_Html="中"; 
	  document.getElementById('rejc').style.backgroundColor = "#ffae6c"; 
	  document.getElementById('rejc').style.border = "1px solid #ffae6c"; 
    break; 
    case 3 : 
      Color_Html="强"; 
	  document.getElementById('rejc').style.backgroundColor = "#12b391"; 
	  document.getElementById('rejc').style.border = "1px solid #12b391"; 
    break; 
    default : 
      Color_Html="无"; 
	  document.getElementById('rejc').style.backgroundColor = "#aaaaaa"; 
	  document.getElementById('rejc').style.border = "1px solid #868686"; 
    break; 
  } 
  document.getElementById('rejc').innerHTML=Color_Html; 
}

function ed_ex_Check(pwd){ 
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
      Color_Html="弱"; 
	  document.getElementById('rejc_ex_psd').style.backgroundColor = "#fe2a4d"; 
	  document.getElementById('rejc_ex_psd').style.border = "1px solid #fe2a4d"; 
    break; 
    case 2 : 
      Color_Html="中"; 
	  document.getElementById('rejc_ex_psd').style.backgroundColor = "#ffae6c"; 
	  document.getElementById('rejc_ex_psd').style.border = "1px solid #ffae6c"; 
    break; 
    case 3 : 
      Color_Html="强"; 
	  document.getElementById('rejc_ex_psd').style.backgroundColor = "#12b391"; 
	  document.getElementById('rejc_ex_psd').style.border = "1px solid #12b391"; 
    break; 
    default : 
      Color_Html="无"; 
	  document.getElementById('rejc_ex_psd').style.backgroundColor = "#aaaaaa"; 
	  document.getElementById('rejc_ex_psd').style.border = "1px solid #868686"; 
    break; 
  } 
  document.getElementById('rejc_ex_psd').innerHTML=Color_Html; 
}


