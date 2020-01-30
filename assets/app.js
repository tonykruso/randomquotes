
//API link
var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?';

//grab quote from API and place into container slots
var getQuote = function(data){
  $.getJSON(url, function(data){
//actual quote
    $('#quote-text').text(JSON.stringify(data.quoteText));
//author info
    if(data.quoteAuthor === ''){
      data.quoteAuthor = 'Unknown';
    }
    $('#quote-author').text(' - ' + JSON.stringify(data.quoteAuthor));
  }, 'jsonp');
}

//initialize at loading page
$(document).ready(function(){
    getQuote();
});

//get quote onclick
$('#btnQuote').click(function(){
    getQuote();
});