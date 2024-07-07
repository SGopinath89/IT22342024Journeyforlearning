const mongoose = require('mongoose')
const { type } = require('os')
const Schema= mongoose.Schema


const teacherSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    photo: String,
    school: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    }
  });

const Teacher = mongoose.model('teacher',teacherSchema)

module.exports=Teacher



