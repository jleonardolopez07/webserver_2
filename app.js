require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;





//TODO: require ('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Leonardo Lopez',
        titulo: 'Curso de Node'
    });
});




// esta linea de abajo no se ejecuta porque el codigo le da prioriedad 
// al codigo de arriba "app.use(express.static('public'));"

//app.get('/', (req, res) => {
//  res.send('Hello World')
//})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Leonardo Lopez',
        titulo: 'Curso de Node'
    });
});

app.get('/element', (req, res) => {
    res.render('element', {
        nombre: 'Leonardo Lopez',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/old/404.html');
})




app.listen(port, () => {
    console.log(`Escuchando por el http://localhost:${port}`);
});