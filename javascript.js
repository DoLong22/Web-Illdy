$(document).ready(function () {

    $(".menu a").click(function (e) { 
        e.preventDefault();
        var id_ele =  $(this).attr("href");
        var pos = $(id_ele).offset().top;
        
        $("html, body").animate({
            scrollTop:pos
        },1000)
    });
    
    
    $("#btn-menu").click(function(e){
        let open_remove = $(".top-header ul").attr("class");
        if(open_remove !== "show-menu"){
            $(".top-header ul").addClass("show-menu");
        }
        else{
            $(".top-header ul").removeClass("show-menu");
        }
    });


});
