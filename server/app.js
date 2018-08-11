const express = require('express')
const app = express()

// App Config
app.set('views', './views')
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));


// App Routes
app.get('/', function (req, res) {
    res.render('index')
})

// App Routes
app.get('/login', function (req, res) {
  res.render('index')
})

// Start the app
const port = process.env.PORT || 3001
app.listen(port, function () {
  console.log("Server : Listening on port : " + port);
})