$(function() {
  
  $.get("https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=BoundlessDevs&count=5", {},
    function(result) {
      console.log(result);
      return $('.tweets').append(result);
    }
  );
});