console.log("The Bot is starting");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);


T.post('statuses/update', { status: 'Juverias the best!'}, function(err, data, response) {
  console.log(data)
})
