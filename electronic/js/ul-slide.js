$(".mainlist>li").hover(function(){
	$(this).find(".sidelist").slideDown(800);
},function(){
	$(this).find(".sidelist").stop();
	$(this).find(".sidelist").slideUp(800);
});