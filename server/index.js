const express = require('express')
const app=express()
const port = 8000
require('./mongo');
const User = require('./schema');


// app.use(express.json());

app.post('/posted',async (req,res)=>{
    // res.send(req.body);
    // console.log( JSON.p(req.body));

    var bools = await  User.doesEmailExist("OnkarKanse18@gmail.com")
    if(!bools){
        return res.json({status:"fail",message:"Email Already Exists"})
    }
    const user = await User({name:"Omkar Kanse",email:"OnkarKanse18@gmail.com",number:"9137532688",password:"OK"})
    await user.save();
    res.json(user);
    
})
app.get('/home',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Example JS at Sever ${port} `)
})