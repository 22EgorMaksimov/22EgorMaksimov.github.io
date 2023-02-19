$('a[href^="a"]').click(function(){
   let valHref = $(this).attr("href");
   $('html,body').animate({scrollTop: $(valHref).offset().top- 20 + "px"})
});
