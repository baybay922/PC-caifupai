
 $(document).ready(function() {
	financeHtml(5,jhlist);
	
 })

//声明出借明细列表
var jhlist=new Array();
//查询出借明细
function financeHtml(rows,flist){
	console.log("1213")
	/*出借明细列表中各参数
	for(var i=0; i<=parseInt(rows); i++){
		 flist[i]=["00001","消费借款-3个月-10%(年化率)","6个月","10%",10000.00,200.00,6,100.00,3900.00,"进行中","index.do?financeId=1";
		 //1.序号，2.借款标题，3.借款时长，4.借款利率，5.出借金额(元)，6.预期收益(元)，7.已回款金额(元)，8.待回款金额(元)，9.状态
	 
	}*/
		
		 flist[0]=["00001","消费借款-3个月-10%(年化率)","6","10",10000.00,200.00,6100.00,3900.00,"进行中","index.do?financeId=1"];
		 flist[1]=["00001","消费借款-3个月-10%(年化率)","6","10",10000.00,200.00,6100.00,3900.00,"进行中","index.do?financeId=1"];
		 flist[2]=["00001","消费借款-3个月-10%(年化率)","6","10",10000.00,200.00,6100.00,3900.00,"进行中","index.do?financeId=1"];
		 flist[3]=["00001","消费借款-3个月-10%(年化率)","6","10",10000.00,200.00,6100.00,3900.00,"进行中","index.do?financeId=1"];
		 flist[4]=["00001","消费借款-3个月-10%(年化率)","6","10",10000.00,200.00,6100.00,3900.00,"进行中","index.do?financeId=1"];
		 flist[5]=["00001","消费借款-3个月-10%(年化率)","6","10",10000.00,200.00,6100.00,3900.00,"进行中","index.do?financeId=1"];
		 flist[6]=["00001","消费借款-3个月-10%(年化率)","6","10",10000.00,200.00,6100.00,3900.00,"进行中","index.do?financeId=1"];
		
	
	sysH(rows,flist);
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
function sysH(rows,flist){
	console.log(rows+"数组长度")
	var thtml="";
	if(rows!=0){
			for(var i=0;i<parseInt(rows);i++){ 
				
				if(i % 2==0)
				thtml +='<tr>';
				else
				thtml +='<tr class="zh_xqbot_table2_hui">';
				thtml +='<td>'+flist[i][0]+'</td>';
				thtml +='<td class="zh_xqbot_table_200">'+flist[i][1]+'</td>';
				thtml +='<td>'+flist[i][2]+'个月</td>';
				thtml +='<td>'+flist[i][3]+'%</td>';
				thtml +='<td>'+flist[i][4]+'</td>';
				thtml +='<td>'+flist[i][5]+'</td>';
				thtml +='<td>'+flist[i][6]+'</td>';
				thtml +='<td>'+flist[i][7]+'</td>';
				thtml +='<td>'+flist[i][8]+'</td>';
				thtml +='</tr>';
			}
		
	}else{
				thtml +=' ';
			
		
	}
			$('#pre_tabox2').html(thtml);
	
}
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
			
			for(var i=0;i<parseInt(rows);i++){ 
				if(i % 2==0)
				thtml +='<tr>';
				else
				thtml +='<tr class="zh_xqbot_table2_hui">';
				thtml +='<td>'+flist[i][0]+'</td>';
				thtml +='<td class="zh_xqbot_table_200">'+flist[i][1]+'</td>';
				thtml +='<td>'+flist[i][2]+'个月</td>';
				thtml +='<td>'+flist[i][3]+'%</td>';
				thtml +='<td>'+flist[i][4]+'</td>';
				thtml +='<td>'+flist[i][5]+'</td>';
				thtml +='<td>'+flist[i][6]+'</td>';
				thtml +='<td>'+flist[i][7]+'</td>';
				thtml +='<td>'+flist[i][8]+'</td>';
				thtml +='</tr>';
			} 
			
			
}

































