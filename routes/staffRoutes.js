const express = require('express'),
router = express.Router(),
Staff = require('../models/Staff');

router.get('/staff/register',(req,res)=>{
    res.send('staff registration form')
})

router.post('/staff/register',async(req,res)=>{
   try {
        const newStaff = new Staff(req.body);
        await newStaff.save();
        res.json({message:"staff sucessfully registered", newStaff});
   } catch (error) {
        res.status(400).send("staff not registered")
   }
})

router.get('/staff/getlist',async(req,res)=>{
    try {
         const staffList = await Staff.find({});
         res.json({message:"list of staff", staffList});
    } catch (error) {
         res.status(400).send("no staff found")
    }
})

router.get('/staff/:id',async(req,res)=>{
    try {
         const oneStaff = await Staff.findOne({_id:req.params.id});
         res.json({message:"staff details", oneStaff});
    } catch (error) {
         res.status(400).send("unable to find staff with that id")
    }
})

router.delete('/staff/:id',async(req,res)=>{
    try {
         await Staff.findOne({_id:req.params.id});
         res.json({message:"staff has been deleted"});
    } catch (error) {
         res.status(400).send("unable to delete staff with that id")
    }
})

router.patch('/staff/:id',async(req,res)=>{
    try {
         const options = {new:true};   
         const updatedStaff = await Staff.findOneAndUpdate({_id:req.params.id},{
            $set:{
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                phone:req.body.phone,
                role:req.body.role,
                department:req.body.department

            }
         },
         options
         );
         res.json({message:"staff details updated succesfully", updatedStaff});
    } catch (error) {
         res.status(400).send("unable to update staff with that id")
    }
})



module.exports = router;