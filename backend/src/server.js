// server.js

const express = require('express');
const routes = require('./routes');

//Create an app
const app = express();

app.use('/api/', routes);
app.use('/*', (req, res) => res.send('Not Found'));

//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);
