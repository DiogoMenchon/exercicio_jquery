$(document).ready(function() {
    $("#task-form").submit(function(event) {
        event.preventDefault();
        const taskText = $("#task-input").val();
        if (taskText.trim() !== "") {
            const listItem = $("<li>").text(taskText);
            $("#task-list").append(listItem);
            $("#task-input").val(""); // 
        }
    });


    $("#task-list").on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});