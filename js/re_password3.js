// JavaScript Document
$(function(){
	$("input").val();
	var b1=0;
	$("#password").keyup(function(){
			if (/^[0-9a-zA-Z]+$/.test($(this).val())) {
				massage="";
				$(this).removeClass("ipt-error").parent().siblings("em").html(massage).html(massage);
			} else {
				massage="";
				$(this).addClass("ipt-error").parent().siblings("em").html(massage);
			}
	});
	
	//密码输入验证
	$("#password").blur(function(){
		b1=1;
		passwordf($(this));
	});
	//密码输入验证
	$("#password2").blur(function(){
		b2=1;
		passwordf2($(this));
	});
	
	//验证密码
	function passwordf(passval1){
		if(passval1.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if($("#password").val()==""){
			massage="<img src='../images/new_icon/icon_01.png' />请您输入密码";
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
				massage="<img src='../images/new_icon/icon_01.png' />密码为6 -16 位字符，支持字母及数字,字母区分大小写";
				passval1.addClass("ipt-error").parent().siblings("em").html(massage);
			}
			
		}
		return massage;
	}
	//验证确认密码
	function passwordf2(passval2){
		if($("#password2").val()==""){
			massage="<img src='../images/new_icon/icon_01.png' />请您输入密码";
			$("#password2").addClass("ipt-error").parent().siblings("em").html(massage).addClass("back");
		}else if($("#password").val()!=$("#password2").val()){
			massage="<img src='../images/new_icon/icon_01.png' />两次秘密不一致";
			$("#password2").addClass("ipt-error").parent().siblings("em").html(massage).addClass("back");
		}else{
			$("#password2").removeClass("ipt-error").parent().siblings("em").html(massage);
		}
		return massage;
	}
	//点击下一步时执行
	/* $("#submit-findpwd").click(function(){
		var b1=passwordf($("#password"));
		if(b1==""){
			if($("#password").val()!=$("#password2").val())
			{
				massage="两次秘密不一致";
					$("#password2").addClass("ipt-error").parent().siblings("em").html(massage).addClass("back");
			}else{
					$("#password2").removeClass("ipt-error").parent().siblings("em").html(massage);
					window.location.href="re_password4.html";
			}
		}
		
	}); */
	//点击下一步时执行
	$("#submit-findpwd").click(function(){

		var t1=passwordf($("#password"),0);
		var t2=passwordf2($("#password2"),0);
		if( t1=="" && t2==""){
			window.location.href="re_password2.html";
		}
		
	});
	
})//function end


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
	  document.getElementById('rejc').style.backgroundColor = "#fe2a4d"; 
	  document.getElementById('rejc').style.border = "1px solid #fe2a4d"; 
    break; 
    case 2 : 
      Color_Html="中"; 
	  document.getElementById('rejc').style.backgroundColor = "#ffae6c"; 
	  document.getElementById('rejc').style.border = "1px solid #ffae6c"; 
    break; 
    case 3 : 
      Color_Html="高"; 
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
