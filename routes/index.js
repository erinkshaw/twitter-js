const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
	var name = req.params.name;
  var tweets = tweetBank.find({name: name});
	res.render('index', {tweets: tweets, showForm: true, name: name });
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

router.post('/tweets', urlencodedParser, function(req, res) {
  // console.log('hello \n', req.body);
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});
// router.post('/users/:name', urlencodedParser, function(req, res) {
//   // console.log('hello \n', req.body);
//   var name = req.body.name;
//   var text = req.body.text;
//   tweetBank.add(name, text);
//   res.redirect('/');
// });



module.exports = router;
