$(document).ready(function(){
    $('#down-arrow, #svgcontainer').on('click', function () {
       $("body,html").animate({ scrollTop: $(window).height() }, 600, 'swing');
    });
});
