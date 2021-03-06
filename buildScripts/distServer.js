import express from "express";
import path from "path";
import open from "open";
import compression from 'compression';


/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
    res.json(
        [
            { "id": 1, "firstName": "Diego Camilo", "lastName": "Martins", "email": "diego@email.com" },
            { "id": 2, "firstName": "Ana Paula", "lastName": "Silva", "email": "ana@email.com" },
            { "id": 3, "firstName": "Sandra", "lastName": "Duarte", "email": "sandra@email.com" }
        ]
    );
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port)
    }
});