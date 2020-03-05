var express = require('express');
var router = express.Router();

const messages = [ { text: 'Hello all!', user: 'Kelel', added: new Date() },
{ text: 'Hello Kelel, welcome!', user: 'Lawry', added: new Date() } ]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Message-Board", messages: messages })
});

router.get('/new', function(req, res, next) {
  res.render('form')

});

router.post('/new', function(req, res, next) {
  messages.push({ text: req.body.messageText, user: req.body.user, added: new Date() })
  res.redirect('/')
})

module.exports = router;
