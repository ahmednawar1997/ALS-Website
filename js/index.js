$(document).ready(function () {
    $('.social_tabs').hide();
  $('.scrollButton').click(function () {
    scrollToLandingMenu();
  });
$('#social').click(function(){
  $('.news').hide();
  $('.social_tabs').show();
  $('#social').css({"text-decoration": "underline"});
  $('#new').css({"text-decoration": "none"});
});

$('#new').click(function(){
    $('.news').show();
      $('.social_tabs').hide();
  $('#new').css({"text-decoration": "underline"});
  $('#social').css({"text-decoration": "none"});
});



  var firstLoad = true;
  $(window).scroll(function () {
    function elementScrolled(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

    if (elementScrolled('#landingMenu') && firstLoad) {
      firstLoad = false;
      scrollToLandingMenu();
    }
  });

});
function scrollToLandingMenu() {
  $('html, body').animate({ scrollTop: $("#landingMenu").offset().top }, 700);
};

var iFrame = $('.takeTourContainer');
$('#takeATourButton').click(function () {
  $('.takeTourContainer').css("display", "block");
  $('#landingPage').attr("class", "blur");
  $('body').css('overflow', 'hidden');

  $('.takeTourContainer iframe').prop("src", function(){
    return $(this).data("src");
});

});

function closeVideo() {
  $('.takeTourContainer').css("display", "none");
  $('#landingPage').removeClass("blur");
  $('.takeTourContainer').remove();
  $("#UserHomePage").append(iFrame);
  $('body').css('overflow-y', 'auto');
  $('body').css('overflow-x', 'hidden');
};





buildApiRequest('GET',
                '/youtube/v3/playlists',
                {'channelId': 'UCQjdHFVH_4osKdCCu_sQDvw',
                 'maxResults': '25',
                 'part': 'snippet,contentDetails'});
