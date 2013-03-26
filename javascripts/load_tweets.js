$(function() {
  
  $.get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=BoundlessDevs&count=2", {},
    function(result) {
      console.log(result);
      return $('.tweets').append(result);
    }
  );
});