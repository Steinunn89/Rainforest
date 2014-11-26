require jquery
require jquery_ujs

// $(document).on('ready page:load', function() {
//   if ($('.pagination').length) {
//     $(window).scroll(function() {
//       var url = $('.pagination span.next').children().attr('href');
//       if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
//         $('.pagination').text("Fetching more products...");
//         return $.getScript(url);
//       }
//     });
//   }
// });

$(document).on('ready page:load', function() {
  // $('#search-form').submit(function(event) {
  //   event.preventDefault();
  //   var searchValue = $('#search').val();

  //    $.get('/products?search=' + searchValue)
  //     .done(function(data){
  //       console.log(data);
  //       $('#products').html(data);
  //     });
  // });
  console.log('why is it not loading this JS file errrrrr');
  
    if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination span.next').children().attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more products...");
        return $.getScript(url);
      }
    });
  }
});
