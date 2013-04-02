define("jquery-line",["jquery"], function($){
    $.fn.line = function(position) {
        $(this).append($("<div></div>").css({
            "position" : "absolute",
            "border-top" : "1px solid red",
            "width" : "100%",
            "top" : ((position < 0) ? 0 : position) + "px",
        }));
        return this;
    };
});