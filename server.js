// express
const express = require('express');

// opprett server
const server = express();

// middleware
server.use(express.static('public'));
server.use(express.json());

// bruk ejs view engine
server.set('view engine', 'ejs');

// start server
server.listen(80);

// routes
server.get('/', (req, res) => res.render('hjem'));

// 404
server.use((req, res) => res.status(404).render('404'));