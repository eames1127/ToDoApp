
$("#addTask").on('click', function(){
    var task = $("#taskDetail").val();
    if(task !== "")
    {
        $("#existingItems").append(`<li class = "todoItem"> ${task} <input type = "checkbox"></li>`);
    }
});

$("#clearTasks").on('click', function(){
    $("#completedItems").empty();
});

$(document).on('click','li',function(){
    var state = $(this).children()[0].checked;

    if(!state){
        $(this).children()[0].checked = true;
        $("#completedItems").append(this);
        $(this).removeClass("todoItem");
        $(this).addClass("item");
    }
    else{
        $(this).children()[0].checked = false
        $("#existingItems").append(this);
        $(this).removeClass("item");
        $(this).addClass("todoItem");
    }
});