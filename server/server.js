const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api', (req, res) => {
    res.send(JSON.stringify({ test: 123 }));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}\\../client/build/index.html`));
});

app.listen(4000);
