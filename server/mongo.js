const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const DB = "mongodb+srv://Onkar18:Onkar@cluster0.omcwrve.mongodb.net/ParkApp"
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log("Connected") }).catch((err) => {
    console.log(err)
})


// const personalSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     number: Number,
//     password: String
// })

// module.exports = mongoose.model("PersonalData", personalSchema)

// const reac =new PersonalData({
//     name:"Onkar",
//     email:"Created",
//     number:912,
//     password:"yeah"
// })
// reac.save()