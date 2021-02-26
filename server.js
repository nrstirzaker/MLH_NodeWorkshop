const express = require('express')
const storage = require('./store')

const store = new storage();
const app = express()
app.use(express.json());
const port = 3000

app.get('/', function (req, res) {
    res.send('Alive:' + new Date())
})

app.listen(port, function () {
    //note the quote marks are actually backsticks
    console.log(`Example app listening on port ${port}!`)
})