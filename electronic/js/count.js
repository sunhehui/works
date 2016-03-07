$(".sub").click(function(){
	var value = $(this).siblings("input").val();
	var value1 =value*1-1;
	if(value1<=0){
		$(this).siblings("input").val(0);
	}else{
		$(this).siblings("input").val(value1);
	}   
})
$(".add").click(function(){
	var value = $(this).siblings("input").val();
    var value1 =value*1+1
    $(this).siblings("input").val(value1);
})