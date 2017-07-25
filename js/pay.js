// JavaScript Document
$(function(){

	//点击银行卡时效果
	$(".paybank span").click(function(){
		$(this).css({ "border":"1px solid #fe2a4d"}).children("i").show().parent().siblings("span").css({"border":"1px solid #e1e1e1"}).children("i").hide();
	});
	$("input[type=checkbox]").each(function() {
        $(this).attr("checked", false);
    });
	
	//银行卡输入框失去焦点时
	$("#bankid").blur(function(){
		
		bankf($(this),"0");
	});
	
	//判断是否需要判断验证码手机号银行卡
	function accipt_ched(){
		if(rmoney($("#vouchbig").html())==0){
			return false;
		}else{
			return true;	
		}
		if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
			var referLink = document.createElement('a');
			var referForm=document.createElement("form");
			referForm.action=url;
			referForm.method="post";
			referForm.submit();
			referLink.href = url;
			document.body.appendChild(referLink);
			referLink.click();
		} else {
			location.href = url;
		}
		
	}
	//点击确认支付
	$("#okpay").click(function(){
		
		var b1=passwordf($("#jypassword"),"1");

		var _true=true;
		if(accipt_ched()){
			
			var b2=$("#bankid").is(":visible")?bankf($("#bankid"),"1"):'';
			var b3=phonef($("#phone"),0);
			var b4=validf($("#valid"),0);
			( b1=="" && b2=="" && b3=="" && b4=="")?_true=true:_true=false;
			
		}else{
			(b1=="")?_true=true:_true=false;
		}
		if(_true){
			$("#payshowstate").slideDown(500);
			$(".zhezhao1").show();
		}
	});
	
	//点击连连支付提交按钮时
	$("#lianlianbtn").click(function(){

		var b1=passwordf($("#jypassword"),"1");
		
		var _true=true;
		if(accipt_ched()){
			
			var b2=$("#bankid").is(":visible")?bankf($("#bankid"),"1"):'';

			( b1=="" && b2=="")?_true=true:_true=false;
			
		}else{
			(b1=="")?_true=true:_true=false;
		}
		if(_true){
			$("#payshowstate").slideDown(500);
			$(".zhezhao1").show();
		}
	});
	
	//判断交易密码
	$("#jypassword").blur(function(){
		passwordf($(this),"0");
	});
	
	$("#phone").change(function(){
		if (/^([0-9.]+)$/.test($(this).val())) {
				
			massage="";
			$(this).removeClass("ipt-error").parent().siblings("em").html(massage).html(massage);
		} else {
			massage="手机号码应为 11 位数字";
			$(this).addClass("ipt-error").parent().siblings("em").html(massage);
		}
	}).blur(function(){
		
		phonef($(this),1); 
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
	//验证码输入验证
	$("#valid").blur(function(){
		
		validf($(this),1);
	});
	//手机验证
	function phonef(phone,ph6){
		
		if(phone.val()=="" )
		{
			if(ph6==0){
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
	function validf(vali,va6){
		if(vali.val()=="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		{
			if(va6==0){
				massage="请您输入验证码";
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
				
				massage="验证码6位数字";
				vali.addClass("ipt-error").parent().siblings("em").html(massage);
			}
		}
		return massage;
	}
	
	//点击充值页确认支付
	$("#re_mo_btn").click(function(){

		var t1=moneyf($("#rechange_amount"));

		if( t1==""){
			$(".zhezhao").show();
			$("#interdvi").slideDown(500);
			//window.location.href="index.html";
		}
		
	});
	$("#rechange_amount").blur(function(){
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
	//点击确认支付
	$("#payrepay").click(function(){
		var t1=passwordf($("#jypassword"),"1");
		//var t2=validf($("#valid"));
		if($("#rdi-quick").is(":checked")){
			$(".zhezhao").show();
			$("#interdvi").slideDown(500);
		}else if($("#rdi-inter").is(":checked")){
			$(".zhezhao").show();
			$("#interdvi").slideDown(500);
			
		}else{
			
		}
		
		if( t1=="" ){
			//window.location.href="index.html";&& t2=="" 
		}
		
	});
	
	
	//点击连连支付的提交时
	$("#lianlian_pay").click(function(){
		var t1=passwordf($("#jypassword"),"1");
		var t2="";
		
		if($("#rdi-quick").is(":checked")){
			t2=bankf($("#bankid"),"0")
		}
		if( t1+t2=="" ){
			$(".zhezhao").show();
			$("#interdvi").slideDown(500);
			//window.location.href="index.html";&& t2=="" 
		}
		
	});
	
	//页面上所有复选框不可用
	function checkipt(){
		$("input[type=checkbox]").each(function() {
            $(this).attr("disabled",true);
        });
	}
	//倒计时
	$("#getvalid").click(function(){
		
		if(phonef($("#phone"),0)==""){
			checkipt();
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

	//隐藏正在等待
	function HiddenDiv(){
		$("#bankshow").html(''); 
	}
	//显示正在等待
	function ShowDiv(){
		$("#bankshow").html('<img src="../../images/loading220.gif" />'); 
	}
	//判断银行卡号是否正确
	function bankf(bankv,pa){
		if(bankv.val()=="" )//
		{
			if(pa=="0"){
				massage="";
				bankv.removeClass("ipt-error").parent().siblings("em").html('仅支持<font color="#fe2a4d">张三</font>的银行卡进行支付').addClass("hui");
				$("#bankshow").html("");
				
			}else{
				massage="请您输入银行卡号！";
				bankv.addClass("ipt-error").parent().siblings("em").html(massage).removeClass("hui");
				
				$("#bankshow").html("");
			}
				
		}else{
				massage="";
				bankv.removeClass("ipt-error").parent().siblings("em").html('仅支持<font color="#fe2a4d">张三</font>的银行卡进行支付').addClass("hui");
				$("#bankshow").html('<img src="../../images/pay_04.png" class="buttonimgdetail" />中国银行');
			/*
			
                 beforeSend: function () {
                     ShowDiv();

                 },
                 complete: function () {
                     HiddenDiv();
                 },
			*/

		}
		return massage;
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

	$("#bankpay").find("input").prop("checked",true);
	//点击账户支付时
	$("#accountpay").click(function(){
		
		var allmoney=rmoney($(".payright big").html());//产品总金额
		//var djqaccount=rmoney($(".voucher .red big").html()?$(".voucher .red big").html():'0.00');//代金券
		var accm=rmoney($("#accm").html());//怅户余额
		var vouchbig=$("#vouchbig");//银行卡支付金额
		
		var djqaccount=0;//代金券
		$(".voucher .red big").each(function() {
           djqaccount+=parseInt($(this).html());
        });
		
		var bank=0;
		
		if($(this).find("input").is(':checked')){
			
			$("#shijiyue").html(fmoney(Math.min(allmoney,accm),2));
			
			
			$(this).find(".pright").show();
			bank=rmoney($("#voucherspbank big").html())-rmoney($(this).find("#accm").html());
			
			if($("#voucherp").find("input").is(':checked')){//判断是否可用代金券
			
				//如果小于账户余额
				if(allmoney-djqaccount<accm){
					
					$("#accountpay .pright big").html(allmoney-djqaccount);
					
				}else{
					
					$("#accountpay .pright big").html($("#accm").html());
				}
				bank=(fmoney(allmoney-djqaccount-accm,2));
			}else{
				
				bank=(fmoney(allmoney-accm,2));
				
			}
		}else{
			
			$(this).find(".pright").hide();
			bank=rmoney($("#voucherspbank big").html())+rmoney($(this).find("#accm").html());
			
			if($("#voucherp").find("input").is(':checked')){//判断是否可用代金券
				
				bank=(fmoney(allmoney-djqaccount,2));
			}else{
				
				bank=(fmoney(allmoney,2));
			}
		}
		
		if(rmoney(bank)>=0){
			
			$("#vouchbig").html(bank);
			$("#bankmyid").html(bank);
		}else{
			
			$("#vouchbig").html("0.00");
			$("#bankmyid").html("0.00");
		}
		//判断是否该隐藏标杯
		if($("#vouchbig").html()=='0.00'){
			$("#bankpay").find("input").prop("checked",false);
			$("#bankpay").find(".pright").hide();
			$("#bankpay").next().slideUp(300)
		}else{
			console.log($("#bankpayd").is(":hidden"));
			if(!$("#bankpayd").is(":hidden")){
			
			$("#bankpay").find("input").prop("checked",true);
				$("#bankpay").find(".pright").show();
				$("#bankpay").next().slideDown(300)	
			}
		}
		
	});
	
	//设置代金券点击金额
	var vouchipt=0;
	var djq=0;
	//点击代金券时效果
	$(".voucher>div.red,.voucher>div.writes").click(function(){
		
		if($(this).hasClass("red")){
			$(this).removeClass("red").addClass("writes");
		}else{
			$(this).removeClass("writes").addClass("red");
		}
		
		$(".voucher>div.red.repeat").removeClass("red").addClass("writes");
		
		var vouch_money=0;
		
		$(".voucher .red big").each(function() {
           vouch_money+=parseInt($(this).html());
		
        });
		
		//vouch_money<rmoney($("#shijiyue").html())||
		
		
		$("#vouchersp").html(fmoney(vouch_money,2));
		
		//判断代金券让不让
		if(vouse_ipt($(this),vouch_money)){
			
			bankpersonMoney(vouch_money);
			ishidden();
		}
		
		
	});
	
	//判断代金券让不让用
	function vouse_ipt(ipt,vouch_money){
		if( vouch_money >(rmoney($(".payright").find("big").html()))){
			alert("您所选的代金券大于可支付余额");
			ipt.removeClass("red").addClass("writes");
			$("#vouchersp").html(fmoney(vouch_money-(rmoney(ipt.find("big").html())),2));
			return false;
		}else{
			rmoney(ipt.find("big").html());
			return true;
		}
		
	}
	
	//点击代金券时效果
	$(".voucher>div.red.repeat,.voucher>div.writes.repeat").click(function(){
		
		$(this).removeClass("writes").addClass("red").siblings(".voucher>div.red,.voucher>div.writes").addClass("writes").removeClass("red");
		var vouch_money=fmoney(parseInt($(".voucher .red big").html()),2);
		$("#vouchersp").html(vouch_money);
		
		bankpersonMoney(vouch_money);
		ishidden();
		
	});
	//银行卡支付和账户余额应付金额
	function bankpersonMoney(cach){
		
		var allmoney=rmoney($(".payright big").html());//产品总金额
		var djqaccount=cach;//代金券
		var accm=rmoney($("#accm").html());//怅户余额
		var vouchbig=$("#vouchbig");//银行卡支付金额
		var bank=0;//临时金额
		if($("#accountpay input").is(':checked')){
			
			//如果小于账户余额
			if(allmoney-djqaccount<accm){
				
				$("#accountpay .pright big").html(allmoney-djqaccount);
				
			}else{
				
				$("#accountpay .pright big").html($("#accm").html());
			}
				bank=allmoney-djqaccount-accm;
				if(bank<0){
					bank=0;	
				}
			//选中账户支付
			
		}else{
		
			//如果小于账户余额
			if(allmoney-djqaccount<accm){
				
				$("#accountpay .pright big").html(allmoney-djqaccount);
			}else{
				
			}
				bank=allmoney-djqaccount;
			
		}
			$("#vouchbig").html(fmoney(bank,2));
			$("#bankmyid").html(fmoney(bank,2));
	}
	function ishidden(){
		
		//判断是否该隐藏标杯
		if($("#vouchbig").html()=='0.00'){
			$("#bankpay").find("input").prop("checked",false);
			$("#bankpay").find(".pright").hide();
			$("#bankpay").next().slideUp(300)
		}else{
			
			if(!$("#bankpayd").is(":hidden")){
			
				$("#bankpay").find("input").prop("checked",true);
				$("#bankpay").find(".pright").show();
				$("#bankpay").next().slideDown(300)	
			}
		}
	}
	$("#voucherp").click(function(){
		
		var allmoney=rmoney($(".payright big").html());//产品总金额
		var djqaccount=rmoney($(".voucher .red big").html()?$(".voucher .red big").html():'0.00');//代金券
		var accm=rmoney($("#accm").html());//怅户余额
		var vouchbig=$("#vouchbig");//银行卡支付金额
		
		var bank=$(".voucher .red big").html();
		
		$("#vouchersp").html(fmoney(djqaccount,2));
		if($(this).find("input").is(':checked')){
			
			if($("#accountpay input").is(":checked")){
				
				bank=allmoney-djqaccount-accm>0 ? allmoney-djqaccount-accm : 0;//计算银行卡需支付金额
				//计算帐户余额
				accm=allmoney-djqaccount>0 ? Math.min(allmoney-djqaccount,accm):0;
				
			}else{
				
				bank=allmoney-djqaccount>0 ? allmoney-djqaccount : 0;//计算银行卡需支付金额
				accm=0;
			
			}
			$(this).find(".pright").show();
			$(this).next().slideDown(300)
		}else{
			
			$(".voucher .red").addClass("writes").removeClass("red");
			if($("#accountpay input").is(":checked")){
				
				bank=allmoney-accm>0 ? allmoney-accm : 0;//计算银行卡需支付金额
				//计算帐户余额
				accm= Math.min(allmoney,accm);
				
			}else{
				
				bank=allmoney;//计算银行卡需支付金额
				accm=0;
			
			}
			$(this).find(".pright").hide();
			$(this).next().slideUp(300)
			
		}
		$("#vouchbig").html(fmoney(bank,2));
		$("#bankmyid").html(fmoney(bank,2));
		
		$("#shijiyue").html(fmoney(accm,2));
		
		//判断是否该隐藏标杯
		if($("#vouchbig").html()=='0.00'){
			$("#bankpay").find("input").prop("checked",false);
			$("#bankpay").find(".pright").hide();
			$("#bankpay").next().slideUp(300)
		}else{
			console.log($("#bankpayd").is(":hidden"));
			if(!$("#bankpayd").is(":hidden")){
			
			$("#bankpay").find("input").prop("checked",true);
				$("#bankpay").find(".pright").show();
				$("#bankpay").next().slideDown(300)	
			}
		}
	});
	

	/*银行卡支付
	$("#bankpay").click(function(){
		
		if($("#bankpay").find("input").is(':checked')){
			$("#bankpay").find(".pright").show();
			$("#bankpay").next().slideDown(300)
		}else{
			$("#bankpay").find(".pright").hide();
			$("#bankpay").next().slideUp(300)
		}
	});*/
	

	$("#rdi-quick").attr("checked",true);
	//快捷支付和网银支付的切换
	$("#rdi-quick").click(function(){
		
		$(".quick-group").slideDown(500);
		
		$(".inter-group").slideUp(500);
		$("#myvoud").appendTo($("#h22"));

	});
	$("#rdi-inter").click(function(){
		
		$(".quick-group").slideUp(500);
		
		$(".inter-group").slideDown(500);
		$("#myvoud").appendTo($("#h21"));

	});
	

	//网银支付银行切换
	$(".internateBank span").click(function(){
		$(this).addClass("choose").siblings("span").removeClass("choose").parent().siblings(".internateBank").find("span").removeClass("choose");
		
		$(this).parent().after($(".internateTable")[0]);
		var PHtml='';
		
		if($(this).attr("id")=="gongShang"){
			PHtml+='<tr class="interTitle"><td colspan="7">工商银行（普通）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>总限额累计上限（元）</td><td>开通方法</td></tr><tr><td rowspan="8">全国</td><td rowspan="8">借记卡<br /></td><td>2006年9月1日起未申请口令卡和USBKEY的</td><td>300</td><td>300</td><td>300</td><td rowspan="8">柜台申请开通  <br />申请电子口令卡每张口令卡使用次数为1000次</td></tr><tr><td>E支付</td><td>1000</td><td>1000</td><td>无限额</td></tr><tr><td>手机短信认证网上银行口令卡</td><td>2000</td><td>5000</td><td>无限额</td></tr><tr><td>未认证的网上银行口令卡</td><td>500</td><td>1000</td><td>无限额</td></tr><tr><td>电子密码器</td><td>50万</td><td>100万</td><td>无限额</td></tr><tr><td>一代U盾（无手机验证）</td><td>50万</td><td>100万</td><td>无限额</td></tr><tr><td>一代U盾（手机验证）</td><td>100万</td><td>100万</td><td>无限额</td></tr><tr><td>二代U盾</td><td>100万</td><td>100万</td><td>无限额</td></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件 </td></tr>';

		}else if($(this).attr("id")=="jianShe"){
			PHtml+='<tr class="interTitle"><td colspan="8">建设银行（借记卡）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td width="227">用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>季度累计额度上限（元）</td><td>总限额累计上限（元）</td><td width="100">开通方法</td></tr><tr><td rowspan="5">全国</td><td rowspan="5">借记卡</td><td>文件证书</td><td>0</td><td>0</td><td>0</td><td>0</td><td>网上、电话</td></tr><tr><td>动态口令卡/短信口令卡</td><td>1000</td><td>1000</td><td>无限额</td><td>无限额</td><td>网上、电话</td></tr><tr><td>文件证书+动态口令卡/短信口令卡</td><td>5000</td><td>5000</td><td>无限额</td><td>无限额</td><td>网上、电话</td></tr><tr><td>二代网银盾</td><td>5000</td><td>5000</td><td>无限额</td><td>无限额</td><td>柜台</td></tr><tr><td>二代网银盾+动态口令卡/短信口令卡</td><td>5000</td><td>5000</td><td>无限额</td><td>无限额</td><td>柜台</td></tr><tr><td colspan="8">备注：开通网上银行是进行电子支付的前提条件 </td></tr>';
		}else if($(this).attr("id")=="nongYe"){
		PHtml+='<tr class="interTitle"><td colspan="7">农业银行（普通）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>总限额累计上限（元）</td><td>开通方法</td></tr><tr><td rowspan="4">全国</td><td rowspan="4">金穗借记卡</td><td>一代K宝</td><td>50万</td><td>100万</td><td>无限额</td><td rowspan="4">柜台</td></tr><tr><td>二代K宝</td><td>100万</td><td>500万</td><td>无限额</td></tr><tr><td>动态口令卡</td><td>1000</td><td>1000</td><td>无限额</td></tr><tr><td>K码支付</td><td>1000<br /></td><td>3000</td><td>无限额</td></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件 <br /></td></tr>';
		}else if($(this).attr("id")=="jiaoTong"){
			PHtml+='<tr class="interTitle"><td colspan="7">交通银行（普通）</td></tr><tr class="interTitle"><td></td><td colspan="5" width="632">电话：95559</td><td></td></tr><tr><td>覆盖区域</td><td>用户类型</td><td>支持卡种</td><td>每张卡单笔消费上限</td><td>每张卡每日消费上限</td><td>总限额累计上限</td><td>开通方法法</td></tr><tr><td rowspan="2">全国</td><td>短信密码用户</td><td>借记卡</td><td>默认5000-可调高至50000</td><td>默认5000-可调高至50000</td><td>-</td><td>柜台</td></tr><tr><td>证书用户</td><td>借记卡</td><td>100万</td><td>100万</td><td>-</td><td>柜台</td></tr></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件<br /></td></tr>';
			
		}else if($(this).attr("id")=="zhaoShang"){
			PHtml+='<tr class="interTitle"><td colspan="8">招商银行  （普通）</td></tr><tr class="interTitle"><td>覆盖区域</td><td width="100">支持卡种</td><td>用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>季度累计额度(上限)</td><td>总限额累计上限（元）</td><td width="100">开通方法</td></tr><tr><td rowspan="3">全国</td><td rowspan="3">一卡通卡<br />（借记卡） </td><td rowspan="2">大众版</td><td rowspan="2">500</td><td rowspan="2">500</td><td rowspan="2">5万</td><td rowspan="2">无限额</td><td rowspan="2">网上、电话</td></tr><tr></tr><tr><td>专业版USBKey</td><td>无限额</td><td>无限额</td><td>无限额</td><td>无限额</td><td>柜台</td></tr><tr><td colspan="8">备注：① 开通网上银行是进行电子支付的前提条件 <br /></td></tr>';
			
		}else if($(this).attr("id")=="pingAn"){
			PHtml+='<tr class="interTitle"><td colspan="7">平安银行（普通）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡卡每日消费上限（元）</td><td>总限额累计上限（元）</td><td>开通方法</td></tr><tr><td rowspan="3">全国</td><td rowspan="3">借记卡</td><td>USBkey </td><td>50000</td><td>50000</td><td>无</td><td>柜台</td></tr><tr><td>动态口令</td><td>50000</td><td>50000</td><td>无</td><td>柜台</td></tr><tr><td>网银大众版</td><td>50000</td><td>50000</td><td>无</td><td>网站</td></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件 </td></tr>';
			
		}else if($(this).attr("id")=="zhongGuo"){
			PHtml+='<tr class="interTitle"><td colspan="7">中国银行（借记卡）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>总限额累计上限（元）</td><td>开通方法</td></tr><tr><td>全国</td><td>借记卡</td><td>口令卡</td><td>5万</td><td>10万</td><td>无限额</td><td>柜台开通网上银行后在中行网银页面中自助开通网上支付功能</td></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件 </td></tr>';
			
		}else if($(this).attr("id")=="ningSheng"){
			
			PHtml+='<tr class="interTitle"><td colspan="7">民生银行&nbsp;&nbsp;&nbsp;（普通）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>总限额累计上限（元）</td><td>开通方法</td></tr><tr><td rowspan="4">全国</td><td rowspan="4">借记卡</td><td>大众版（民生卡用户）</td><td>300</td><td>300</td><td>300</td><td>网上开通</td></tr><tr><td>贵宾版（文件证书）</td><td>5000</td><td>5000</td><td>无限额</td><td>柜台开通</td></tr><tr><td>贵宾版（U宝）</td><td>2万</td><td>10万</td><td>无限额</td><td>柜台开通</td></tr><tr><td>网上银行VIP+(含单KEY)版</td><td>用户在柜台自行设定</td><td>用户在柜台自行设定</td><td>无限额</td><td>柜台开通</td></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件 <br /></td></tr>';
			
		}else if($(this).attr("id")=="youZheng"){
			PHtml+='<tr class="interTitle"><td colspan="7">邮政储蓄（普通）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>总限额累计上限（元）</td><td>开通方法</td></tr><tr><td rowspan="3">全国</td><td rowspan="3">借记卡</td><td>手机动码</td><td>1万</td><td>1万</td><td>无限额</td><td>柜台开通</td></tr><tr><td>动态口令卡</td><td>10万</td><td>10万</td><td>无限额</td><td>柜台开通</td></tr><tr><td>UKEY+手机动码</td><td>100万</td><td>100万</td><td>无限额</td><td>柜台开通</td></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件 <br /></td></tr>';
		}else if($(this).attr("id")=="zhongXin"){
			PHtml+='<tr class="interTitle"><td colspan="7">中信银行（普通）</td></tr><tr class="interTitle"><td>覆盖区域</td><td width="70">支持卡种</td><td width="180">用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>总限额累计上限（元）</td><td width="190">开通方法</td></tr><tr><td rowspan="2">全国</td><td rowspan="2">理财宝卡</td><td>加强版文件证书</td><td>1000</td><td>5000</td><td>无限额</td><td rowspan="2">请携带银行卡和有效身份证件到中信银行网点柜台申请</td></tr><tr><td>加强版数字证书(USBKEY)</td><td>自定义</td><td>无限额</td><td>无限额</td></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件 <br /></td></tr>';
			
		}else if($(this).attr("id")=="guangDa"){
			PHtml+='<tr class="interTitle"><td colspan="7">中国光大银行（借记卡）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td width="90">单卡单笔消费上限（元）</td><td width="90">单卡每日消费上限（元）</td><td width="90">总限额累计上限（元）</td><td width="170">开通方法</td></tr><tr><td rowspan="5">全国</td><td rowspan="5">借记卡</td><td>银行卡直接支付（手机动态密码）</td><td>5000</td><td>10000</td><td>无限额</td><td>柜台或网银专业版办理</td></tr><tr><td>银行卡直接支付（令牌动态密码）</td><td>50万</td><td>50万</td><td>无限额</td><td>柜台领取令牌</td></tr><tr><td>网银专业版支付（手机动态密码）</td><td>5000</td><td>10000</td><td>无限额</td><td>柜台或网银专业版办理</td></tr><tr><td>网银专业版支付（令牌动态密码）</td><td>50万</td><td>50万</td><td>无限额</td><td>柜台或网银专业版办理</td></tr><tr><td>网银专业版支付（阳光网盾）</td><td>50万</td><td>50万</td><td>无限额</td><td>柜台或网银专业版办理</td></tr><tr><td colspan="7">备注：开通网上银行是进行电子支付的前提条件 </td></tr>';
		}else if($(this).attr("id")=="huaXia"){
			
			PHtml+='<tr class="interTitle"><td colspan="7">华夏银行（普通）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>总限额累计上限（元）</td><td>开通方法</td></tr><tr><td rowspan="3">全国</td><td rowspan="3">借记卡</td><td>非签约客户</td><td>300</td><td>1000</td><td>无限额</td><td>网上开通</td></tr><tr><td>证书/U-key</td><td>5000</td><td>5000</td><td>无限额</td><td>柜台申请开通</td></tr><tr><td>电子钱包用户</td><td>无限额</td><td>无限额</td><td>无限额</td><td>　</td></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件 <br /></td></tr>';
			
		}else if($(this).attr("id")=="xingYe"){
			PHtml+='<tr class="interTitle"><td colspan="7">兴业银行（普通）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>总限额累计上限（元）</td><td>开通方法</td></tr><tr><td rowspan="2">全国</td><td rowspan="2">兴业理财卡、<br />兴业易卡（借记卡）</td><td>开通网上支付<br />手机交易短信保护</td><td>1000元和5000元<br />可以自己在网上选择</td><td>1000元和5000元<br />可以自己在网上选择</td><td>1000元和5000元<br />可以自己在网上选择</td><td>柜台</td></tr><tr><td>证书<br />（普通证书，U盾）</td><td>自行设置限额</td><td>自行设置限额</td><td>自行设置限额</td><td>柜台</td></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件 <br /></td></tr>';
		
		}else if($(this).attr("id")=="puFa"){
			PHtml+='<tr class="interTitle"><td colspan="7">浦发银行&nbsp;（普通）</td></tr><tr class="interTitle"><td></td><td colspan="5">电话：95528</td><td></td></tr><tr><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td>每张卡单笔消费上限</td><td>每张卡每日消费上限</td><td>总限额累计上限</td><td>开通方法法</td></tr><tr><td rowspan="2">全国</td><td rowspan="2">借记卡</td><td>动态密码客户</td><td rowspan="2">10000/笔</td><td rowspan="2">10000/日</td><td rowspan="2">无限额</td><td rowspan="2">柜台</td></tr><tr><td>数字证书客户</td></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件</td></tr>';
			
		}else if($(this).attr("id")=="guangFa"){
			PHtml+='<tr class="interTitle"><td colspan="7">广发银行（普通）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>总限额累计上限（元）</td><td>开通方法</td></tr><tr><td rowspan="2">全国</td><td>手机动态验证码&nbsp;</td><td>借记卡</td><td>不限</td><td>3000</td><td>无限制</td><td rowspan="2">柜台开通网上<br />银行</td></tr><tr><td>Key盾&nbsp;</td><td>借记卡</td><td>不限</td><td>3000</td><td>无限制</td></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件 <br /></td></tr>';
		
		}else if($(this).attr("id")=="shenFa"){
			PHtml+='<tr class="interTitle"><td colspan="7">深圳发展银行（普通）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>总限额累计上限（元）</td><td>开通方法</td></tr><tr><td rowspan="3">全国</td><td rowspan="3">借记卡</td><td>动态口令刮刮卡用户</td><td>5000元</td><td>5000元</td><td>无限额，限28次</td><td>暂不支持</td></tr><tr><td>动态口令编码器用户</td><td>无限额</td><td>无限额</td><td>无限额</td><td rowspan="2">柜台</td></tr><tr><td>U盾</td><td>无限额</td><td>无限额</td><td>无限额</td></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件 <br /></td></tr>';
		}else if($(this).attr("id")=="beiJing"){
			PHtml+='<tr class="interTitle"><td colspan="7">北京银行（普通）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>总限额累计上限（元）</td><td>开通方法</td></tr><tr><td rowspan="3">北京 天津 西安 上海<br />深圳 南京 长沙 济南<br />南昌、杭州<br /></td><td rowspan="3">储蓄卡/京卡（借记卡）</td><td>普通</td><td>300</td><td>300</td><td>300</td><td>网上</td></tr><tr><td>动态密码</td><td>1000</td><td>5000</td><td>无限额</td><td>柜台</td></tr><tr><td>证书</td><td>100万</td><td>100万</td><td>无限额</td><td>柜台</td></tr><tr><td colspan="7">备注：① 开通网上银行是进行电子支付的前提条件 </td></tr>';
		
		}else if($(this).attr("id")=="beiNongShang"){
			PHtml+='<tr class="interTitle"><td colspan="7">北京农商行（普通）</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td>用户类型</td><td>单卡单笔消费上限（元）</td><td>单卡每日消费上限（元）</td><td>总限额累计上限（元）</td><td>开通方法</td></tr><tr><td rowspan="2">北京</td><td rowspan="2">借记卡</td><td>手机验证客户</td><td>10万</td><td>50万</td><td>无限额</td><td rowspan="2">柜台申请开通</td></tr><tr><td>证书验证客户</td><td>20万</td><td>100万</td><td>无限额</td></tr><tr><td colspan="7">备注：开通网上银行是进行电子支付的前提条件 </td></tr>';
		
		}else if($(this).attr("id")=="shangHai"){
			PHtml+='<tr class="interTitle"><td></td><td colspan="6">电话：95594</td></tr><tr class="interTitle"><td>覆盖区域</td><td>支持卡种</td><td width="250">用户类型</td><td>每张卡单笔消费上限</td><td>每张卡每日消费上限</td><td>总限额累计上限</td><td width="170">开通方法</td></tr><tr><td rowspan="2">网银客户</td><td rowspan="2">借记卡</td><td>办理 E 盾证书版个人网银，开通网上支付功能</td><td>50万</td><td>100万</td><td>-</td><td rowspan="2">限额范围内客户可自行设置单笔 / 日累计限额</td></tr><tr><td>办理动态密码版个人网银（含文件证书）,开通网上支付功能</td><td>6000元</td><td>1万</td><td>-</td></tr><tr><td>上银快付客户</td><td>借记卡</td><td>签约上银快付业务</td><td>2000元</td><td>-</td><td>5000元</td><td>　</td></tr><tr><td  colspan="7">备注：开通网上银行是进行电子支付的前提条件 </td></tr>';
		
		}
		
		$(".internateTable").html(PHtml);
	});
	$(".inter_more").toggle(function(){
		$(".cange").slideDown(500);
		$(".inter_more").html("收起");
	},function(){
		$(".cange").slideUp(500);
		$(".inter_more").html("展开更多>>");
		
	});
	if($("#accm")){
		
	  if(rmoney($("#accm").html())<=0){
		  
		  $("#accountpay input").attr("disabled",true);
	  }else{
		  $("#accountpay input").attr("disabled",false);
	  }
	}

})

