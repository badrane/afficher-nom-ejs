const express = require('express');
var app = express();
var ejs = require('ejs')
app.set('view engine', 'ejs');




app.get('/', function(req,res){
    nom('badrane', res)
})

var nom = function(name,res){
    // var name = name
    res.render('index', {data:name} )
}



app.listen(3007, function(){
    console.log('ok')
})