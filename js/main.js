var $card = $(".card-panel");
var cardPadding = 50;

$(".parallax-container").height($card.outerHeight() + (cardPadding * 2));

$(".parallax").parallax();

var cardLogoHeight = $(".card-logo").height();
var cardContentHeight = $(".card-content").outerHeight();

var cardContentPadding =  (cardLogoHeight - cardContentHeight) / 2;

if (cardContentPadding > 0) {
  $(".card-content").css({
    marginTop: cardContentPadding
  });
}
