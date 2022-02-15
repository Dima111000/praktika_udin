$(document).ready(function () {
    const headOffSet = $('#wrapp').offset().top;
        $(window).scroll(function () {
                const scrolled = $(this).scrollTop();
                    if (scrolled > headOffSet) {
                        $('#pag').addClass('head-fixed');
                    }
                    else if (scrolled < headOffSet){
                        $('#pag').removeClass('head-fixed');
                    }
                        console.log(headOffSet);
                        console.log(scrolled);
        });
});