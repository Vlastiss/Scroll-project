$(document).ready(function () {

    // navBar changing color scrolling function
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("bg-white")
            $('.navbar-nav .nav-link').css('color', 'black');
        } else {
            $('.navbar').removeClass("bg-white")
            $('.navbar-nav .nav-link').css('color', 'white');
        }
    })

    // date changing function
    var currentYear = new Date().getFullYear();
    $('#date').html(currentYear);


});