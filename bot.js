console.log("The follow Bot is starting");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);


function tweetIt(text) {

var parameters = { 
	status: text
}

function postPost(err, data, response) {
	if (err) {
		console.log("You got an error")
	} else {
		console.log("It worked!");
	}
}


T.post('statuses/update', parameters, postPost());

};



var stream = T.stream('user')
 
stream.on('follow', followed);

function followed(eventMsg) {
	console.log("Follow Bot Working")
	var name = eventMsg.source.name; 
	var screenName = eventMsg.source.screen_name;
	tweetIt("@" + screenName + " Thanks for following me! [Reply generated from a bot]");
}



