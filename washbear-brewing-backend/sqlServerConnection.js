//const express = require('express');
const mysql = require('mysql2/promise');
//const cors = require('cors');
//const app = express();

//app.use(cors());
//app.use(express.json());

const config = {
    user: 'root',
    password: 'password',
    host: 'localhost',
    database: 'mydb',
}
module.exports = {
    getSQLData: async function getSQLData(app) {
        try {
            const connection = await mysql.createConnection(config);
            console.log("Connected to MySQL server");

            app.get('/api/brews', async (req, res) => {
                try {
                    console.log("Attempt to pull data")
                    const { type } = req.query;
                    let results, fields;
                    if (type === "availble") {
                        
                        [results, fields] = await connection.execute(`SELECT * FROM brews where brew_avalibility=1 order by brew_avalibility desc, brew_popularity desc, brew_name;`);
                    } else {
                        [results, fields] = await connection.execute(`SELECT * FROM brews where brew_type="${type}" order by brew_avalibility desc, brew_popularity desc, brew_name;`);
                    }
                    
                    
                    //console.log("Query Results:", results);
                    // Verify that data was collected 
                    if (results.length === 0) {
                        console.log("No data found")
                        res.status(404).json({ message: "No data found" })
                    } else {
                        console.log("Brew data has been successfully Collected")
                        res.json(results);
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
