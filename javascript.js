
function doSearch() {
   var val = $("#searchbar").val();
   $('.heading').addClass('heading-hide');
   $('.search-br').addClass('heading-hide');
   $('.search-area').addClass('search-area-top');
   $('.search-area').removeClass('search-area');
   if (val.length == 0) {
       window.location.href = "https://en.wikipedia.org/wiki/Special:Random";
       return;
     }
		         
   $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + val + "&origin=*&utf8",function(data){
   var name = data[1];
   var description = data[2];
   var link = data[3];
   showResults(name, description, link);
    });
   }
  
function showResults(names, desc, urls) {
   var item = ""; 
   for (var i = 0; i < names.length; i++) {
       item += "<div class=\"well animated fadeIn\">";
       item += "<strong>"+ names[i] +": </strong>";
       item += "<p>" + desc[i] + "</p>";
       item += "<a data-target=\"#results-container\" href=\"" + urls[i] + "\"";
       item += "<i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>";
       item += "</a>";
       item += "</div>";
        }
   $("#results").html(item);
      
   $('[data-target]').click( function (e) {
     
     var target = $($(this).attr('data-target'));
     target.load($(this).attr('href'));
     e.preventDefault(); // prevent anchor from changing window.location
   $('#results-container').addClass('results-container-white');
   $('#backbtn').addClass('backbtn-show');
   $('#backbtn').removeClass('backbtn');

       });
       };

$(document).ready(function(){
  $(document).keypress(function(e) {
     if(e.which == 13) {
       doSearch();
          }
      });
  $("#searchbtn").click(doSearch);
});
 
