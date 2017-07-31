var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send('we are currently working')
});

router.get('/ajax', function(req, res){
	var arr = ['Howdy Partner!', 'There\'s a Snake in my Boot!', 'Somebody\'s Poisoned the Water Hole!', 'Reach For The Sky!', 'You\'re My Favorite Deputy', 'Yee-Haw!'];
	res.send(arr);
})




module.exports = router;