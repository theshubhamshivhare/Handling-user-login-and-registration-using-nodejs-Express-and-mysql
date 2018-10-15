const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'demo'
});

con.connect((err) => {
    if (!err) {
        console.log("Database is connected...");
    } else {
        console.log("Error connecting database...");
    }
});

module.exports = con;