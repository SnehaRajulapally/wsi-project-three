var express = require('express');
var path = require('path');
var port = 3000;

var indexRouter = require('./routes/index');
var resultsRouter = require('./routes/results');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));

//Route Prefixes
app.get('/', function(req, res) {
    res.render(path.join(__dirname, 'views'))
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.use('/index', indexRouter);
app.use('/results', resultsRouter);

module.exports = app;