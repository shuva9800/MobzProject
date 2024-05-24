const express = require('express');
const route = express.Router();


route.post('/signup', (req,res)=>{
    const{name,email,passwords} = req.body;
    console.log(name, email, passwords);
    return res.status(200).json({
        success:true,
        message:"signup successful"
    })
})
route.get("/",(req,res)=>{
    return res.status(200).json({
        success:true,
        message:" Inside HOme Page"
    })
})


module.exports =route;