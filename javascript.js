
function doSearch() {
   var val = $("#searchbar").val();
   $('.heading').addClass('hide');
   $('.search-br').addClass('hide');
   $('.search-area').addClass('search-area-top');
   $('.search-area').removeClass('search-area');
		         
   $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + val + "&origin=*&utf8",function(data){
   var name = data[1];
   var description = data[2];
   var link = data[3];
   showResults(name, description, link, val);
    });
   }
  
function showResults(names, desc, urls, val) {
   var item = ""; 
   for (var i = 0; i < names.length; i++) {
       item += "<div id=\"result-div\" class=\"well animated fadeIn\">";
       item += "<strong>"+ names[i] +": </strong>";
       item += "<p>" + desc[i] + "</p>";
       item += "<a data-target=\"#results\" href=\"" + urls[i] + "\"";
       item += "<i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>";
       item += "</a>";
       item += "</div>";
        }
   $("#results").html(item);
      
   $('[data-target]').click( function (e) {
     window.scrollTo(0, 0);
     $('#result-div').addClass('hide'); 
     var target = $($(this).attr('data-target'));
     target.load($(this).attr('href'));
     e.preventDefault(); // prevent anchor from changing window.location
   $('#results').addClass('results-container-white');
   $('#backbtn').addClass('backbtn-show');
   $('#backbtn').removeClass('backbtn');
   $('#searchbar').addClass('hide');
   $('#searchbtn').addClass('hide');


   $('#backbtn').click( function (e) { 
      window.scrollTo(0,0); 
      $('#results').removeClass('results-container-white');
      $('#result-div').removeClass('hide');    
      $('#backbtn').removeClass('backbtn-show');
      $('#backbtn').addClass('backbtn');
      $('#searchbar').removeClass('hide');
      $('#searchbtn').removeClass('hide');
      doSearch();
   });
       
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
 
