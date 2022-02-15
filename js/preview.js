$(document).ready(function(){
    $('.small').click(function(){
    var image = $(this).attr('src');
    $('.large-photo__lrg').attr('src',image);
    });
    });