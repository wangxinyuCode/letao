define(['jquery'],function($){
	 $('form').on('submit',function(){
            var dataForm = $(this).serialize();
            $.ajax({
            url:'/api/employee/employeeLogin',
            type:'post',
            data:dataForm,
            success:function(info){
                if (info.error) {
                    return alert(info.message);
                }
                location.href = '/';
            }
                    })

            return false;
        })
})