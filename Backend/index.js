require('dotenv').config()
const express = require('express');
const router = require('./routes');
const dbConnection = require('./config/dbConnection');
const app = express();

dbConnection();

app.use(router)

app.get('/', (req,res)=>{
    res.send("working")
})

const port = 3000

app.listen(port, ()=>{
    console.log("server is running")
})