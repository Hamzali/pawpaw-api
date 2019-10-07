const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

const pets = require('./src/pets');

app.get('/pets', async (req, res) => {
    const result = await pets.read();
    res.json({data: result});
});
app.post('/pets', async (req, res) => {
    const {name, age, color, species} = req.body;
    await pets.create(name, age, color, species);
    res.json({message: `${name} is created.`});
});
app.put('/pets/:name', async (req, res) => {
    // TODO: take name parameter from the route and update with given values in the body.
    res.send({message: 'updated pet.'});
});
app.delete('/pets/:name', async (req, res) => {
    // TODO: take name parameter from the route and delete the pet record from database
    res.send({message: 'deleted pet'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));