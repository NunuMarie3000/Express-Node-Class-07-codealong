'use strict';
//require dotenv module so we can access environement variables
require('dotenv').config();

//bring in express module
const express = require('express');

//

//bring in the port from env
const port = process.env.PORT || 3002;

//assign variable that calls express function so we can use everything express does
//instantiate express
const app = express();

//routes are endpoints, lets make one
app.get('/', (req, res)=>{
    res.send('Hello World!');
})



//listen for the port/turns on the express server
app.listen(port, ()=> console.log(`Listening on port: ${port}`));