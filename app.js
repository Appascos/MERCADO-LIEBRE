const express = require('express');
const path = require ('path');

const app = express();

app.use(express.static(path.resolve(__dirname,'./public')));

app.listen (process.env.PORT || 3002, function () {
    console.log ('Servidor corriendo en el puerto 3002');
});

app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'views/index.html'));
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/register.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
});
