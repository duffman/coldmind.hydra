/// <reference path="./typings/node.d.ts" />

var path = require("path");
var express = require("express");
var app = express();

//app.set("view engine", "ejs");


var fs = require('fs'); // this engine requires the fs module
app.engine('ntl', function (filePath, options, callback) { // define the template engine
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(new Error(err));
        // this is an extremely simple template engine
        var rendered = content.toString().replace('#title#', '<title>'+ options.title +'</title>')
        .replace('#message#', '<h1>'+ options.message +'</h1>');
        return callback(null, rendered);
    });
});
app.set('views', './views'); // specify the views directory
app.set('view engine', 'ntl'); // register the template engine


app.set("views", path.join(__dirname, "views"));


app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

/*
app.get('/', function(req, res) {
    res.render('index');
});
*/



/*/ javascript
var ejs = require("./zynaptic.viewengine/lib/ejs");
var users = ['geddy', 'neil', 'alex'];

// Just one template
ejs.render('<?= users.join(" | "); ?>', {users: users}, {delimiter: '?'});
// => 'geddy | neil | alex'

// Or globally
ejs.delimiter = '$';
var render = ejs.render('<$= users.join(" | "); $>', {users: users});
// => 'geddy | neil | alex'

console.log(render);
*/

app.listen(8080);