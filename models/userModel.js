const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
Name:{
    type:String,
    required:[true,'please enter your first name']
},

email:{
    type:String,
    required:[true,'please enter your email'],
    unique:true
},
password:{
    type:String,
    required:[true,'please enter your password']
},
contactNumber:{
    type:String,
    required:[true,'please enter your phone number']
},

})

const userModel=mongoose.model('User',userSchema)

module.exports=userModel;