var con = require('../db/mysql');
module.exports = {
    rootController: (req, res) => {
        res.send('Happy Coding!');
    },

    registerController: (req, res) => {
        //res.send(req.body);
        var today = new Date();
        var users = {
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email": req.body.email,
            "password": req.body.password,
            "created": today,
            "modified": today
        }
        con.query('INSERT INTO users SET ?', users, (err, result, fields) => {
            if (err) {
                console.log('Error Occured Inserting Data');
                res.status(400).send('Failed Inserting Data');
            } else {
                console.log('Data Inserted Successfully', result);
                res.status(200).send('User Registered Seccessfully with id : ' + result.insertId);
            }
        })
    },

    loginController: (req, res) => {
        //res.send(req.body);
        var email = req.body.email
        var password = req.body.password
        con.query("SELECT * FROM users WHERE email=?", [email], (err, result, fields) => {
            if (err) {
                console.log('Error Occured', err);
                res.status(400).send('Email Id doesn\'t Exist');
            } else {
                //console.log('The solution is: ', result);
                if (result.length > 0) {
                    if (result[0].password == password) {
                        res.status(200).send('Login Successful');
                    } else {

                    }
                } else {
                    console.log('Email or Password doesn\'t match')
                    res.status(401).json({
                        "error": "Email id not exist"
                    });
                }
            }
        });
    }
}