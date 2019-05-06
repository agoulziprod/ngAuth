const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('hello from server');
    
});

app.listen(PORT, () => {
    console.log('App listening on port'+PORT);
});