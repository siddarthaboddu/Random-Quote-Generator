
function query() {
    // var searchWord = "x" + document.getElementById("text").value + "x";
    console.log("dasf");
    //var searchWord = document.getElementById("inputtext").value;
    //console.log(searchWord);
    var xhr = new XMLHttpRequest();
    //xhr.open('GET', 'https://api.unsplash.com/search/photos?page=1&query=' + searchWord + '+&client_id=de1f8c5683779bffc967130fe47d4cdfd75bf8cc2bfc0e550df44e8dc2ee5c47');
   
  /*  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data) { 
        $("#inputtext").append(data[0].content);
        $("#inputtext").append("<p>" + data[0].title + "</p>");
        
    });*/
    var data;
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", data, function(jd) {
        $('#inputtext').html('        The Quote: ' + jd.quoteText + '        ');
        $('#inputtext').append('<p style="text-align:right"> - ' + jd.quoteAuthor + '</p>');
    });
   
}
function renderOutputHtml(ourdata) {
    var quote = ourdata["content"];
    var name = outdata["title"];
    Console.log(content);
   // var htmlstring = "";
    //for (var i= 0; i < 10;i++){
   //     htmlstring += "<img src=" + results[i]["urls"]["small"] + " style='padding:10px 10px 10px 10px' height='200' width='200'>";
        
   // }
    //$("#list").append(htmlstring);
    $("#inputtext").append(content);
    $("#inputtext").append("<p>"+title+"</p>");
    
}

function main() {
    
    $('#search').click(query());
}
$(document).ready(main);
