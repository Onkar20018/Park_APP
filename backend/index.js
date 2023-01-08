const express = require('express')
const app=express()
const port = 8000
var Hi= "PRINT Zaxsdde"
app.post('/home',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Example JS at Sever ${port} ${Hi} `)
})