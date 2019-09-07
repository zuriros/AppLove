jQuery('document').ready(function () {
    const menuBtn = $('.menu-icon'),
      menu = $('nav ul');

      menuBtn.click(function () {
        if (menu.hasClass('show')) {
            menu.removeClass('show');
        } else{
            menu.addClass('show');
        }
        //  menu.addClass('show');
    })
    
})