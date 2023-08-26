const { json } = require('body-parser');
const express = require('express');
const nodemon = require('nodemon');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(json());


app.get('/', (req, res) => {
    res.render('index');
}); 

const PORT = 8002;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
