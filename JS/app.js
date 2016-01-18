$(document).ready(function(){

    $("#demo01").animatedModal();
    $("#theTarget").skippr({
        transition: 'slide',
        speed: 1000,
        easing: 'easeOutQuart',
        navType: 'block',
        childrenElementType: 'div',
        arrows: true,
        autoPlay: false,
        autoPlayDuration: 5000,
        keyboardOnAlways: true,
        hidePrevious: false
    });
    $(".animsition").animsition();

});
