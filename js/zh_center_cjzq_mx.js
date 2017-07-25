
//点击向上按钮展开
	$(function(){
		$(document).on("click",".pre_ulsmall li",function(){
			console.log($(this).parents("ul.pre_ulsmall").find(".pre_ul_lismall_50").children("img"));
			if($(this).parents("ul.pre_ulsmall").find("img").attr("src")=="../../images/new_icon/up.png"){
				$(this).parent().parent("li").next().slideDown(500).siblings(".div_show").slideUp(500);
				$(this).parents("ul.pre_ulsmall").find("img").attr("src","../../images/new_icon/down.png");
			}else{
				$(this).parent().parent("li").next().slideUp(500).siblings(".div_show").slideUp(500);
				$(this).parents("ul.pre_ulsmall").find("img").attr("src","../../images/new_icon/up.png");
				$(this).parents("li.pre_ulbig_hui").siblings("li").find("img").attr("src","../../images/new_icon/up.png");
			}	
		});
	})
	
//多选框效果
	function selectAll(checkbox) {
		$('input[class=c]').prop('checked', $(checkbox).prop('checked'));
		if(!checkbox.checked){
			$('input[class=c]').eq(0).prop('checked',true);
		}
	};
	function selectAlls(checkbox) {
		$('input[class=d]').prop('checked', $(checkbox).prop('checked'));
		if(!checkbox.checked){
			$('input[class=d]').eq(0).prop('checked',true);
		}
	};
	$(function(){
		function checkp(xuan1){
			var falg=0;
			xuan1.each(function(){
				if($(this).is(":checked")){
					falg+=1;
				}
			});
			if(falg>0) return true; else return false;
		}
		$('.xuan .c').click(function(){
			if(!$(this).is(":checked")){
				$(".xuan").find("input[type=checkbox]").eq(0).prop("checked",false);
			}
			if(!checkp($('.xuan .c'))){
				$(this).prop("checked",true);
			}
		});
		$('.xuan2 .d').click(function(){
			if(!$(this).is(":checked")){
				$(".xuan2").find("input[type=checkbox]").eq(0).prop("checked",false);
			}
			if(!checkp($('.xuan2 .d'))){
				$(this).prop("checked",true);
			}
		});
	})
//排序的箭头
	$(function(){
		$(".xiala").click(function(){
			var lengthF=$(this).css("background-image").length;
			if($(this).css("background-image").substring(lengthF-7,lengthF-5).indexOf("3")=="-1"){
				if($(this).hasClass("xiala6")){
					
					$(this).removeClass("xiala6").removeClass("xiala7");
					$(this).attr("data-value",0);
					
					
				}else{
					
					$(this).addClass("xiala7").removeClass("xiala6");
					$(this).attr("data-value",1);
					
				}
			}else{
					$(this).addClass("xiala6").removeClass("xiala7");
					$(this).attr("data-value",2);
			}
		});
	})
//排序的箭头end	
	
$(document).ready(function() {
	financeHtml(5,jhlist,ylist);
	
 })
//声明出借债权明细列表
var jhlist=new Array();
//出借列表详细
var ylist=new Array();
//查询出借债权明细
function financeHtml(rows,flist,ylist){
	/*出借债权明细列表中各参数
	for(var i=0; i<=parseInt(rows); i++){
		 flist[i]=["消费借款-3个月-10%(年化率)",10000.00,11000.00,0.00,"2015-6-1","回款中","2015-6-1","<img src="../images/up.jpg" />","index.do?financeId=1";
		 //1.债权名称，2.借款人，3.出借金额(元)，4.待收回款(元)，5.已回金额(元)，6.最近回款日，7.债权状态，8.转让状态，9.投标时间，10.明细
	 
	}*/
		
		 flist[0]=["消费借款-3个月-10%(年化率)",10000.00,11000.00,0.00,"2015-6-1","回款中","2015-6-1","<img src='../../images/new_icon/up.png' />","index.do?financeId=1"];
		 flist[1]=["消费借款-3个月-10%(年化率)",10000.00,11000.00,0.00,"2015-6-1","回款中","2015-6-1","<img src='../../images/new_icon/up.png' />","index.do?financeId=1"];
		 flist[2]=["消费借款-3个月-10%(年化率)",10000.00,11000.00,0.00,"2015-6-1","回款中","2015-6-1","<img src='../../images/new_icon/up.png' />","index.do?financeId=1"];
		 flist[3]=["消费借款-3个月-10%(年化率)",10000.00,11000.00,0.00,"2015-6-1","回款中","2015-6-1","<img src='../../images/new_icon/up.png' />","index.do?financeId=1"];
		 flist[4]=["消费借款-3个月-10%(年化率)",10000.00,11000.00,0.00,"2015-6-1","回款中","2015-6-1","<img src='../../images/new_icon/up.png' />","index.do?financeId=1"];
		 flist[5]=["消费借款-3个月-10%(年化率)",10000.00,11000.00,0.00,"2015-6-1","回款中","2015-6-1","<img src='../../images/new_icon/up.png' />","index.do?financeId=1"];
		 flist[6]=["消费借款-3个月-10%(年化率)",10000.00,11000.00,0.00,"2015-6-1","回款中","2015-6-1","<img src='../../images/new_icon/up.png' />","index.do?financeId=1"];
		 flist[7]=["消费借款-3个月-10%(年化率)",10000.00,11000.00,0.00,"2015-6-1","回款中","2015-6-1","<img src='../../images/new_icon/up.png' />","index.do?financeId=1"];
	
		 ylist[0]=["XTB201501","2015-08-01",2000.00,200.00,100.00,50.00,2200.00,123400.00,"已回款","index.do?financeId=1"];
		 ylist[1]=["XTB201501","2015-08-01",2000.00,200.00,100.00,50.00,2200.00,123400.00,"已回款","index.do?financeId=1"];
		 ylist[2]=["XTB201501","2015-08-01",2000.00,200.00,100.00,50.00,2200.00,123400.00,"已回款","index.do?financeId=1"];
		 ylist[3]=["XTB201501","2015-08-01",2000.00,200.00,100.00,50.00,2200.00,123400.00,"已回款","index.do?financeId=1"];
		 ylist[4]=["XTB201501","2015-08-01",2000.00,200.00,100.00,50.00,2200.00,123400.00,"已回款","index.do?financeId=1"];
		 ylist[5]=["XTB201501","2015-08-01",2000.00,200.00,100.00,50.00,2200.00,123400.00,"已回款","index.do?financeId=1"];
		 ylist[6]=["XTB201501","2015-08-01",2000.00,200.00,100.00,50.00,2200.00,123400.00,"已回款","index.do?financeId=1"];
		 ylist[7]=["XTB201501","2015-08-01",2000.00,200.00,100.00,50.00,2200.00,123400.00,"已回款","index.do?financeId=1"];
		 
		searchHtml(3,rows,flist,ylist);
	/*
	
	var pamrt= "";  
	pamrt = pamrt+"&prdCat=1" ; 
	$.post('index.do?' +pamrt,{"page":page,"rows":rows },function(result){
			var myrows = result.rows;// 传值条数
			var total = result.total; //总条数
			var thtml = ''; // 页面显示
			
	 },'json'); 
	*/
	
}

function searchHtml(page,rows,flist,ylist){
	var thtml="";
	/*
	var pamrt= "";  
	pamrt = pamrt+"&prdCat=1" ; 
	$.post('index.do?' +pamrt,{"page":page,"rows":rows },function(result){
			var myrows = result.rows;// 传值条数
			var total = result.total; //总条数
			var thtml = ''; // 页面显示
			
	 },'json'); 
	*/
			for(var i=0;i<parseInt(rows);i++){ 
				thtml +='<ul class="pre_ulbig">';
					if(i % 2==0)
					thtml +='<li class="user_cjzq_border">';
					else
					thtml +='<li class="user_cjzq_border">';
						thtml +='<ul class="pre_ulsmall">';
							thtml +='<li class="pre_ul_lismall_170">'+flist[i][0]+'</li>';
							thtml +='<li class="pre_ul_lismall_80">'+flist[i][1]+'</li>';
							thtml +='<li>'+flist[i][2]+'</li>';
							thtml +='<li>'+flist[i][3]+'</li>';
							thtml +='<li>'+flist[i][4]+'</li>';
							thtml +='<li>'+flist[i][5]+'</li>';
							thtml +='<li>'+flist[i][6]+'</li>';
							thtml +='<li class="pre_ul_lismall_50"><img src="../../images/new_icon/up.png" /></li>';
						thtml +='</ul>';
					thtml +='</li>';
					
					
						thtml +='<div class="div_show display-none" >';
							thtml+='<div class="div_show_top">';
							thtml+='<dl class="dl_box1">';
							thtml+='<dd>借款标题：消费借款-3个月-10%(年化率)</dd>';
							thtml+='<dd>出借金额：510.00元</dd></dl><dl class="dl_box2"><dd>借款时长：3个月</dd><dd>预期收益：35.34元</dd></dl><dl class="dl_box3"><dd>年化利率：10%+1%</dd><dd>还款方式：等额本息</dd></dl><p><a href=""><img src="../../images/new_icon/xieyi_icon.png" />协议下载</a></p></div>';
							thtml +='<div class="div_show_bot">';
							thtml +='<ul class="div_show_bot_ultop"><li>回款期</li><li>回款日期</li><li>应回本金(元)</li><li>应回利息(元)</li><li>罚息(元)</li><li>应缴费用(元)</li><li class="div_show_bot_ul2_120">应回款总额(元)</li><li class="div_show_bot_ul2_120">已回款总额(元)</li> <li class="div_show_bot_ul2_60">状态</li></ul>';
							thtml +='<ul class="div_show_bot_ul">';
								for(j=0; j<parseInt(rows); j++){
									
									
									thtml +='<li class="div_show_bot_ul_li">';
										thtml +='<ul class="div_show_bot_ul2">';
										thtml +='<li>'+ylist[j][0]+'</li>';
										thtml +='<li>'+ylist[j][1]+'</li>';
										thtml +='<li>'+ylist[j][2]+'</li>';
										thtml +='<li>'+ylist[j][3]+'</li>';
										thtml +='<li>'+ylist[j][4]+'</li>';
										thtml +='<li>'+ylist[j][5]+'</li>';
										thtml +='<li class="div_show_bot_ul2_120">'+ylist[j][6]+'</li>';
										thtml +='<li class="div_show_bot_ul2_120">'+ylist[j][7]+'</li>';
										thtml +='<li class="div_show_bot_ul2_60">'+ylist[j][8]+'</li>';
										thtml +='</ul>';
									thtml +='</li>';
								}
								
								thtml +='</ul>';
							thtml +='</div>';
						thtml +='<p><a href="">查看借款详情</a></p>';
						thtml +='</div>';
						thtml +='</div>';
				thtml +='</ul>';
			}
			$("#pre_ul_big").html(thtml);
			
}
//出借债权明细 pre_ul_big end

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	