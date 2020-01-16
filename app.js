$(document).ready(function(){

    var toggleButton = $('[data-toggle]');
    var slider = $('[data-slider]');

    slider.mousemove(function (e) {
        var value = $(e.currentTarget).val();

        if(value > 500){
            var A = 501;
            var B = 1000;
            var C = 0;
            var D = 500;

            value = (value-A)/(B-A) * (D-C) + C
        }else{
            var A = 0;
            var B = 499;
            var C = -500;
            var D = 0;

            value = (value-A)/(B-A) * (D-C) + C
        }

        $('.card__interior').css('left', value);
    })

    toggleButton.click(function(e){
        $('.version__one').toggleClass('is-hidden');
        $('.version__two').toggleClass('is-hidden');

        slider.val(500);
    });

});