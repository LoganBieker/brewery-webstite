//const express = require('express');
//const mysql = require('mysql2/promise');
//const cors = require('cors');
const sql = require('mssql');
require('dotenv').config();
//const app = express();

//app.use(cors());
//app.use(express.json());

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABSE,
    options: {
        encrypt: true,
        enableArithAbort: true,
    }
}
module.exports = {
    getSQLData: async function getSQLData(app) {
        console.log(config);

        try {
            await sql.connect(config);
            console.log("Connected to MsSQL server");

            app.get('/api/brews', async (req, res) => {
                try {
                    console.log("Attempt to pull data")
                    const { type } = req.query;
                    const request = new sql.Request();
                    request.input('type', sql.VarChar, type);
                    let query;

                    if (type === "availble") {
                        query = `SELECT * FROM brewlist where brew_avalibility=1 order by brew_avalibility desc, brew_popularity desc, brew_name;`;
                    } else {
                        query = `SELECT * FROM brewlist where brew_type= @type order by brew_avalibility desc, brew_popularity desc, brew_name;`;
                    }

                    let results = await request.query(query);

                    //console.log("Query Results:", results);
                    // Verify that data was collected 
                    if (results.length === 0) {
                        console.log("No data found")
                        res.status(404).json({ message: "No data found" })
                    } else {
                        console.log("Brew data has been successfully Collected")
                        //console.log(results)
                        res.json(results.recordset);
                    }


                } catch (err) {
                    console.error('Error executing query:', err);
                    res.status(500).send(err.message);
                }
            });

            //const PORT = process.env.PORT || 3001;
            //app.listen(PORT, () => {
            ///    console.log(`Server running on port ${PORT}`);
            //});

        } catch (err) {
            console.error('Error connecting to MySQL server:', err);
        }
    },

    test: function test(app) {
        console.log("TEST")
        app.get('/api/brews', (req, res) => {
            res.json("This is test data")
        })
    }
}
