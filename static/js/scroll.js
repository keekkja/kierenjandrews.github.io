$(document).ready(function(){
    $('#down-arrow').on('click', function () {
       $("body,html").animate({ scrollTop: $(window).height() }, 600, 'swing');
    });
});
