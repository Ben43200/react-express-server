const express = require('express');
const app = express()
// const dotenv = require('dotenv')
require('dotenv').config()

const port = process.env.PORT || 5000

app.get("/api", (req,res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
})


app.listen(port, "0.0.0.0", () => { console.log("server started on port 5000")})