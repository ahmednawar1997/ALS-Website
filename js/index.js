$(document).ready(function () {
  $('.social_tabs').addClass("hideEverything");
  $('.news').addClass("hideEverything");
  $('.scrollButton').click(function () {
    scrollToLandingMenu();
  });
  $('#social').click(function () {
    $('.news').addClass("hideEverything");
    $('.news').removeClass("showEverything")
    $('.social_tabs').removeClass("hideEverything");
    $('.social_tabs').addClass("showEverything");
    $('#social').css({
      "text-decoration": "underline"
    });
    $('#new').css({
      "text-decoration": "none"
    });
  });

  $('#new').click(function () {
    $('.social_tabs').addClass("hideEverything");
    $('.social_tabs').removeClass("showEverything");
    $('.news').removeClass("hideEverything");
    $(".news").addClass("showEverything");

    $('#new').css({
      "text-decoration": "underline"
    });
    $('#social').css({
      "text-decoration": "none"
    });
  });
  var firstScroll = true;
  $(window).scroll(function () {
    if (firstScroll) {
      var hT = $('#newsStand').offset().top,
        hH = $('#newsStand').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
        console.log("arrive");
        firstScroll = false;
        $('.news').addClass("showEverything");


      }
    }
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
  $('html, body').animate({
    scrollTop: $("#landingMenu").offset().top
  }, 700);
};

function scrollToTop() {
  $('html, body').animate({
    scrollTop: $("#image").offset().top
  }, 200);
};

$('#takeATourButton').click(function () {
  scrollToTop();
  $('.takeTourContainer').css("display", "block");
  $('#image').addClass("blur");
  $('body').css('overflow', 'hidden');

  $('.takeTourContainer iframe').prop("src", function () {
    return $(this).data("src");
  });

});

var iFrame = $('.takeTourContainer');

function closeVideo() {
  $('.takeTourContainer').css("display", "none");
  $('#image').removeClass("blur");
  $('.takeTourContainer').remove();
  $("body").append(iFrame);
  $('body').css('overflow-y', 'auto');
  $('body').css('overflow-x', 'hidden');
};





buildApiRequest('GET',
  '/youtube/v3/playlists', {
    'channelId': 'UCQjdHFVH_4osKdCCu_sQDvw',
    'maxResults': '25',
    'part': 'snippet,contentDetails'
  });