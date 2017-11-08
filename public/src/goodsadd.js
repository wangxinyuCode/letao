define(['jquery','./utils'],function($){

	$('form').on('submit',function(){
		var formData = $(this).serialize();
		console.log(formData);
		$.ajax({
			url:'/api/product/addProduct',
			type:'post',
			data:formData,
			success:function(info){
				console.log(info);
			}
		})
		return false;
	})
})