// JavaScript Document
//用户中心左面菜单栏
window.onload=function(){
		var menu=document.getElementById('menu'),
			ps=menu.getElementsByTagName('p'),
			uls=menu.getElementsByTagName('ul');
			for(var i in ps){
				ps[i].id=i;
				ps[i].onclick=function(){
					var u=uls[this.id];
					/* if(u.style.display=='block'){
						u.style.display='none';
						$(this).find("img").attr("src","../../images/new_icon/user_up.jpg");
					}else{
						u.style.display='block';
						$(this).find("img").attr("src","../../images/new_icon/user_down.jpg");
					}	 */
					
					if($(this).hasClass('p_down')){
						$(this).removeClass('p_down').addClass('p_up');
						$(this).siblings().slideUp(500);
					}else{
						$(this).removeClass('p_up').addClass('p_down');
						$(this).siblings().slideDown(500);
					}
				}
				
			}
	}

$(document).ready(function() {
	bottomB();
	$(window).resize(function(){
		bottomB();
	});
	
//兼容火狐
//总在最底部
	function bottomB(){
		
		var Sys = {};
		var ua = navigator.userAgent.toLowerCase();
		var s;
		(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
		(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
		(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
		(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
		(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
		//以下进行测试
		var banben;//文档高度
		var liulanqi;//浏览器高度
		if (Sys.ie){
			banben = document.body.clientHeight;
			liulanqi =  document.documentElement.clientHeight ;
		}else if (Sys.firefox){
			banben =document.body.clientHeight ;
			liulanqi = document.documentElement.clientHeight ;
		}else if (Sys.chrome){
			banben = document.body.clientHeight;
			liulanqi =  document.documentElement.clientHeight ;
		}else if (Sys.opera){
			banben = document.documentElement.clientHeight ;
			liulanqi = document.body.clientHeight ;
		}else if (Sys.safari){
			banben = document.body.clientHeight;
			liulanqi =  document.documentElement.clientHeight;
		}else{
			banben = document.body.clientHeight;
			liulanqi =  document.documentElement.clientHeight ;
		}
		if($(".footer").html()===undefined){
			
		}else{
			if(liulanqi<=banben ){
				$(".footer").css({"position":"inherit"});
			}else{

				var  myliu=0;
				if(liulanqi-banben>153){
					myliu=liulanqi-153;
				}else{
					
					myliu=liulanqi-(liulanqi-banben);
				}
				$(".footer").css({"position":"absolute","top":myliu,"width":"100%"});
			}
		}
				$(".zhezhao1,.zhezhao,.zhezhao5,.zhezhao2,.zhezhao3").css("height",document.documentElement.offsetHeight);
				$(".masklaym3").css("top","50px");
	}
	//个人中心导航下拉
	$(".tabulper li").hover(function(){
		$(".pre_main .ding").hide();
		$(".pre_main").find(".pre_maintitle").hide();
		$(".pre_main").find(".pre_maintitle").eq($(this).attr("data-id")).show();
	},function(){ 
		
	});
	$(".personindex ul li,.personindex .pre_main").hover(function(){
		if($(this).find("a").html()=="账户总览"){
			$(".pre_main").slideUp(100);	
		}
		else{
			$(".pre_main").slideDown(100);	
		}
	});
	$(".personindex").hover(function(){ 
	},function(){
		$(".pre_main").slideUp(100);	
	});
	$(".tabpul").hover(function(){
	},function(){
		$(".pre_main").find(".pre_maintitle").hide();
		$(".pre_main .ding").show();
	});
	
	$(".tabul li,.jsq>h2 span").click(function(){
		$(this).addClass("action").siblings("li,span").removeClass("action");
		$("#"+$(this).attr("data-id")).siblings(".tab").hide();
		$("#"+$(this).attr("data-id")).fadeIn(500);
	});

	//个人中心左部下拉列表
	$('a.pp').click(function(){
		$(this).next('ul.child').toggle('fast');
		$(this).parent('li').siblings().find('ul.child').hide('fast');
	});
	
	//下拉框
	$(".select").each(function(){
		var s=$(this);
		var z=parseInt(s.css("z-index"));
		var dt=$(this).children("dt");
		var dd=$(this).children("dd");
		var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
		var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
		dt.click(function(){dd.is(":hidden")?_show():_hide();});
		dd.find("a").click(function(){
			dt.attr("data-id",$(this).parent().attr("data-id")); 
			dt.html($(this).html());_hide();
		});
		$("body").click(function(i){ !$(i.target).parents(".select").first().is(s) ? _hide():"";});
	});
	
	/*
	$(".masklayer").css("top", document.body.clientHeight/2-(parseInt($(".masklayer").height()))*0.5);
	*/
	var _docu=document.documentElement.clientHeight/2-200;

	$(".masklayer").css("top", _docu>120?'100px':_docu+'px');
	$(".masklayer").css("top", _docu<0?'20px':_docu+'px');
	$(".masklayer").each(function(){
		$(this).css("right",document.body.clientWidth/2-(parseInt($(this).width()))*0.5);
	});
	$(".masklayers").css("top", document.documentElement.offsetHeight/8);
	$(".masklayers").css("right",document.body.clientWidth/2-(parseInt($(".masklayers").width()))*0.5);
	$("#login").css("top", document.documentElement.clientHeight/2-(parseInt($(".masklayer").height()))*0.5);
	$("#payshowstate").css("top","10px");
	$(".masklaym3").css("top","10px");
	
	//遮罩层
	$(document).on("click","a[data-mask=mask]",function(){
		var _docu=document.documentElement.clientHeight/2-200;
		$(".masklayer").css("top", _docu>120?'150px':_docu+"px");
		$(".masklayer").css("right",document.body.clientWidth/2-(parseInt($(".masklayer").width()))*0.5);
		$(".masklaym3,.p_bank").css("top","30px");
		$("#"+$(this).attr("data-id")).slideDown(500);
	
		$(".zhezhao1").show();
	});
	$("a[data-id='close'],i[data-id='close']").click(function(){
		$(this).parents(".masklayer").hide();
		$(this).parents(".masklayers").hide();
		$(".zhezhao").hide();
		$(".zhezhao1").hide();
		$(".zhezhao2").hide();
		$(".zhezhao3").hide();
		$(".zhezhao5").hide();
		
		if($("#cjd").is(":visible")){
			$(".zhezhao1").show();
		}
	});
	
	$("[data-id='httpClose']").click(function(){
		$(this).parents(".masklayer").hide();
		$(this).parents(".masklayers").hide();
		$(".zhezhao1").hide();
	});
	
	//导航栏js下拉列表导航
	$("li.fb").hover(function(){
		$(this).children("ul.nav_list").show("fast");
	},function(){
		$(this).children("ul.nav_list").hide("fast");
	});
	//顶部js下拉列表导航
	$(".posirelcur").hover(function(){
		$(this).children(".our").show("fast");
	},function(){
		$(this).children(".our").hide("fast");
	});
	
	//单击时间时，弹出的时间事件
	$(".hdate").click(function (e) {
		var ths = this;
		calendar.show({
			id: this, ok: function () {
			}
		});
	});	
	
	//显示与隐藏解释
	$("#img_quest").hover(function(){
		$(this).siblings("em").show();
	},function(){
		
		$(this).siblings("em").hide();
	});
	
});

	//格式化金额
	function fmoney(s, n) {  
		n = n > 0 && n <= 20 ? n : 2;  
		s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  
		var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];  
		t = "";  
		for (i = 0; i < l.length; i++) {  
			t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
		}  
		return t.split("").reverse().join("") + "." + r;  
	} 

	//还原小数
	function rmoney(s) {  
		return parseFloat(s.replace(/[^\d\.-]/g, ""));
	}  

/**
× JQUERY 模拟淘宝控件银行帐号输入
* @Author 312854458@qq.com 旭日升
**/

function formatBankNo (BankNo){
	if (BankNo.value == "") return;
	var account = new String (BankNo.value);
	account = account.substring(0,22); /*帐号的总数, 包括空格在内 */
	if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null){
		/* 对照格式 */
		if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" +
		".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null){
			var accountNumeric = accountChar = "", i;
			for (i=0;i<account.length;i++){
				accountChar = account.substr (i,1);
				if (!isNaN (accountChar) && (accountChar != " ")) accountNumeric = accountNumeric + accountChar;
			}
			account = "";
			for (i=0;i<accountNumeric.length;i++){	/* 可将以下空格改为-,效果也不错 */
				if (i == 4) account = account + " "; /* 帐号第四位数后加空格 */
				if (i == 8) account = account + " "; /* 帐号第八位数后加空格 */
				if (i == 12) account = account + " ";/* 帐号第十二位后数后加空格 */
				account = account + accountNumeric.substr (i,1)
			}
		}
	}else{
		account = " " + account.substring (1,5) + " " + account.substring (6,10) + " " + account.substring (14,18) + "-" + account.substring(18,25);
	}
	if (account != BankNo.value) BankNo.value = account;
}
function checkBankNo (BankNo){
	if (BankNo.value == "") return;
	if (BankNo.value.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null){
		if (BankNo.value.match ("[0-9]{19}") != null)
			formatBankNo (BankNo)
	}
}
