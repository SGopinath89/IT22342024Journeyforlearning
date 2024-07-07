const express = require("express");
const app = new  express();
const port = 8080;
const mongoose = require('mongoose')
const teachRoute = require('./route/teacherRoute')
const stuRoute = require('./route/studentRoute')
const subRoute = require('./route/subjectRoute')
const cors = require('cors');
app.use(cors());
const jwt=require("jsonwebtoken");
const secretkey = 'admin123';

// MongoDB connection
app.use(express.json())
app.use('/teach',teachRoute)
app.use('/stu',stuRoute)
app.use('/sub',subRoute)
mongoose.connect('mongodb://localhost:27017/Journey').then(()=>{
    console.log("DB Connected")
}).catch((error)=>{
    console.error(error)
})

app.listen(port,()=>{
    console.log("the api running on a port",port)
})

 
