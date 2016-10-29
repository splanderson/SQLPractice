var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var massiveInstance = massive.connectSync({
  connectionString : "postgres://postgres:1234@localhost:8666/sandbox"
});
var controller = require('./controller.js');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());


app.set('db', massiveInstance);

controller.getPlanes();

// var db = app.get('db');

// db.new_plane(function(err, planes){
//     console.log(err, "plane added")
// });

app.listen(8080, function(){
  console.log("Successfully listening on : 8080")
})
