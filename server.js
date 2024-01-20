// const express = require('express');
// const app = express()
// // const dotenv = require('dotenv')
// require('dotenv').config()

// const port = process.env.PORT || 5000

// app.get("/api", (req,res) => {
//     res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
// })


// app.listen(port, "0.0.0.0", () => { console.log("server started on port 5000")})

const {createServer} = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config()

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const app =express()
const dev = app.get('env') !== 'production'


if(!dev) {
    app.disable('x-powered-by')
    app.use(compression())
    app.use(morgan('common'))

    app.use(express.static(path.resolve(__dirname, 'build')))
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

if(dev) {
    app.use(morgan('dev'))
}
const server = createServer(app)

server.listen(PORT, err => {
    if (err) throw err
    console.log('Server started!');
})


