const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const path = require("path")
const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ayahuasca", { useNewUrlParser: true }, () => {
    console.log("😊 Connected to the DB");
});

app.use('/auth', require('./routes/authRouter.js'))
app.use('/public', require('./routes/publicRouter.js'))

app.use('/api', expressJwt({ secret: process.env.SECRET }))
app.use('/api/posts', require('./routes/postRouter.js'))

app.use((err, req, res, next) => {
    console.log(err);
    if (err.name === 'UnauthorizedError') {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`[ 🙄 Server is running on Port ${PORT}]`);
})
