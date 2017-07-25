 // JavaScript Document
 
 $(document).ready(function(e) {
    dataHtml(5);
	
	//点击查询按钮
	$("#select").click(function(){
		dataHtml(4)
	});
});

//输出
function dataHtml(rows){
	var thtml="";
	/*
	
	var state=$("#zindex").find("dt").attr("id");//代金券状态
	var date1=$("#date1").html();//时间一
	var date2=$("#date1").html();//时间二
	var pamrt= "";  
	pamrt = pamrt+"&prdCat=1" ; 
	$.post('index.do?' +pamrt,{"page":page,"rows":rows },function(result){
			var myrows = result.rows;// 传值条数
			var total = result.total; //总条数
			var thtml = ''; // 页面显示
			
	 },'json'); 
	*/
			thtml +='<tr class="titlep">';
			thtml +='<td style="width:100px;">代金券</td>';
			thtml +='<td style="width:100px;">面额</td>';
			thtml +='<td style="width:200px;">获取时间</td>';
			thtml +='<td style="width:130px;">到期时间</td>';
			thtml +='<td style="width:100px;">状态</td>';
			thtml +='<td style="width:200px;">备注</td>';
			thtml +='</tr>';
			
			for(var i=0;i<parseInt(rows);i++){ 
				if(i % 2 !=0)
					thtml +='<tr class="writep">';
				else 
					thtml +='<tr class="writep">';
					thtml +='<td>200元</td>';
					thtml +='<td>200元</td>';
					thtml +='<td>2015-09-12 16:18:32</td>';
					thtml +='<td>2015-09-12</td>';
					thtml +='<td class="help-tip">不可用<p>This is the inline help tip! You can explain to your users what this section of your web app is about.</p></td>';
					thtml +='<td>满1000元使用</td>';
					thtml +='</tr>';
			} 
			
			$('.tablep').html(thtml);
			
}