$(document).ready(function () {

    // navBar changing color scrolling function
    $(window).scroll(function(){
        if (($(this).scrollTop() > 50) && ($(window).width() > 1000)) {
            $('.navbar').addClass("bg-white")
            $('.navbar-nav .nav-link').css('color', 'black');
        } else if (($(this).scrollTop() > 250) && ($(window).width() < 1000)) {
            $('.navbar-nav .nav-link').css('color', 'black');
        } else {
            $('.navbar').removeClass("bg-white")
            $('.navbar-nav .nav-link').css('color', 'white');
        }
    })

    // date changing function
    var currentYear = new Date().getFullYear();
    $('#date').html(currentYear);

    // hamburger menu function
    $(window).on('resize load', function () {
        if($(window).width() < 1000) {
            $('#firstNav').addClass("d-none")
            $('#secondNav').removeClass("d-none")
        } else {
            $('#secondNav').addClass("d-none")
            $('#firstNav').removeClass("d-none")
        }
    });


        // Collapse menu and scroll on nav-item click
        $('#navbarToggleExternalContent .nav-link').on('click', function () {
            var target = $(this).attr('href');
            $('#navbarToggleExternalContent').collapse('hide');
        });



});