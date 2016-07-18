//twitch viewer

twitch_app = {};

twitch_app.twitch_url = "https://api.twitch.tv/kraken/streams";

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
    console.log(data);
    var results = $("#results_list");
    $("#eatshit").text(data.streams[0].average_fps);
    $.each(data.streams, function(index, value) {
        results += '<li>';
        results += value.channel.display_name;
        results += '</li>';
      }
    )
    $("#results_list").append(results);
  }
});
