// code gets installed at the end of the body (after all other HTML)
(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(900).css("display","inline-block")
            .delay(900)
            .fadeOut(900, showNextQuote);
    }

    showNextQuote();

})();
