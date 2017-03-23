function navbar(){
    $("#menubar").click(function(){
        $(this).find('i').toggleClass("fa-bars fa-times");
        $("#full-menu").toggleClass("active", 600, "easeInOutCirc");
    });
};
