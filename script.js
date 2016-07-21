//twitch viewer

twitch_app = {};

twitch_app.twitch_url = "https://api.twitch.tv/kraken/streams";

twitch_app.channels = ['freecodecamp', 'noobs2ninjas', 'brtt', 'comster404'];

$.each(twitch_app.channels, function(index, channel) {
  $.getJSON(twitch_app.twitch_url + "/" + channel + "?callback=?", function(channel_data) {
    var current_streamer = "<li>";
    current_streamer += "<p class= 'lead'>" + channel + "</p>";
    console.log(channel_data.stream);
    if (channel_data.stream === undefined) {
      current_streamer += "<p class='small'>" + "User no longer exists" + "</p>" + "</li>";
      $("#results_list").append(current_streamer);
      //$("#results_list").append("<li>" + "Online" + "</li>")
    } else if (channel_data.stream === null) {
      current_streamer += "<p class='small'>" + "Offline" + "</p>" + "</li>";
      $("#results_list").append(current_streamer);
      //$("#results_list").append("<li>" + "Offline" + "</li>")
    } else {
      current_streamer += "<a target='_blank' href='" + "https://www.twitch.tv/" + channel + "'>" + "<p class='small'>" + "Online" + "</p>" + "</a>" + "</li>";
      $("#results_list").append(current_streamer);
    }
    console.log(channel_data);
  });
});
$("body").css("background-color", "cornflowerblue");

$.ajax({
  type: 'GET',
  url: twitch_app.twitch_url,
  headers: {
    'Client-ID': 'glwbqa8yjg8c5tvwznkp7f3hiepgd6k'
  },
  crossDomain: true,
  dataType: 'jsonp',
  success: function(data) {
    //console.log(data);
    var results = $("#results_list");
    $("#eatshit").text(data.streams[0].average_fps);
    //$("#eatshit").text(data.streams.channel:freecodecamp);
    $.each(data.streams, function(index, value) {
      results += '<li>';
      results += value.channel.display_name;
      results += '</li>';
    })
    $("#results_list").append(results);
  }
});
