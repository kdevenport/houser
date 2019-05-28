const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config({path: path.join(__dirname, ".env")});

const controller = require('./controller');

const app = express();
massive(CONNECTION_STRING, {scripts: __dirname + "/db"})
.then((dbInstance) =>{
    app.set('db', dbInstance);
}).catch((error) =>{
    console.log(error);
})

app.use(bodyParser.json());

//Endpoints
app.get('/api/houses', controller.getHouses);
app.delete('/api/house/:id', controller.deleteHouse);
app.post('/api/house', controller.addHouse);


const PORT = process.env.SERVER_PORT || 4040;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});