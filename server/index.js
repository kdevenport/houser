const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller');

const app = express();
massive(CONNECTION_STRING).then((dbInstance) =>{
    app.set('db', dbInstance);
}).catch((error) =>{
    console.log(error);
})

app.use(bodyParser.json());

//Endpoints

app.get('/api/houses', controller.getHouses);


const PORT = process.env.SERVER_PORT || 4040;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});