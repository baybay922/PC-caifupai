// JavaScript Document
//修改密码验证
$(function(){
	var b1=0;
	var b2=0;
	var b3=0;
	//$("#password_1").keyup(function(){
		//	if (/^[0-9a-zA-Z]+$/.test($(this).val())) {
			//	massage="";
			//	$(this).removeClass("ipt-error").parent().siblings("em").html(massage);
			//} else {
			//	$(this).addClass("ipt-error").parent().siblings("em").html(massage);
			//}
	//}); 
	
	//原密码输入验证
	$("#password_1").blur(function(){
		b1=1;
		passwordf($(this));
	});
	//新密码输入验证
	$("#password_2").blur(function(){
		b2=1;
		password_1f2($(this));
		
	});
	//确认新密码输入验证
	$("#password_3").blur(function(){
		b3=1;
		password_1f3($(this));
	});
	
	//原密码验证方法
	function passwordf(passval1){
		if(passval1.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(b1==0){
			massage="请您输入密码";
			passval1.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}else{
				massage="";
				passval1.removeClass("ipt-error").parent().siblings("em");
			}
		}else{
			if(passval1.val().length>=6 && passval1.val().length<=16 && /^[0-9a-zA-Z]+$/.test(passval1.val())){
				massage="";
				passval1.removeClass("ipt-error").parent().siblings("em").html(massage);
			}else{
				massage="密码为6 -16 位字符，支持字母及数字,字母区分大小写";
				passval1.addClass("ipt-error").parent().siblings("em").html(massage);
			}
		}
		return massage;
	}
	//新密码验证方法
	/* function password_1f2(passval2){
		if($("#password_1").val()==$("#password_2").val()){
				massage="原密码与新密码不能相同";
				$("#password_2").addClass("ipt-error").parent().siblings("em").html(massage);
		}else if($("#password_2").val()==""){
				massage="请输入新密码";
				$("#password_2").addClass("ipt-error").parent().siblings("em").html(massage);
		}else{
				massage="";
				$("#password_2").removeClass("ipt-error").parent().siblings("em").html("");
		}
		return massage;
	} */
	//新密码验证方法
	function password_1f2(passval2){
		if(passval2.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(passval2.val()==""){
			massage="请您输入新密码";
			passval2.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}else{
				massage="";
				passval2.removeClass("ipt-error").parent().siblings("em");
			}
		}else{
			if(passval2.val().length>=6 && passval2.val().length<=16 && /^[0-9a-zA-Z]+$/.test(passval2.val())){
				massage="";
				passval2.removeClass("ipt-error").parent().siblings("em").html(massage);
			}else{
				massage="密码为6 -16 位字符，支持字母及数字,字母区分大小写";
				passval2.addClass("ipt-error").parent().siblings("em").html(massage);
			}
		}
		return massage;
	}
	//密码比较验证方法
	function password_1f4(){
		if($("#password_1").val()==$("#password_2").val()){
				massage="原密码与新密码不能相同";
				$("#password_2").addClass("ipt-error").parent().siblings("em").html(massage);
		}else{
				massage="";
				$("#password_2").removeClass("ipt-error").parent().siblings("em").html("");
		}
		return massage;
	}
	//确认密码验证方法
	function password_1f3(passval3){
		if($("#password_2").val()!=$("#password_3").val()){
				massage="新密码与确认密码不相同";
				$("#password_3").addClass("ipt-error").parent().siblings("em").html(massage);
		}else if($("#password_3").val()==""){
				massage="请输入确认密码";
				$("#password_3").addClass("ipt-error").parent().siblings("em").html(massage);
		}else{
				massage="";
				$("#password_3").removeClass("ipt-error").parent().siblings("em").html("");
			}
		return massage;
	}
	//点击确认修改时执行
	$("#submit-findpwd22").click(function(){
		var t1=passwordf($("#password_1"));
		var t2=password_1f2($("#password_2"));
		var t3=password_1f4($("#password_2"));
		var t4=password_1f3($("#password_3"));
			if(t1=="" && t2=="" && t3=="" && t4==""){
				window.location.href="";
			}
	});
	
})//function end

//交易密码验证
$(function(){
	var b4=0;
	var b5=0;
	var b6=0;
	//原密码输入验证
	$("#jiaoyi_1").blur(function(){
		b4=1;
		jiaoyi_pwd($(this));
	});
	//新密码输入验证
	$("#jiaoyi_2").blur(function(){
		b5=1;
		jiaoyi2_pwd($(this));
	});
	//确认新密码输入验证
	$("#jiaoyi_3").blur(function(){
		b6=1;
		jiaoyi3_pwd($(this));
	});
	
	//原密码验证方法
	function jiaoyi_pwd(jiaoyival1){
		if(jiaoyival1.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(b4==0){
			massage="请您输入原密码";
			jiaoyival1.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
			}else{
				massage="";
				jiaoyival1.removeClass("ipt-error").parent().siblings("em");
			}
		}else{
			if(jiaoyival1.val().length>=6 && jiaoyival1.val().length<=16 && /^[0-9a-zA-Z]+$/.test(jiaoyival1.val())){
				massage="";
				jiaoyival1.removeClass("ipt-error").parent().siblings("em").html(massage);
			}else{
				massage="密码为6 -16 位字符，支持字母及数字,字母区分大小写";
				jiaoyival1.addClass("ipt-error").parent().siblings("em").html(massage);
			}
		}
		return massage;
	}
	//新密码验证方法
	/* function jiaoyi2_pwd(jiaoyival2){
		if($("#jiaoyi_1").val()==$("#jiaoyi_2").val())
			{
				massage="原密码与新密码不能相同";
				$("#jiaoyi_2").addClass("ipt-error").parent().siblings("em").html(massage);
				
			}else if($("#jiaoyi_2").val()==""){
				
				massage="请输入新密码";
				$("#jiaoyi_2").addClass("ipt-error").parent().siblings("em").html(massage);
				
			}else{
				massage="";
				$("#jiaoyi_2").removeClass("ipt-error").parent().siblings("em").html("");
			}
		return massage;
	} */
	//新密码验证方法
	function jiaoyi2_pwd(jiaoyival2){
		if(jiaoyival2.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if($("#jiaoyi_2").val()==""){
			massage="请您输入新密码";
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
	//原密码与新密码比较
	function jiaoyi22_pwd(jiaoyival2){
		if($("#jiaoyi_1").val()==$("#jiaoyi_2").val())
			{
				massage="原密码与新密码不能相同";
				$("#jiaoyi_2").addClass("ipt-error").parent().siblings("em").html(massage);
				
			}else{
				massage="";
				$("#jiaoyi_2").removeClass("ipt-error").parent().siblings("em").html("");
			}
		return massage;
	} 
	//确认密码验证方法
	function jiaoyi3_pwd(jiaoyival3){
		if($("#jiaoyi_2").val()!=$("#jiaoyi_3").val())
			{
				massage="新密码与确认密码不相同";
				$("#jiaoyi_3").addClass("ipt-error").parent().siblings("em").html(massage);
			}else if($("#jiaoyi_3").val()==""){
				
				massage="请输入确认密码";
				$("#jiaoyi_3").addClass("ipt-error").parent().siblings("em").html(massage);
				
			}else{
				massage="";
				$("#jiaoyi_3").removeClass("ipt-error").parent().siblings("em").html("");
			}
		return massage;
	}
	//点击下一步时执行
	$("#submit-jiaoyi").click(function(){ 
		
		var t4=jiaoyi_pwd($("#jiaoyi_1"));
		var t5=jiaoyi2_pwd($("#jiaoyi_2"));
		var t51=jiaoyi22_pwd($("#jiaoyi_2"));
		var t6=jiaoyi3_pwd($("#jiaoyi_3"));
			if(t4=="" && t5=="" && t51=="" && t6==""){
				$("#wei_sz span").css("color","#333");	
				$("#wei_sz span").html("已设置");
				$(".mmgl_show").slideUp(500);
					
			}
		
		
	});
	
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

function CheckIntensity2(pwd){ 
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
	  document.getElementById('rejc2').style.backgroundColor = "#fe2a4d"; 
	  document.getElementById('rejc2').style.border = "1px solid #fe2a4d"; 
    break; 
    case 2 : 
      Color_Html="中"; 
	  document.getElementById('rejc2').style.backgroundColor = "#ffae6c"; 
	  document.getElementById('rejc2').style.border = "1px solid #ffae6c"; 
    break; 
    case 3 : 
      Color_Html="强"; 
	  document.getElementById('rejc2').style.backgroundColor = "#12b391"; 
	  document.getElementById('rejc2').style.border = "1px solid #12b391"; 
    break; 
    default : 
      Color_Html="无"; 
	  document.getElementById('rejc2').style.backgroundColor = "#aaaaaa"; 
	  document.getElementById('rejc2').style.border = "1px solid #868686"; 
    break; 
  } 
  document.getElementById('rejc2').innerHTML=Color_Html; 
}
