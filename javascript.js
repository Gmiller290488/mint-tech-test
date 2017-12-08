



$(document).ready(function(){
   var input = document.querySelector('input');
   var teams = ['arsenal', 'chelsea', 'liverpool', 'manchester city', 'manchester united'];
   var results;
   var wikiurlstart = "https://en.wikipedia.org/wiki/";
   var wikiurlend = "_fc";

function autocomplete(val) {
   var team_return = [];
   for (i =0; i < teams.length; i++) {
      if (val === teams[i].slice(0, val.length)) {
         team_return.push(teams[i]);
      }
   }
   return team_return;
}

input.onkeyup = function(e) {
   input_val = this.value;
   if (input_val.length > 0) {
      var teams_to_show = [];

      autocomplete_results = document.getElementById("autocomplete-results");
      autocomplete_results.innerHTML = '';
      teams_to_show = autocomplete(input_val);

      for (i = 0; i < teams_to_show.length; i++) {
	  autocomplete_results.innerHTML += '<li><a data-target=\"#results\" href=' + wikiurlstart + teams_to_show[i] + wikiurlend + '>' + teams_to_show[i] + '</a></li>';
      }
      autocomplete_results.style.display = 'block';
      $('[data-target]').click( function (e) {
          window.scrollTo(0, 0);
	  $('#result-div').addClass('hide'); 
	  var target = $($(this).attr('data-target'));
	  target.load($(this).attr('href'));
	  e.preventDefault(); // prevent anchor from changing window.location
      });
   } else {
     teams_to_show = [];
     autocomplete_results.innerHTML = '';
   }
}

      });
 
