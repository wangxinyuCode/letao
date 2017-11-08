define(['jquery','template','./utils'],function($,template){
	// var size = 2;
	// 数据库和页面的对接
	var reg =/\?[a-z]+=(\d+)/;
	
	var search = location.search || '';
	var page = reg.exec(search) && reg.exec(search)[1];
	page = page || 1;
	
	var pageSize = 2;
	console.log(reg.exec(search));
	$.ajax({
		// var page = 100;
		// var pageSize = 2;
		/*每页多少条 */
		// info.total/size 总共多少页；
		url:' /api/product/queryProductDetailList',
		type:'get',
		data:{page:page,pageSize:pageSize},
		success:function(info){
		
			// info.total 是总页数；
			var total = info.total;
			var pageLen = total/pageSize;
			var len = template('page',{
				pageLen:pageLen,
				page:page
			});
			$('.pagination').html(len);
			// console.log(pageLen);
			var html = template('tpl',info);
			$('.goods').html(html);
		}
	})
})