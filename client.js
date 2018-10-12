$(function(){
  var socket = io.connect('https://rk-mobile-kitchens.herokuapp.com/:'+process.env.PORT);
  socket.on('stream', function(tweet) {
    console.log(tweet);
    $('body').append('<div class="tweet">' + tweet + '</div>');
});
});