const User = require("./schema")
exports.CreateUser = async(req,res)=>{
       const {name,email,number,password}=  req.body 


var bools = await  User.doesEmailExist(email)
if(!bools){
    return res.json({status:"fail",message:"Email Already Exists"})
}
const user = await User({name,email,number,password})
await user.save();
res.json(user);
}