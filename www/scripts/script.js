$(document).ready(function() {

  // let isOpen = false;

  // $('.js-burger').on('click', function(){
  //   if (isOpen) {
  //     $('.js-menu').slideUp();
  //     isOpen = false;
  //   } else {
  //     $('.js-menu').slideDown();
  //     isOpen = true;
  //   }
  // });

  $('.js-burger').on('click', function(){
    $('.js-menu').slideToggle();
  });


  // Tabs contacts
  $('.js-tabs-link').on('click', function(){
    $('.js-tabs-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.js-tabs-link');

    $('.js-contacts-tab').removeClass('active');
    $('.js-contacts-tab').eq(index).addClass('active');
  });

  // Work filter
  $('.js-filter-link').on('click', function() {
    $('.js-filter-link').removeClass('active');
    $(this).addClass('active');

    let dataFilter = $(this).data('filter');
    console.log(dataFilter);

    if (dataFilter === 'all') {
      $('.js-works-item').show();
      return;
    }

    $('.js-works-item').each(function() {
      let dataType = $(this).data('type');

      if (dataType === dataFilter) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // FAQ
  let prevAccordionBtn;

  $('.js-faq-btn').on('click', function() {
    if (prevAccordionBtn === this) {
      $(this).next().slideToggle();
      $(this).toggleClass('open');
      return;
    }

    $(prevAccordionBtn).next().slideUp();
    $(prevAccordionBtn).removeClass('open');
    $(this).next().slideDown();
    $(this).addClass('open');
    prevAccordionBtn = this;
  });

  // Slick slider
  $('.js-slider').slick({
    dots: true
  });

});
