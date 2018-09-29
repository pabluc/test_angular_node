// equivalent of older: const express = require('express')
import express from 'express';
// Put at the top
import { routes } from './routes'; 

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*"); //Origin, X-Requested-With, Content-Type, Accept, username, password
    next();
  });

// Handle POST requests that come in formatted as JSON
app.use(express.json());

app.use('/', routes);

app.use('/front/*',express.static(__dirname + '/customtoys-customers-app/dist'));
app.use('/',express.static(__dirname + '/customtoys-customers-app/dist'));


const port: number = Number(process.env.PORT) || 4100; 

// start our server on port 4201
app.listen(port, () => {
    console.log(`Server now listening on ${process.env.PORT}`);
    console.log(`Server now listening on ${port}`);
});
