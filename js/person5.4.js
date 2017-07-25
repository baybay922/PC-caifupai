// JavaScript Document

$(function(){
	
	//银行卡输入框失去焦点时
	$("#address").blur(function(){
		addressf($(this),1);
	});
	$("#lian_city").blur(function(){
		cityf($(this),1);
	});
	$("#text").blur(function(){
		kaihuh($(this),1);
	});
	
	//点击提交订单，去支付时
	$("#recharge").click(function(){
		var b1=addressf($("#address"));
		var b2=cityf($("#lian_city"));
		var b3=kaihuh($("#text"));
		if( b1=="" && b2=="" && b3==""){
			window.location.href="index.html";
		}
		
	});
	//判断省市
	function cityf(lian_city){
		if($("#lian_city").text()==="--城市--"){
				massage="请选择省市";
				$("#lian_city").parent().parent().siblings("em").html(massage).removeClass("hui");
		}else{
				massage="";
				$("#lian_city").parent().parent().siblings("em").html("").removeClass("ipt-error");
		}
		return massage;
	}
	function addressf(address){
		if($("#address").text()==="--省份--"){
				massage="请选择省市";
				$("#address").parent().parent().siblings("em").html(massage).removeClass("hui");
		}else{
				massage="";
				$("#address").parent().parent().siblings("em").html("").removeClass("ipt-error");
		}
		return massage;
	}
	
	
	//开户行
	function kaihuh(text){
		if($("#text").val()==""){
			if($("#text").val()==""){
				massage="请输入开户行地址";
				$("#text").parent().siblings("em").html(massage).removeClass("hui");
			}else{
				massage="";
				$("#text").parent().siblings("em").html("").removeClass("ipt-error");
			}
		}else{
			if (/^([\u4e00-\u9fa5]+|[a-zA-Z0-9]+)$/.test($("#text").val())) {
				massage="";
				$("#text").parent().siblings("em").html(massage).html("").removeClass("ipt-error");
			} else {
				massage="不能输入特殊符号";
				$("#text").parent().siblings("em").html(massage).removeClass("hui");
			}
		}
		return massage;
	}
	

})
	$(document).ready(function(){
					$(".yh_search").click(function(){
						$(".yh_name").animate({height: 'toggle', opacity: 'toggle'}, "slow");
					});
					$(".yh_name p").click(function(){
						var yhtml=$(this).html();
						$("#text").val(yhtml);
						$(".yh_name").animate({height: 'toggle', opacity: 'toggle'}, "slow");
					});
	});
	$(function(){
		$("input:text").focus(function(){
			$("#text").siblings().find(".yh_search").css("display","block");
		});
		$("input:text").blur(function(){
			$(this).css("background","white");
		});
	});


	
