const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://Onkar18:Onkar@cluster0.omcwrve.mongodb.net/ParkApp", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log("Connected") }).catch((err) => {
    console.log(err)
})

const personal = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    password: String
})

const PersonalData = new mongoose.model("PersonalData", personal)

const reac =new PersonalData({
    name:"Onkar",
    email:"No",
    number:912,
    password:"yeah"
})
reac.save()