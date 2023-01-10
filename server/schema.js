const mongoose = require('mongoose')

const personalSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    password: String
})
     personalSchema.statics.doesEmailExist = async function(email){
        if(!email) throw new Error("Invalid Email")
        try {
            const use = await this.findOne({email})
        if(use){
            return false; 
        }
        else{
            return true;
        }
        } catch (error) {
                console.log("Error in EmailVal :",error.message)
                return false;   
        }
    }
module.exports = mongoose.model("PersonalData", personalSchema)