const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'ProjectLab4!',
    database: 'usersystem',
})

app.post('/create', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const reenterPassword = req.body.reenterPassword

    db.query('INSERT INTO users (name, email, password, reenterPassword) VALUES(?,?,?,?)',
    [name, email, password, reenterPassword], 
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values Inserted")
        }
    }
    )
})

app.listen(3001, ()=> {
    console.log("It is working")
})