$(document).ready(function(){
   var input = document.querySelector('input');
   var teams = ['Arsenal', 'Tottenham Hotspur', 'Burnley', 'Watford', 'Leicester City', 'Everton', 'Southampton', 'Brighton & Hove Albion', 'Stoke', 'Bournemouth', 'Newcastle United', 'Huddersfield', 'West Bromwich Albion', 'Crystal Palace', 'West Ham United', 'Swansea', 'Chelsea', 'Liverpool', 'Manchester City', 'Manchester United'];
   var results;
   var wikiurlstart = "https://en.wikipedia.org/wiki/";

function autocomplete(val) {
   var team_return = [];
   for (i =0; i < teams.length; i++) {
      if (val == teams[i].slice(0, val.length).toUpperCase() || val == teams[i].slice(0, val.length).toLowerCase()) {
         team_return.push(teams[i]);
      }
   }
   return team_return;
}

input.onkeyup = function(e) {
   input_val = this.value;
   if (input_val.length > 0) {
      var teams_to_show = [];
      var teams_to_show_url = [];
      autocomplete_results = document.getElementById("autocomplete-results");
      autocomplete_results.innerHTML = '';
      teams_to_show = autocomplete(input_val);
      for (i = 0; i < teams_to_show.length; i++) {
	      if (teams_to_show[i] === 'Bournemouth') {
	         teams_to_show_url[i] = 'A.F.C._Bournemouth';}
              else {
                 teams_to_show_url[i]= (teams_to_show[i].split(' ').join('_')) + '_F.C.';
	 }
	  autocomplete_results.innerHTML += '<li class="link"><a data-target=\"#results\" href=' + wikiurlstart + teams_to_show_url[i] + '>' + teams_to_show[i] + '</a></li>';
      }
      autocomplete_results.style.display = 'block';
      $('[data-target]').click( function (e) {
          window.scrollTo(0, 0);
	  $('#result-div').addClass('hide'); 
	  var target = $($(this).attr('data-target'));
	  target.load($(this).attr('href'));
	  e.preventDefault(); // prevent anchor from changing window.location
          $('#results').addClass('results-container-white');
          $('.heading').addClass('hide');
	  $('.search-area').addClass('search-area-top');
	  $('.search-area').removeClass('search-area');
	  $('.link').addClass('hide');
      });
   } else {
     teams_to_show = [];
     teams_to_show_url = [];
     autocomplete_results.innerHTML = '';
   }
 }
});
 
