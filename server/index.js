const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host: 'mysql_db',
    user: 'USER',
    password: 'PWD',
    database: 'database'
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

///////////////////////

app.get('/', (req, res) => {
    res.send('Homepage');
});

///////////////////////

app.listen('5280', () => {});
