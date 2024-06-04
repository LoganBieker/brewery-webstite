const express = require('express');
const mysql = require('mysql2');

const app = express();
const config = {
    user: 'root',
    password: 'password',
    host: 'localhost',
    database: 'mydb',
}

const connection = mysql.createConnection(config);
// connect to your database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL server:', err);
        return;
    }
    console.log("Connected to mysql server")
})

app.get('/data', (req, res) => {
    connection.query('select * from brews', (err, results) => {
        if (err) {
            res.status(500).send(err.message);
            return; 
        }
        res.json(results); 
    })
})



// Using placeholders

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})