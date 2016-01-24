//Check off specific todos by clicking

$("li").click(function(){

	//toggle class on or off on click
	$(this).toggleClass("completed");
	
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Listen for Enter key in input field and append a new li to the unordered list
$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

//Fade the input text box in or out when clicking the + sign
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});