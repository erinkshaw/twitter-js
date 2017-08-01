const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
	var name = req.params.name; 
	console.log(name); 
	var tweets = tweetBank.find({name: name}); 
	res.render('index', {tweets: tweets}); 
}); 

router.get('/tweets/:id', function(req, res) {
	var id = Number(req.params.id); 
	//console.log(ab); 
	var tweet = tweetBank.find({id : id}); 
	console.log(tweet); 
	res.render('index', {tweets: tweet}); 
})
// router.get('/stylesheets/style.css', function(req, res) {
//   console.log(__dirname);
//   res.sendFile('/stylesheets/style.css', {root: __dirname + '/../public'})
// });

module.exports = router;
