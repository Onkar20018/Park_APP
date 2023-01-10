const express = require('express')
const app=express()
const port = 8000
require('./mongo');
const User = require('./schema');
const userRouter = require('./routes')

app.use(express.json());



app.get('/home',(req,res)=>{
    res.send('Hello World')
})

app.use(userRouter)

app.listen(port,()=>{
    console.log(`Example JS at Sever ${port} `)
})