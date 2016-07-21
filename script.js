//twitch viewer

twitch_app = {};

twitch_app.twitch_url = "https://api.twitch.tv/kraken/streams";

twitch_app.channels = ['freecodecamp', 'noobs2ninjas', 'brtt', 'comster404', 'ambishh', 'brownman', 'pro_dota2_tv', 'thegamingowl123', 'cashnastygaming'];

$.each(twitch_app.channels, function(index, channel) {
  $.getJSON(twitch_app.twitch_url + "/" + channel + "?callback=?", function(channel_data) {
    var current_streamer = '';
    console.log(channel_data.stream);
    if (channel_data.stream === undefined) {
      current_streamer += "<li>";
      current_streamer += "<div class='row'>" ;
      current_streamer += "<div class='col-md-12'>";
      current_streamer += "<div class='col-md-8'>";
      current_streamer += "<p class= 'lead'>" + channel + "</p>";
      current_streamer += "<p class=''>" + "User no longer exists" + "</p>";
      current_streamer += "</div>";
      current_streamer += "</div>";
      current_streamer += "</div>";
      current_streamer += "</li>";
      $("#results_list").append(current_streamer);
    } else if (channel_data.stream === null) {
      current_streamer += "<li>";
      current_streamer += "<div class='row'>";
      current_streamer += "<div class='col-md-12'>";
      current_streamer += "<div class='col-md-8'>";
      current_streamer += "<p class= 'lead'>" + channel + "</p>";
      current_streamer += "<p class=''>" + "Offline" + "</p>";
      current_streamer += "</div>";
      current_streamer += "</div>";
      current_streamer += "</div>";
      current_streamer += "</li>";
      $("#results_list").append(current_streamer);

    } else {
      current_streamer += "<li>";
      current_streamer += "<div class='row'>";
      current_streamer += "<div class='col-md-12'>";
      current_streamer += "<div class='col-md-8'>";
      current_streamer += "<p class= 'lead'>" + channel + "</p>";
      current_streamer += "<a target='_blank' href='" + "https://www.twitch.tv/" + channel + "'>" + "<p class=''>" + "Online" + "</p>" + "</a>";
      current_streamer += "<p class=''>" + channel_data.stream.game + "</p>";
      current_streamer += "<p>Viewers: " + channel_data.stream.viewers + "</p>";
      current_streamer += "</div>";
      current_streamer += "<div class='col-md-4'>";
      current_streamer += "<img class='preview_img' src='" + channel_data.stream.preview.medium + "'>";
      current_streamer += "</div>";
      current_streamer += "</div>";
      current_streamer += "</div>";
      current_streamer += "</li>";
      $("#results_list").append(current_streamer);
    }
    console.log(channel_data);
  });
});

/*
$.ajax({
  type: 'GET',
  url: twitch_app.twitch_url,
  headers: {
    'Client-ID': 'glwbqa8yjg8c5tvwznkp7f3hiepgd6k'
  },
  crossDomain: true,
  dataType: 'jsonp',
  success: function(data) {
    var results = $("#results_list");
    $.each(data.streams, function(index, value) {
      results += '<li>';
      results += value.channel.display_name;
      results += '</li>';
    })
    $("#results_list").append(results);
  }
});
*/
var always_do;
