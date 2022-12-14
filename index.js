'use strict';
//require dotenv module so we can access environement variables
require('dotenv').config();

//bring in express module
const express = require('express');

const starWars = {
    characterName: 'Princess Leia',
    age: 'older',
    lightsaberColor: 'not applicable',
    father: 'Darth Vader ?',
    quip: 'Being a baddie'
}

//bring in the port from env
const port = process.env.PORT || 3002;

//assign variable that calls express function so we can use everything express does
//instantiate express
const app = express();

//routes are endpoints, lets make one
app.get('/', (req, res)=>{
    res.send('Hello World!!!');
});

//send user a star wars character
app.get('/starwars', (req, res)=>{
    res.send(starWars);
});

app.get('/starwars/:id', (req, res)=>{
    // console.log(req.params.id);
    // res.send(req.params.id);
    if(req.params.id !== 'leia'){
        console.log('not leia');
        res.sendStatus(400)
    }else{
        console.log('leia!!!')
        // res.sendStatus(200)
        res.send(starWars)
    }
})


//listen for the port/turns on the express server
app.listen(port, ()=> console.log(`Listening on port: ${port}`));