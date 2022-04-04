$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })

    // toggle-btn activate
    $('.toggle-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.toggle-btn i').toggleClass("active");
    });
});