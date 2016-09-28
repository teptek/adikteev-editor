$(document).ready(function(){

    //init range plugin
    $('input[type="range"]').rangeslider();

    $('#custom-title-size').on('input', function(){
        var titleSize = $(this).val();
        $('#title').css('font-size', titleSize + 'px');
    });

    $('#custom-text-size').on('input', function(){
        var txtSize = $(this).val();
        console.log(txtSize);
        $('#text').css('font-size', txtSize + 'px');
    });

    //Banner background color config

    $('#bg-colorpicker').colorpicker({
        customClass: 'colorpicker-2x',
        sliders: {
            saturation: { maxLeft: 200, maxTop: 200 },
            hue: { maxTop: 200 },
            alpha: { maxTop: 200 }
        }
    })
    .on(
        'changeColor', function(e) {
            $('#custom-banner')[0].style.backgroundColor = e.color.toHex();
        }
    );

    //Add title to the customed banner

    $('#custom-banner').append('<h1 class="draggable" id="title">Votre titre</h1>');

    $('#title-form').keyup(function(){
        $('#custom-banner h1').remove();
        var title =  $('#custom-title').val();
        $('#custom-banner').append('<h1 class="draggable" id="title">' + title + '</h1>');
        $('.draggable').draggabilly({ containment: true }); // draggable plugin call
        return false
    });

    //Add text to the customed banner

    $('#custom-banner').append('<p class="draggable" id="texte">Votre texte</p>');

    $('#txt-form').keyup(function(){
        $('#custom-banner p').remove();
        var text =  $('#custom-txt').val();
        $('#custom-banner').append('<p class="draggable" id="text">' + text + '</p>');
        $('.draggable').draggabilly({ containment: true }); // draggable plugin call
        return false
    });

    //Remove title from the customed banner

    $('#title-remove').on('click', function(){
        $('#custom-banner h1').remove();
        $('#custom-title').val('');
    });

    //Remove text from the customed banner

    $('#txt-remove').on('click', function(){
        $('#custom-banner p').remove();
        $('#custom-txt').val('');
    });

    //Banner title config

    $('#title-colorpicker').colorpicker({
            customClass: 'colorpicker-2x',
            sliders: {
                saturation: { maxLeft: 200, maxTop: 200 },
                hue: { maxTop: 200 },
                alpha: { maxTop: 200 }
            }
        })
        .on(
            'changeColor', function(e) {
                $('#custom-banner h1')[0].style.color = e.color.toHex();
            }
        );

    //Banner txt config

    $('#text-colorpicker').colorpicker({
            customClass: 'colorpicker-2x',
            sliders: {
                saturation: { maxLeft: 200, maxTop: 200 },
                hue: { maxTop: 200 },
                alpha: { maxTop: 200 }
            }
        })
        .on(
            'changeColor', function(e) {
                $('#custom-banner p')[0].style.color = e.color.toHex();
            }
        );

    $(".link-bg").on('click', function(){
        $('.nav-items > ul > li, .nav-items-content > ul > li').removeClass('active');
        $(this).addClass('active');
        $('.content-bg').addClass('active');
    });

    $(".link-title").on('click', function(){
        $('.nav-items > ul > li, .nav-items-content > ul > li').removeClass('active');
        $(this).addClass('active');
        $('.content-title').addClass('active');
    });

    $(".link-text").on('click', function(){
        $('.nav-items > ul > li, .nav-items-content > ul > li').removeClass('active');
        $(this).addClass('active');
        $('.content-text').addClass('active');
    });

});