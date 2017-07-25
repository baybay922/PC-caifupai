
//多选框效果
	function selectAllw(checkbox) {
		$('input[class=w]').prop('checked', $(checkbox).prop('checked'));
		if(!checkbox.checked){
			$('input[class=w]').eq(0).prop('checked',true);
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
		$('.xuan .w').click(function(){
			if(!$(this).is(":checked")){
				$(".xuan").find("input[type=checkbox]").eq(0).prop("checked",false);
			}
			if(!checkp($('.xuan .w'))){
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

//订单查询
$(document).ready(function() {
	searchHtml(5,5);
 })
function searchHtml(page,rows){
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
			 
		thtml +='<ul class="fund_listtop"><li class="fund_li100">日期</li><li class="fund_li80">流水类型</li><li class="fund_li100">费用类型</li><li class="fund_li110">交易金额(元)</li><li class="fund_li110">冻结/解冻(元)</li><li class="fund_li110">账户余额(元)</li><li class="fund_li200">备注</li></ul>';
		
		thtml +='<ul class="fund_listmain">';
		for(var j=0;j<parseInt(rows);j++){
			if(j % 2==0)
			thtml +='<li class="fund_listmain_li">'
			else
			thtml +='<li class="fund_listmain_li">'	
			thtml +='<ul><li class="fund_listmain_li100"><span>2015-05-26 12:35:20</span></li><li class="fund_listmain_li80">支出</li><li class="fund_listmain_li100">投标出资</li><li class="fund_listmain_li110 colorred">-10,000.00</li><li class="fund_listmain_li110 colorred">0.00</li><li class="fund_listmain_li110">0.00</li><li class="fund_listmain_li200"><span>因参与【10月份平台活动返现奖励】活动，收到平台奖励20,010元</span></li></ul>'	
			thtml +='</li>';
		}
		thtml +='</ul>';
		
		
		$("#zjlist").html(thtml);
			
}
//订单查询 zjlist end