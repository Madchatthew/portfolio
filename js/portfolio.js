$(document)
.ready(function() {

  // fix menu when passed
  $('.masthead')
    .visibility({
      once: false,
      onBottomPassed: function() {
        $('.top.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.top.menu').transition('fade out');
      }
    });
});