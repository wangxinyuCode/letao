define(['jquery'],function($){
    $.ajax({
        url:'/api/employee/checkRootLogin',
        type:'get',
       
        success:function(info){
            if (info.error) {
                location.href = '/login.html'
            }
        }
       });
    
	
     $('.ext').on('click',function(){
            $.ajax({
                url:'/api/employee/employeeLogout',
                type:'get',
                
                success:function(info){
                    if (info.success) {
                        location.href = '/login.html'
                    }

                }
            })
            return false;
        });
})