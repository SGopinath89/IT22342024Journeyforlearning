const mongoose = require('mongoose')
const router = express.Router()
const Subject = require('../models/Subject')
const Service =require('../Service/GenaricService')
const name = "Subject";

router.get('/',(req,res)=>{
    Service.getAll(res,Subject,name).catch((error)=>{
        res.status(500).send(error+"Server error")
    })    
})

/*
const mongoose = require('mongoose')
const router = express.Router()
const Subject = require('../models/Subject')

router.get('/',async (req,res)=>{
   const result = await Subject.find()
   if (result) {
    res.status(200).json(result)
   } else {
    res.status(404).send("Subject is not found")
   }
})

router.get('/:id',async (req,res)=>{
    const id = req.params.id 
    const result = await Subject.find(id)
    if (result) {
     res.status(200).json(result)
    } else {
     res.status(404).send("Subject is not found")
    }
 })

 router.post('/',async(req,res)=>{
    const{Subjectname,studentname}=req.body
    if (!Subjectname || !studentname) {
        res.status(400).send("please provide required fileds")
    } else {
        try {
            const result = await Subject.create({Subjectname,studentname})
        } catch (error) {
            res.status(500).json(error)
        }
    }
 })

 router.delete('/:id',async (req,res)=>{
    const id = req.params.id 
    const subject = await Subject.find(id).catch((error)=>{console.error(error)})
    if (!subject) {
     res.status(404).json("Subject is not found")
    } else {
      try {
        const result = await Subject.deleteOne(subject)
        res.status(200).json(result)
      } catch (error) {
        res.status(500).json(error)
      }
    }
 })

 router.put('/:id',async (req,res)=>{
    const id = req.params.id 
    const subject = await Subject.find(id).catch((error)=>{console.error(error)})
    if (!subject) {
     res.status(404).json("Subject is not found")
    } else {
        const{Subjectname,studentname}=req.body
        if (!Subjectname || !studentname) {
            res.status(400).send("please provide required fileds")
        } else {
            try {
                const result = await subject.updateOne({Subjectname,studentname})
            } catch (error) {
                res.status(500).json(error)
            }
        }
    }
 })
*/

module.exports= router