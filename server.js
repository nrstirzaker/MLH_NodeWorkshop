const express = require('express')
const storage = require('./store')

const store = new storage();
const app = express()
app.use(express.json());
const port = 3000


app.get('/', function(req, res){
    res.send('Alive:' + new Date())
} )

app.get('/films', function(req,res){
    var films = store.getAll();
    res.send(films)
} )

app.get('/film/:index', function(req,res){
    var film = store.retrieve(req.params.index);
    res.send(film);
})

app.post('/film', function(req,res){
    var film = req.body;
    store.save(film);
    res.json({"Action":"Saved","Success":"True"});
})

app.put('/film/:index', function(req,res){
    var film = req.body;
    store.update(req.params.index,film);
    res.json({"Action":"Saved","Success":"True"});
})

app.delete('/film/:index', function(req,res){
    var success = store.remove(req.params.index);
    res.json({"Action":"Delete","Success":success});
})

app.listen(port, function(){
    //note the quote marks are actually backsticks
    console.log(`Example app listening on port ${port}!`)
})