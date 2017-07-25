// JavaScript Document
 $(document).ready(function() { 

//前端查询 数据（出借列表 
	//页面加载时触发
	searchHtml(1,10); 
	
	//理财产品查询
	//点击查询按钮  排序
	$("#selectbtn").click(function(){
		
		var ftype=parseInt($("#Ftype dt").attr("data-id"));    //付息类型
		var cloperiod=parseInt($("#cloperiod dt").attr("data-id"));    //封闭期
		var expectpay=parseInt($("#expectpay dt").attr("data-id"));	   //预期收益
		financeH(ftype,cloperiod,expectpay,3);
	});
	
	//排序的箭头
	$(".xiala").click(function(){
		var lengthF=$(this).css("background-position").length;
		if($(this).css("background-position").substring(lengthF-4,lengthF-3)=="5"){
			
			if($(this).hasClass("xiala6")){

				$(this).removeClass("xiala6").removeClass("xiala7");
				$(this).attr("data-value",0);
			}else{

				$(this).addClass("xiala7").removeClass("xiala6");
				$(this).attr("data-value",1);
				//预期收益
				//预期收益
				if($(this).attr("data-id")=="yqsort"){
					if(fclisttwo.length==0){
						Array.prototype.push.apply(fclisttwo,xflist);
					}
					fclisttwo.sort(function(x,y){return x[6]-y[6]});
					sysH(fclisttwo.length,fclisttwo);
				}
				//封闭期
				if($(this).attr("data-id")=="fbsort"){
					
					if(fclisttwo.length==0){
					Array.prototype.push.apply(fclisttwo,xflist);
					}
					fclisttwo.sort(function(x,y){return x[2]-y[2]});
					sysH(fclisttwo.length,fclisttwo);
				}
			}
		}else{
			
				$(this).addClass("xiala6").removeClass("xiala7");
				$(this).attr("data-value",2);
				//预期收益
				if($(this).attr("data-id")=="yqsort"){
					
					if(fclisttwo.length==0){
					Array.prototype.push.apply(fclisttwo,xflist);
					}
					fclisttwo.sort(function(x,y){return y[6]-x[6]});
					sysH(fclisttwo.length,fclisttwo);
				}
				//封闭期
				if($(this).attr("data-id")=="fbsort"){
					
					if(fclisttwo.length==0){
					Array.prototype.push.apply(fclisttwo,xflist);
					}
					fclisttwo.sort(function(x,y){return y[2]-x[2]});
					sysH(fclisttwo.length,fclisttwo);
				}
		}
	});
	financeHtml(1,xflist);

	function sortFL(){
		var ys=$("[data-id=sort]").attr("data-value");
		var fb=$("[data-id=sort]").attr("data-value");
	}
});  

function financeH(ftype,cloperiod,expectpay,rows){
	var fslist1=new Array(),f1=0;
	var fslist2=new Array(),f2=0;
	var fslist3=new Array(),f3=0;
	//判断付息类型
	if(ftype!=0){
		for(var i=0; i<parseInt(rows); i++){
			if(xflist[i][5]==ftype){
				fslist1[f1]=[];
				Array.prototype.push.apply(fslist1[f1],xflist[i]);
				//fslist1[f1].concat(xflist[i]);//将公共数组的值赋予给将要显示的数组
				
				f1++;
			}
		}
	}else{
		
		for(var i=0; i<parseInt(rows); i++){
			
				fslist1[i]=[];
				Array.prototype.push.apply(fslist1[i],xflist[i]);
				//fslist1[f1].concat(xflist[i]);//将公共数组的值赋予给将要显示的
				
		}
	}
	console.log("fslist1数组长度="+fslist1.length);
	//判断封闭期
	if(cloperiod!=0){
		for(var i=0; i<parseInt(fslist1.length); i++){
			if(fslist1[i][2]==cloperiod){
				fslist2[f2]=[];
				Array.prototype.push.apply(fslist2[f2],fslist1[i]);
				//fslist1[f1].concat(xflist[i]);//将公共数组的值赋予给将要显示的数
				f2++;
			}
		}
	}else{
		
		for(var i=0; i<parseInt(fslist1.length); i++){
			
				fslist2[i]=[];
				Array.prototype.push.apply(fslist2[i],fslist1[i]);
				//fslist1[f1].concat(xflist[i]);//将公共数组的值赋予给将要显示的
				
		}
	}
	console.log("fslist2数组长度="+fslist2.length);
	//判断预期收益
	if(expectpay!=0){
		for(var i=0; i<parseInt(fslist2.length); i++){
			console.log("fslist2[i][6]="+fslist2[i][6]);
			console.log("expectpay"+expectpay);
			if(fslist2[i][6]==expectpay){
				fslist3[f3]=[];
				Array.prototype.push.apply(fslist3[f3],fslist2[i]);
				//fslist1[f1].concat(xflist[i]);//将公共数组的值赋予给将要显示的数组
				f3++;
			}
		}
	}else{
		
		for(var i=0; i<parseInt(fslist2.length); i++){
			
				fslist3[i]=[];
				Array.prototype.push.apply(fslist3[i],fslist2[i]);
				//fslist1[f1].concat(xflist[i]);//将公共数组的值赋予给将要显示的
				
		}
	}
	//数组排序
	fclisttwo=fslist3.slice();
	console.log("fslist3数组长度="+fslist3.length);
	sysH(fslist3.length,fslist3);
	
}

//声明理财产品列表
var xflist=new Array();
var fclisttwo=new Array();
//理财产品查询
function financeHtml(rows,flist){

	/*声明理财产品列表中各参数
	for(var i=0; i<=parseInt(rows); i++){
		
		 flist[i]=["新手引导","12","三","XTB20150001",1000000,1,15,"index.do?financeId=1",'是陆金所网站平台推出的个人投融资服务。陆金所向投资方（投资人）和融资方，帮助双方快捷方便地完成投资和投和方'];
		 //1.标题，2.年化利率，3.封闭期，4.发行期数，5.余额，6.周期付息，7.预期收益，8.产品详情链接，9.详情文字
	 
	}*/
	
		 flist[0]=["新手引引导引志导","8",3,"XTB20150001",1000000,3,15,"index.do?financeId=1",'是陆金所网站平台推出的个人投融资服务。陆金所向投资方（投资人）和融资方，帮助双方快捷方便地完成投资和投和方'];
		 flist[1]=["新手引导","12",6,"XTB20150001",2000000,3,12,"index.do?financeId=1",'是陆金所网站平台推出的个人投融资服务。陆金所向投资方（投资人）和融资方，帮助双方快捷方便地完成投资和投和方'];
		 flist[2]=["新手引导","9",12,"XTB20150001",300000,2,9,"index.do?financeId=1",'是陆金所网站平台推出的个人投融资服务。陆金所向投资方（投资人）和融资方，帮助双方快捷方便地完成投资和投和方'];
		 xflist=flist;
	
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
				if(i==0){
					thtml +='<div class="flcontext flcontexthover clearFloat">';
	
				}else{
					thtml +=' <div class="flcontext clearFloat">';
	
				}
				thtml +='<div class="flleft">';
				thtml +='<div class="clearFloat">';
				thtml +='<span class="title " ><a class="cut_str" href="#">'+flist[i][0]+' </a></span>';
				thtml +='<span class="nian"><img src="../images/fd_27.png" /><label>年化利率<em class="big lilv">'+flist[i][1]+'<small>%</small></em></label></span>';
				thtml +='<span class="feng"><img src="../images/fd_32.png"><label>封闭期<br /><i>'+flist[i][2]+'</i>个月</label></span>';
				thtml +='<span class="faxing"><img src="../images/fd_29.png"><label>发行期数<br /><i>'+flist[i][3]+'</i></label></span>';
				thtml +='</div>';
				thtml +='<p class="cut_str mt-20">'+flist[i][8]+'</p>';
				thtml +='</div>';
				thtml +='<div class="flright">';
				thtml +='<p>本期剩余金额'+fmoney(flist[i][4],2)+'元</p> ';
				thtml +='<div class="input-group">';
				thtml +='<input type="hidden" class="borrowday" data-value="'+flist[i][5]+'" /><!-- 周期付息 -->';
				thtml +='<input type="hidden" class="borclosep" data-id="closePeriod" data-value="'+flist[i][3]+'" /><!-- 封闭期 -->';
				thtml +='<input type="hidden" data-id="periodPay" data-value="'+flist[i][6]+'" /><!-- 预期收益 % -->';
				thtml +='<label>';
				thtml +='<input type="text" placeholder="输入理财金额" class="ipt-input"/><i class="yuan1">元</i>';
				thtml +='</label>';
				thtml +='<em></em>';
				thtml +='</div>';
				thtml +='<div class="lookdetail clearFloat">';
				thtml +='<a href="'+flist[i][7]+'" class="ablue">查看产品详情</a>';
				thtml +='<button type="button" data-id="licai" class="btn btn-error flbtn mt-0"><img src="../images/images/icon_03.png" class=" mt-10 mr-5" />去支付</button>';
				thtml +=' </div></div></div>';
			
				
			} 
		
	}else{
				thtml +=' ';
			
		
	}
			$('#financeProject').html(thtml);
		bottomB();
	
}
//出借列表查询
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
			
				thtml +='<ul class="dltitleul dlcontext clearFloat">';
				thtml +='<li class="sp1 "><em class="esp">奖1%</em><span class="titleicon"></span><a class="cur_str" href="financeDetail3.html">企业周转借款（业周转借款（业周转借款（业周转借款（业周转借款（第一期）</a></li>';
				thtml +='<li class="sp2 con">10%+2%</li>';
				thtml +='<li class="sp3">3个月</li>';
				thtml +='<li class="sp4">20,000元</li>';
				thtml +='<li class="sp5"><i class="xy1"></i><i class="xy1"></i><i class="xy1"></i><i class="xy2"></i></li>';
				thtml +='<li class="sp6">';
				thtml +='<div class="pro2d"><em class="epro">50%</em>';
				thtml +='<div class="pro2" style="width:50%"></div>';
				thtml +='</div>';
				thtml +='</li>';
				thtml +='';
				thtml +='<li class="sp7"><a href="cjDetails3.html" class="timebtn btn" >立即出借</a></li>';
				thtml +='</ul>';
			for(var i=0;i<parseInt(rows);i++){ 
				thtml +='<ul class="dltitleul dlcontext clearFloat">';
				thtml +='<li class="sp1 "><span class="titleicon"></span><a class="cur_str" href="financeDetail3.html">企业周转借款（业周转借款（业周转借款（业周转借款（业周转借款（第一期）</a></li>';
				thtml +='<li class="sp2 con">10%+2%</li>';
				thtml +='<li class="sp3">3个月</li>';
				thtml +='<li class="sp4">20,000元</li>';
				thtml +='<li class="sp5"><i class="xy1"></i><i class="xy1"></i><i class="xy1"></i><i class="xy2"></i></li>';
				thtml +='<li class="sp6">';
				thtml +='<div class="pro2d"><em class="epro">50%</em>';
				thtml +='<div class="pro2" style="width:50%"></div>';
				thtml +='</div>';
				thtml +='</li>';
				thtml +='';
				thtml +='<li class="sp7"><a href="cjDetails3.html" class="timebtn btn" >立即出借</a></li>';
				thtml +='</ul>';
			} 
			// btn-deer-gray
			$('.flcontext2').html(thtml);
	bottomB();

}	//总在最底部
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
			liulanqi =  document.documentElement.clientHeight ;
			
		}else{
			
			banben = document.body.clientHeight;
			liulanqi =  document.documentElement.clientHeight ;
			
		}
		
		if($(".footer").html()===undefined){
			
		}else{
			if(banben>=liulanqi ){
				
				$(".footer").css({"position":"inherit"});
			}else{
				
				$(".footer").css({"position":"absolute","bottom":"0px","width":"100%"});
				
			}
		}
		$(".zhezhao1,.zhezhao,.zhezhao5,.zhezhao2").css("height",document.body.clientHeight);
	}

