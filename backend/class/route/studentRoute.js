const mongoose = require('mongoose')
const router = express.Router()
const Student = require('../models/Student')
const Service =require('../Service/GenaricService')
const name = "Student";

router.get('/',(req,res)=>{
    Service.getAll(res,Student,name).catch((error)=>{
        res.status(500).send(error+"Server error")
    })    
})

/*
const mongoose = require('mongoose')
const router = express.Router()
const Student = require('../models/Student')

router.get('/',async (req,res)=>{
   const result = await Student.find()
   if (result) {
    res.status(200).json(result)
   } else {
    res.status(404).send("Student is not found")
   }
})

router.get('/:id',async (req,res)=>{
    const id = req.params.id 
    const result = await Student.find(id)
    if (result) {
     res.status(200).json(result)
    } else {
     res.status(404).send("Student is not found")
    }
 })

 router.post('/',async(req,res)=>{
    const{name,email,password,photo}=req.body
    if (!name || !email || !password || !photo) {
        res.status(400).send("please provide required fileds")
    } else {
        try {
            const result = await Student.create({name,email,password,photo})
        } catch (error) {
            res.status(500).json(error)
        }
    }
 })

 router.delete('/:id',async (req,res)=>{
    const id = req.params.id 
    const student = await Student.find(id).catch((error)=>{console.error(error)})
    if (!student) {
     res.status(404).json("Student is not found")
    } else {
      try {
        const result = await Student.deleteOne(student)
        res.status(200).json(result)
      } catch (error) {
        res.status(500).json(error)
      }
    }
 })

 router.put('/:id',async (req,res)=>{
    const id = req.params.id 
    const student = await Student.find(id).catch((error)=>{console.error(error)})
    if (!student) {
     res.status(404).json("Student is not found")
    } else {
        const{name,email,password,photo}=req.body
        if (!name || !email || !password || !photo) {
            res.status(400).send("please provide required fileds")
        } else {
            try {
                const result = await student.updateOne({name,email,password,photo})
            } catch (error) {
                res.status(500).json(error)
            }
        }
    }
 })
*/

module.exports= router