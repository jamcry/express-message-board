var express = require('express');
var router = express.Router();
const messages = [
  {
    text: 'So long, and thanks for all the fish!',
    user: 'D. N. A.',
    added: new Date('May 11, 2001 12:00:00'),
  },
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello, world!',
    user: 'Cem',
    added: new Date()
  },
  
];

/* GET home page. */
router.get('/', function(req, res, next) {
  // Pass reversed messages to show in descending date order
  res.render('index', { title: 'Express Message Board', messages: messages.reverse() });
});

/* GET new message page. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});

/* POST new message page */
router.post('/new', function(req, res, next) {
  // Get username and message from request body
  let { username, message } = req.body;

  // Push new message to messages array
  messages.push({
    text: message,
    user: username,
    added: new Date(),
  });

  // Redirect to homepage (main message board)
  res.redirect('/');
});

module.exports = router;
