const mongoose = require('mongoose')
const { type } = require('os')
const Schema= mongoose.Schema

const studentSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    photo:{type:Image,required:true},
})

const Student = mongoose.model('teacher',studentSchema)

module.exports=Student