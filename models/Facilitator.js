const mongoose = require('mongoose')

const facilitatorSchema = new mongoose.Schema({
    firstName:{type:String, trim:true},
    lastname:{type:String, trim:true},
    email:{type:String, trim:true, unique:true},
    phone:{type:Number},
    role:{type:String, trim:true},
    department:{type:String, trim:true},
})

module.exports = mongoose.model('Facilitator',facilitatorSchema)