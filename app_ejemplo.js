const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send()
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
})