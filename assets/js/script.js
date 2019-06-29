//Mark the item as completed.
//.on(..) will not add any event listners to the newly added elements
//("parent_existing_element").on("click", "new_added_elements");
$("ul").on("click", "li",function() {
    $(this).toggleClass("completed");
});
// On click of delete remove the parent element.
$("ul").on("click", "li>span",function(event){
    //console.log("YOU HAVE CLICKED THIS SPAN");

    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});
//Add list when enter is pressed in the input box.
$("input[type=text]").on("keypress", function(event){
    if(event.which === 13){
        let addText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> "+ addText +"</li>");
    }
});