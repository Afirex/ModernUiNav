const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/page/index.html');
});
app.get('/project', function (req, res) {
    res.sendFile(__dirname + '/page/project.html');
});
app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/page/contact.html');
});
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/page/simplecont.html');
});

app.get('/spurious', function (req, res) {
    res.sendFile(__dirname + '/page/spurious.html');
});
app.get('/arma', function (req, res) {
    res.sendFile(__dirname + '/page/armadillo.html');
});
app.get('/famox', function (req, res) {
    res.sendFile(__dirname + '/page/famox.html');
});

app.listen(process.env.port || 5000, function (req, res) {
    console.log("Roger");
})