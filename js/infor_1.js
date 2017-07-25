		
		
//多选框效果
	function selectAll(checkbox) {
		$('input[class=a]').prop('checked', $(checkbox).prop('checked'));
		if(!checkbox.checked){
			$('input[class=a]').eq(0).prop('checked',true);
		}
	};
	function selectAll3(checkbox) {
		$('input[class=c]').prop('checked', $(checkbox).prop('checked'));
		if(!checkbox.checked){
			$('input[class=c]').eq(0).prop('checked',true);
		}
	};
	function selectAll4(checkbox) {
		$('input[class=e]').prop('checked', $(checkbox).prop('checked'));
		if(!checkbox.checked){
			$('input[class=e]').eq(0).prop('checked',true);
		}
	};
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
		$('.xuan1 .a').click(function(){
			if(!$(this).is(":checked")){
				$(".xuan1").find("input[type=checkbox]").eq(0).prop("checked",false);
			}
			if(!checkp($('.xuan1 .a'))){
				$(this).prop("checked",true);
			}
		});
		$('.xuan3 .c').click(function(){
			if(!$(this).is(":checked")){
				$(".xuan3").find("input[type=checkbox]").eq(0).prop("checked",false);
			}
			if(!checkp($('.xuan3 .c'))){
				$(this).prop("checked",true);
			}
		});
		$('.xuan4 .e').click(function(){
			if(!$(this).is(":checked")){
				$(".xuan4").find("input[type=checkbox]").eq(0).prop("checked",false);
			}
			if(!checkp($('.xuan4 .e'))){
				$(this).prop("checked",true);
			}
		});
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
	});
//平台消息未读变已读
	$(function() {
		$(document).on("click",".infor_ullih_300",function(){
		//$(".infor_ullih_300").click(function(){
			$(this).next().text("已读").removeClass("pre_red");
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
			 
		thtml +='<div class="pre_zqlist">';
		thtml +='<ul class="infor_ul"><li class="infor_ulli_100">类型</li><li class="infor_ulli_300">标题</li><li class="infor_ulli_80">状态</li><li class="infor_ulli_100">发送人</li><li class="infor_ulli_250">日期</li></ul>';
		
		thtml +='<ul class="infor_ulh_70">';
		for(var j=0;j<parseInt(rows);j++){
			if(j % 2==0)
			thtml +='<li class="infor_ul_li70">'
			else
			thtml +='<li class="infor_ul_li70">'	
			thtml +='<ul><li class="infor_ullih_100">平台公告</li><li class="infor_ullih_300"><a href="javascript:;" data-mask="mask"  data-id="pingt_ggao" >新版投资正式上线，全新用户体验等你探索.....</a></li><li class="infor_ullih_80 pre_red" id="weidu">未读</li><li class="infor_ullih_100">平台服务号</li><li class="infor_ullih_250">2015-05-26 12:35:20</li></ul>'	
			thtml +='</li>';
		}
		thtml +='</ul>';
		thtml +='</div>';
		
		
		$("#zqlist").html(thtml);
			
}
//订单查询 zqlist end
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	