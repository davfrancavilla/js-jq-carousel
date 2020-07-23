$( document ).ready(function() {

    $('.next').click(function(){
        nextImage();
    });

    $('.prev').click(function(){
        prevImage();
    });

    $('.nav i').click(function(){
        var circleIndex = $(this).index();

        var activeImage = $('.images img.active');
        var activeCircle = $('.nav i.active');

        activeImage.removeClass('active');
        activeCircle.removeClass('active');


        selectedImage = $('img').eq(circleIndex);
        selectedImage.addClass('active');
        $(this).addClass('active');
    });



    function nextImage(){
        var activeImage = $('.images img.active');
        var activeCircle = $('.nav i.active');

        activeImage.removeClass('active');
        activeCircle.removeClass('active');

        if (activeImage.hasClass('last')) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            activeImage.next().addClass('active');
            activeCircle.next().addClass('active');
        }
    };

    function prevImage(){
        var activeImage = $('.images img.active');
        var activeCircle = $('.nav i.active');

        activeImage.removeClass('active');
        activeCircle.removeClass('active');

        if (activeImage.hasClass('first')) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            activeImage.prev().addClass('active');
            activeCircle.prev().addClass('active');
        }
    };



});
