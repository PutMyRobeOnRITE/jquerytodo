//Check off specific todos by clicking

$("li").click(function(){

	//toggle class on or off on click
	$(this).toggleClass("completed");
	
});