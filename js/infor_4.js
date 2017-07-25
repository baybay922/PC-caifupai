
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
			 
		thtml +='<div class="in_friends_bot">';
		thtml +='<h2>我邀请注册成功的用户</h2>';
		thtml +='<ul class="user_success_title"><li>用户名</li><li>注册时间</li><li>邀请方式</li><li>平台奖励</li></ul>';
		
		thtml +='<ul class="user_success_con">';
		for(var j=0;j<parseInt(rows);j++){
			if(j % 2==0)
			thtml +='<li class="friend_ul_li">'
			else
			thtml +='<li class="friend_ul_li">'	
			thtml +='<ul><li>shih***</li><li>2015-05-26 12:35:20</li><li>邮件邀请</li><li>邀请好友奖励50元代金券</li></ul>'	
			thtml +='</li>';
		}
		thtml +='</ul>';
		
		
		$("#yqlist").html(thtml);
			
}
//订单查询 yqlist end