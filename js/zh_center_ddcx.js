//订单查询
$(document).ready(function() {
	searchHtml(1,4);
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
			 
		thtml +='<div class="pre_zqlist_chaxun">';
		thtml +='<table class="pre_tabbox_chaxun" style="width:830px;height:40px!important;"><tr class="pre_tabboxtitle_chaxun" ><td class="pre_tabbox1_150">日期</td><td class="pre_tabbox1_150">订单号</td><td class="pre_tabbox1_200">购买债权/产品</td><td class="pre_tabbox1_80">订单金额(元)</td><td class="pre_tabbox1_70">债权/理财</td><td class="pre_tabbox1_80">订单状态</td><td class="pre_tabbox1_100">操作</td></tr></table>';
		
		thtml +='<table class="pre_tabbox2_chaxun">';
		for(var j=0;j<parseInt(rows);j++){
			
			thtml +='<tr><td class="pre_tabbox_150">2015-05-26 12:35:20</td>'
			thtml +='<td class="pre_tabbox_150">DDH2014325928392</td>'
			thtml +='<td  class="pre_tabbox_200"><p class="" style="width:200px;">消费借款消费借款消费借款-3个月-10%(年化率)</p></td>'
			thtml +='<td class="pre_tabbox_80">10,000,00</td><td class="pre_tabbox_70">投标中</td>'
			thtml +='<td class="pre_tabbox_80">未支付</td>'
			thtml +='<td class="pre_tabbox_100"><span class="pre_red"><a href="">支付</a></span><span class="pre_blue"><a href="">查看</a></span></td>'
			thtml +='</tr>'	
			
		}
		thtml +='</table>';
		thtml +='</div>';
		
		
		$("#zqlist_chaxun").html(thtml);
			
}
//订单查询 zqlist end
	
































